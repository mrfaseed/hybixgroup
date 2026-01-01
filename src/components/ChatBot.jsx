import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaTimes, FaCommentDots, FaRobot, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { knowledgeBase, findResponse, quickPrompts } from './ChatBotData';
import './ChatBot.css';
import favIcon from '../assets/favicon.png';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! 👋 I'm the Hybix AI Assistant. I can help you with services, contacts, or technical questions. What's on your mind?",
            sender: 'bot',
            type: 'text'
        }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const chatWindowRef = useRef(null);
    const isDragging = useRef(false);

    // Drag controls for the window
    const dragControls = useDragControls();

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [messages, isOpen]);

    // Close chat on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen &&
                chatWindowRef.current &&
                !chatWindowRef.current.contains(event.target) &&
                !event.target.closest('.chatbot-trigger-new')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        processMessage(inputText);
    };

    const processMessage = (text) => {
        if (!text.trim()) return;

        const userMsg = { id: Date.now(), text: text, sender: 'user', type: 'text' };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        // Simulate AI processing delay
        setTimeout(() => {
            const responseText = findResponse(text);
            const botMsg = { id: Date.now() + 1, text: responseText, sender: 'bot', type: 'text' };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200 + Math.random() * 800);
    };

    const handlePromptClick = (prompt) => {
        processMessage(prompt);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={chatWindowRef}
                        className="chatbot-window-new"
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        drag
                        dragListener={false}
                        dragControls={dragControls}
                        dragConstraints={{ left: -1000, right: 1000, top: -500, bottom: 500 }}
                        dragMomentum={false}
                    >
                        {/* Glassmorphism Header - Draggable Area */}
                        <div
                            className="chatbot-header-new"
                            onPointerDown={(e) => dragControls.start(e)}
                            style={{ touchAction: "none", cursor: "grab" }}
                        >
                            <div className="header-brand">
                                <div className="header-logo-container">
                                    <img src={favIcon} alt="Hybix AI" className="header-logo-img" />
                                    <div className="online-badge"></div>
                                </div>
                                <div className="header-text">
                                    <h3>Hybix AI</h3>
                                    <span>Always Online</span>
                                </div>
                            </div>
                            <div className="header-controls">
                                <button
                                    onClick={toggleChat}
                                    className="close-btn-new"
                                    title="Close Chat"
                                    onPointerDown={(e) => e.stopPropagation()}
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </div>

                        {/* Decoration Circle */}
                        <div className="bg-decoration"></div>

                        {/* Messages Area */}
                        <div className="chatbot-body">
                            <div className="messages-container">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        className={`chat-bubble-wrapper ${msg.sender}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {msg.sender === 'bot' && (
                                            <div className="msg-avatar-small">
                                                <img src={favIcon} alt="AI" />
                                            </div>
                                        )}
                                        <div className={`chat-bubble ${msg.sender}`}>
                                            {/* Link parsing for WhatsApp */}
                                            {msg.text.includes('whatsapp.com') ? (
                                                <span>
                                                    {msg.text.split('http')[0]}
                                                    <a href={`http${msg.text.split('http')[1]}`} target="_blank" rel="noopener noreferrer" className="chat-link">
                                                        <FaWhatsapp style={{ marginRight: '5px' }} /> Join Group
                                                    </a>
                                                </span>
                                            ) : (
                                                msg.text.split('\n').map((line, i) => <div key={i}>{line}</div>)
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="chat-bubble-wrapper bot">
                                        <div className="msg-avatar-small">
                                            <img src={favIcon} alt="AI" />
                                        </div>
                                        <div className="chat-bubble bot typing-bubble">
                                            <span className="dot-anim"></span>
                                            <span className="dot-anim"></span>
                                            <span className="dot-anim"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Auto-Prompts */}
                        <div className="quick-prompts-container">
                            {quickPrompts.map((prompt, index) => (
                                <button key={index} onClick={() => handlePromptClick(prompt)} className="prompt-chip">
                                    {prompt}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form className="chatbot-footer-new" onSubmit={handleSendMessage}>
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Ask about services, tech..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <button type="submit" disabled={!inputText.trim()} className="send-btn-new" title="Send Message">
                                <FaArrowRight />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            {!isOpen && (
                <motion.button
                    className="chatbot-trigger-new"
                    onTap={() => !isDragging.current && toggleChat()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    drag
                    dragMomentum={false}
                    dragConstraints={{ left: -window.innerWidth + 100, right: 0, top: -window.innerHeight + 100, bottom: 0 }}
                    onDragStart={() => { isDragging.current = true; }}
                    onDragEnd={() => { setTimeout(() => isDragging.current = false, 150); }}
                >
                    <div className="trigger-icon-container">
                        <img src={favIcon} alt="Chat" className="trigger-logo" />
                    </div>
                </motion.button>
            )}
        </>
    );
};

export default ChatBot;
