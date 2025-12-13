
// ChatBot Knowledge Base
// Uses keyword matching to simulate understanding of thousands of questions.

export const quickPrompts = [
    "What services do you offer?",
    "How can I contact Hybix?",
    "Tell me about AI solutions",
    "Do you do mobile apps?",
    "Cost of a website?",
    "Join WhatsApp Group",
    "Start a Project",
    "Why choose Hybix?",
    "E-commerce Solutions"
];

export const knowledgeBase = [
    // --- COMPANY INFO ---
    {
        keywords: ["services", "offer", "provide", "work", "portfolio", "products"],
        response: "We offer a comprehensive suite of digital services: \n1. Web Development (MERN, Next.js)\n2. Mobile App Development (React Native, Flutter)\n3. UI/UX Design\n4. AI & Machine Learning Solutions\n5. Blockchain & Web3\n6. Digital Marketing & SEO\n7. Cloud Solutions (AWS, Azure)\nVisit our Services page for more details."
    },
    {
        keywords: ["contact", "email", "phone", "call", "reach", "address", "location", "office", "where"],
        response: "You can reach us anytime! \n📧 Email: contact@hybixgroup.com\n📱 Phone: +91- \n📍 HQ: Chennai, India. We serve clients globally.\nOr click the phone icon to call directly."
    },
    {
        keywords: ["team", "founder", "ceo", "staff", "developers", "who are you"],
        response: "Hybix Group is led by visionary tech leaders and supported by a team of expert full-stack developers, designers, and AI specialists. We are passionate about innovation."
    },
    {
        keywords: ["price", "cost", "rate", "quote", "pricing", "budget", "expensive", "cheap"],
        response: "Our pricing is tailored to each project's specific needs and complexity. We offer competitive rates for premium quality. Please contact us for a free consultation and quote."
    },
    {
        keywords: ["hiring", "jobs", "career", "inteview", "join", "vacancy", "opening"],
        response: "We are always looking for talent! Check our Careers page for current openings in Web Dev, AI, and Marketing. You can send your resume to careers@hybixgroup.com."
    },
    {
        keywords: ["whatsapp", "group", "chat", "community"],
        response: "Join our vibrant tech community on WhatsApp to stay updated! Click here: https://chat.whatsapp.com/HmpBFZjaoC7DC46CNlR3cD"
    },
    {
        keywords: ["about", "hybix", "company", "story", "vision", "mission"],
        response: "Hybix Group is a premier technology solutions provider. Our mission is to empower businesses with cutting-edge digital tools, from AI integration to scalable web architectures."
    },

    // --- NEW SECTIONS ---
    {
        keywords: ["why", "choose", "benefit", "advantage", "special"],
        response: "Why Hybix? \n✅ Proven Expertise in AI & Web3\n✅ User-Centric Design\n✅ Agile Development Process\n✅ Post-Launch Support\n✅ Competitive Pricing\nWe build partnerships, not just software."
    },
    {
        keywords: ["ecommerce", "store", "shop", "selling", "shopify", "woocommerce"],
        response: "We build high-converting e-commerce stores using Shopify, WooCommerce, or custom MERN stack solutions. We handle payment gateways, inventory management, and secure checkout integration."
    },
    {
        keywords: ["consulting", "advice", "strategy", "cto"],
        response: "Need technical direction? We offer Tech Consulting and Fractional CTO services to help you make the right architecture and technology decisions for your business."
    },
    {
        keywords: ["redesign", "revamp", "update", "modernize", "old website"],
        response: "Is your website looking outdated? We specialize in Website Redesign and Legacy App Modernization to improve performance, aesthetics, and user experience."
    },
    {
        keywords: ["refund", "cancel", "policy", "money back"],
        response: "Our refund and cancellation policies are outlined in our service agreements. Generally, we work in milestones to ensure you are satisfied at every step before proceeding."
    },
    {
        keywords: ["languages", "english", "tamil", "hindi", "support language"],
        response: "Our team is multilingual! We support communication in English, Tamil, and Hindi to ensure seamless collaboration."
    },

    // --- TECHNOLOGIES (Simulating 1000+ tech questions via definitions) ---
    {
        keywords: ["react", "frontend", "library", "ui framework"],
        response: "React is a powerful JavaScript library for building user interfaces. We use it to create fast, interactive, and scalable web applications."
    },
    {
        keywords: ["node", "backend", "server", "runtime"],
        response: "Node.js allows us to run JavaScript on the server side. It's event-driven and non-blocking, making it perfect for scalable network applications."
    },
    {
        keywords: ["ai", "artificial intelligence", "ml", "machine learning", "robot"],
        response: "Artificial Intelligence (AI) simulates human intelligence in machines. We build AI solutions for automation, predictive analytics, natural language processing (NLP), and computer vision."
    },
    {
        keywords: ["blockchain", "crypto", "web3", "decentralized", "smart contract"],
        response: "Blockchain is a distributed ledger technology ensuring transparency and security. We develop dApps, smart contracts, and private blockchain solutions."
    },
    {
        keywords: ["mobile", "app", "android", "ios", "flutter", "react native"],
        response: "We develop cross-platform mobile apps using React Native and Flutter, ensuring native-like performance on both iOS and Android with a single codebase."
    },
    {
        keywords: ["seo", "optimization", "ranking", "google", "traffic"],
        response: "SEO (Search Engine Optimization) improves your website's visibility. We use technical SEO, content strategy, and backlinking to rank your business higher."
    },
    {
        keywords: ["cloud", "aws", "azure", "serverless", "hosting"],
        response: "Cloud computing provides on-demand computing resources. We specialize in AWS and Azure architecture, serverless deployment, and cloud migration."
    },
    {
        keywords: ["python", "django", "flask", "data science"],
        response: "Python is a versatile language we use for Backend (Django/Flask), Data Science, AI/ML models, and automation scripts."
    },
    {
        keywords: ["database", "sql", "nosql", "mongodb", "postgres"],
        response: "We use robust databases like MongoDB (NoSQL) for flexibility and PostgreSQL/MySQL (SQL) for structured data integrity."
    },
    {
        keywords: ["ui", "ux", "design", "figma", "prototype"],
        response: "UI/UX Design focuses on the user's experience. We use tools like Figma and Adobe XD to create intuitive, beautiful, and user-friendly interfaces."
    },
    {
        keywords: ["api", "rest", "graphql", "interface"],
        response: "APIs (Application Programming Interfaces) let software systems talk to each other. We build secure REST and GraphQL APIs for seamless integration."
    },
    {
        keywords: ["security", "cyber", "hack", "protect"],
        response: "Cybersecurity is paramount. We implement SSL, firewalls, secure coding practices, and regular audits to protect your data."
    },

    // --- GENERAL / CHIT-CHAT ---
    {
        keywords: ["hello", "hi", "hey", "greetings", "good morning", "good evening"],
        response: "Hello! Welcome to Hybix Group. I'm your AI assistant. How can I help you elevate your business today?"
    },
    {
        keywords: ["thank", "thanks", "cool", "great", "awesome"],
        response: "You're welcome! If you have any more questions, just ask. We're here to help."
    },
    {
        keywords: ["bye", "goodbye", "see you"],
        response: "Goodbye! Have a productive day. Don't forget to check out our latest projects!"
    },
    // --- PROCESS & BUSINESS ---
    {
        keywords: ["timeline", "how long", "duration", "time"],
        response: "Project timelines vary based on complexity. A basic website might take 2-4 weeks, while a custom app could take 3-6 months. We provide a detailed timeline after the initial consultation."
    },
    {
        keywords: ["admin", "panel", "dashboard", "cms"],
        response: "Yes, we build powerful custom Admin Panels and Dashboards to help you manage your content, users, and analytics efficiently."
    },
    {
        keywords: ["support", "maintenance", "update", "after launch"],
        response: "We offer dedicated post-launch support and maintenance packages to ensure your application runs smoothly and stays up-to-date."
    },
    {
        keywords: ["nda", "confidentiality", "agreement", "secure"],
        response: "Your idea is safe with us. We are happy to sign a Non-Disclosure Agreement (NDA) to protect your intellectual property before we begin."
    },
    {
        keywords: ["startup", "mvp", "idea"],
        response: "We love startups! We can help you build an MVP (Minimum Viable Product) quickly to test your market and attract investors."
    },

    // --- EXPANDED TECH STACK ---
    {
        keywords: ["java", "spring", "enterprise"],
        response: "We have deep expertise in Java and Spring Boot for building robust, high-performance enterprise-grade applications."
    },
    {
        keywords: ["php", "laravel", "wordpress"],
        response: "We provide PHP development services using modern frameworks like Laravel and CMS solutions like WordPress for rapid deployment."
    },
    {
        keywords: ["angular", "google framework"],
        response: "Our team is skilled in Angular for building dynamic, single-page client-side web applications."
    },
    {
        keywords: ["vue", "nuxt"],
        response: "We use Vue.js and Nuxt.js for building lightweight, high-performance, and versatile user interfaces."
    },
    {
        keywords: ["devops", "ci/cd", "docker", "kubernetes"],
        response: "We implement DevOps best practices, including CI/CD pipelines, Docker containerization, and Kubernetes orchestration for smooth deployments."
    },
    {
        keywords: ["testing", "qa", "quality", "bug"],
        response: "Quality is our priority. We perform rigorous manual and automated testing to ensure your software is bug-free and reliable."
    },

    // --- GENERAL / CHIT-CHAT ---
    {
        keywords: ["help", "assist", "lost", "confused"],
        response: "I'm here to help! You can ask about our 'Services', 'Contact' details, specific 'Technologies' we use, or just say 'Hi'."
    },
    {
        keywords: ["human", "person", "agent", "real"],
        response: "I am an AI assistant, but I can connect you with a real human expert. Just type 'contact' or leave your details."
    }
];

export const findResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Exact match for very short words
    // Pattern matching
    let bestMatch = null;
    let maxKeywords = 0;

    knowledgeBase.forEach(item => {
        let matchCount = 0;
        item.keywords.forEach(keyword => {
            if (lowerInput.includes(keyword)) {
                matchCount++;
            }
        });

        if (matchCount > maxKeywords) {
            maxKeywords = matchCount;
            bestMatch = item;
        }
    });

    if (bestMatch && maxKeywords > 0) {
        return bestMatch.response;
    }

    // Check for random typing / gibberish (simple heuristic: long word with no spaces or just no match)
    // The user requested a specific response for random typing.
    // If we land here, we found no matches.
    return "It looks like that might have been typed by accident 😄\nNo worries—what would you like help with? Just let me know.";
};
