
// ChatBot Knowledge Base
// Uses keyword matching to simulate understanding of thousands of questions.

export const quickPrompts = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "AI & Machine Learning",
    "Blockchain Solutions",
    "Digital Marketing",
    "Cloud Solutions",
    "E-commerce",
    "Start a Project",
    "Join WhatsApp Group"
];

export const knowledgeBase = [
    // 🔑 Company Basics
    {
        keywords: ["company", "hybix", "who are you"],
        response: "We are Hybix Groups, an IT services company helping startups and small businesses with digital solutions."
    },
    {
        keywords: ["about", "about us"],
        response: "Hybix Groups provides web, mobile, cloud, and digital marketing services."
    },
    {
        keywords: ["services", "what do you do", "offer"],
        response: "We offer Web Development, Mobile Apps, SEO, Digital Marketing, UI/UX, E-Commerce, Branding, Cloud, and IT Support."
    },
    {
        keywords: ["clients", "target audience"],
        response: "We work with startups and small businesses."
    },
    {
        keywords: ["industries", "sectors"],
        response: "We serve multiple industries including IT, retail, education, healthcare, and e-commerce."
    },
    {
        keywords: ["values", "core values"],
        response: "Our core values are Innovation, Integrity, Excellence, and Collaboration."
    },
    {
        keywords: ["why hybix", "why choose", "benefit"],
        response: "We deliver innovative, reliable, and high-quality IT solutions."
    },

    // 💻 Web Development
    {
        keywords: ["web development", "web dev"],
        response: "We build fast, secure, and responsive websites."
    },
    {
        keywords: ["website", "build website"],
        response: "We design and develop custom business websites."
    },
    {
        keywords: ["responsive", "mobile friendly"],
        response: "All our websites are mobile-friendly."
    },
    {
        keywords: ["redesign", "update website"],
        response: "Yes, we redesign and modernize existing websites."
    },
    {
        keywords: ["web app", "web application"],
        response: "We develop scalable custom web applications."
    },
    {
        keywords: ["cms", "content management", "wordpress"],
        response: "We work with WordPress and custom CMS solutions."
    },
    {
        keywords: ["maintenance", "website support"],
        response: "We provide ongoing website maintenance and support."
    },
    {
        keywords: ["seo website", "web seo"],
        response: "Our websites follow SEO best practices."
    },

    // 📱 Mobile App Development
    {
        keywords: ["mobile app", "app development"],
        response: "We develop Android and iOS mobile applications."
    },
    {
        keywords: ["android"],
        response: "We build secure and scalable Android apps."
    },
    {
        keywords: ["ios", "iphone app"],
        response: "We develop iOS apps for Apple devices."
    },
    {
        keywords: ["cross platform", "flutter", "react native"],
        response: "We use Flutter and React Native for cross-platform apps."
    },
    {
        keywords: ["mvp", "minimum viable product"],
        response: "We build MVP apps for startups."
    },
    {
        keywords: ["app upgrade", "update app"],
        response: "We improve and update existing mobile apps."
    },
    {
        keywords: ["app maintenance"],
        response: "Post-launch app support is available."
    },

    // 🎨 UI/UX Design
    {
        keywords: ["ui", "ux", "ui ux", "interface"],
        response: "We design intuitive and user-friendly interfaces."
    },
    {
        keywords: ["design", "web design"],
        response: "We create modern and attractive designs."
    },
    {
        keywords: ["prototype", "wireframe"],
        response: "We provide wireframes and prototypes before development."
    },
    {
        keywords: ["user experience", "usability"],
        response: "Our designs focus on better usability and engagement."
    },

    // 📈 Digital Marketing & SEO
    {
        keywords: ["digital marketing", "online marketing"],
        response: "We help grow your business online."
    },
    {
        keywords: ["seo", "optimization"],
        response: "We provide on-page, off-page, and technical SEO."
    },
    {
        keywords: ["google ranking", "rank"],
        response: "We help improve your website ranking."
    },
    {
        keywords: ["traffic", "visitors"],
        response: "Our strategies increase website traffic."
    },
    {
        keywords: ["social media", "smm"],
        response: "We manage and grow social media accounts."
    },
    {
        keywords: ["content marketing", "content"],
        response: "We create SEO-friendly content."
    },
    {
        keywords: ["ads", "campaign", "google ads"],
        response: "We run paid ad campaigns for better reach."
    },

    // 🛒 E-Commerce
    {
        keywords: ["ecommerce", "e-commerce"],
        response: "We build secure e-commerce websites."
    },
    {
        keywords: ["online store", "shop"],
        response: "We create online stores for selling products."
    },
    {
        keywords: ["shopify"],
        response: "We develop Shopify-based stores."
    },
    {
        keywords: ["woocommerce"],
        response: "We build WooCommerce websites."
    },
    {
        keywords: ["payment", "gateway"],
        response: "We integrate secure payment gateways."
    },
    {
        keywords: ["inventory"],
        response: "Inventory management solutions are available."
    },

    // ☁️ Cloud & IT Support
    {
        keywords: ["cloud", "cloud computing"],
        response: "We offer cloud setup and management services."
    },
    {
        keywords: ["aws", "amazon web services"],
        response: "We support AWS cloud services."
    },
    {
        keywords: ["google cloud", "gcp"],
        response: "We work with Google Cloud solutions."
    },
    {
        keywords: ["azure"],
        response: "Azure cloud support is available."
    },
    {
        keywords: ["cloud migration", "move to cloud"],
        response: "We help move your systems to the cloud."
    },
    {
        keywords: ["it support", "tech support"],
        response: "We provide reliable IT support services."
    },
    {
        keywords: ["backup", "data backup"],
        response: "Secure data backup solutions are available."
    },
    {
        keywords: ["security", "cyber security"],
        response: "We follow strong security practices."
    },

    // 💼 Pricing & Process
    {
        keywords: ["pricing", "price", "rates"],
        response: "We offer flexible and transparent pricing."
    },
    {
        keywords: ["cost", "how much"],
        response: "Project cost depends on requirements."
    },
    {
        keywords: ["quote", "estimation"],
        response: "Contact us for a free project quote."
    },
    {
        keywords: ["consultation", "consult"],
        response: "We provide free initial consultation."
    },
    {
        keywords: ["nda"],
        response: "Yes, we sign NDAs to protect your idea."
    },
    {
        keywords: ["process", "workflow"],
        response: "Analysis, design, development, testing, and deployment."
    },
    {
        keywords: ["agile"],
        response: "We use agile development methodology."
    },
    {
        keywords: ["timeline", "how long"],
        response: "Timelines depend on project complexity."
    },

    // 🤝 Support & Contact
    {
        keywords: ["support", "tech help"],
        response: "Ongoing support plans are available."
    },
    {
        keywords: ["after launch", "post launch"],
        response: "Yes, we support projects after delivery."
    },
    {
        keywords: ["contact", "reach us"],
        response: "You can contact us through our website."
    },
    {
        keywords: ["email", "mail"],
        response: "Reach out via our official email: hybixgroups@gmail.com"
    },
    {
        keywords: ["call", "phone"],
        response: "Call us for quick assistance: +91-6383721027"
    },
    {
        keywords: ["partnership", "partner"],
        response: "We believe in long-term collaboration."
    },
    {
        keywords: ["scalable", "scaling"],
        response: "Our solutions are built to scale with your business."
    },

    // --- GENERAL / OTHER ---
    {
        keywords: ["start a project", "start project", "new project", "proposal", "kickoff"],
        response: "That's great! To start a project with us, please email your requirements to hybixgroups@gmail.com or call us directly. We'll analyze your needs and provide a detailed proposal."
    },
    {
        keywords: ["hello", "hi", "hey", "greetings"],
        response: "Hello! Welcome to Hybix Groups. How can we help you today?"
    },
    {
        keywords: ["thank", "thanks"],
        response: "You're welcome! Let us know if you need anything else."
    },
    {
        keywords: ["bye", "goodbye"],
        response: "Goodbye! Have a great day."
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

    // fallback responses for non-related / unmatched questions
    const fallbackResponses = [
        "It looks like that might have been typed by accident 😄\nNo worries—what would you like help with? Just let me know.",
        "I'm not sure I quite understand. Could you rephrase that?",
        "That's interesting! I'm best at answering questions about Hybix's services, tech stack, and starting new projects.",
        "I'm still learning! Try asking about 'Web Development', 'AI', or 'Contacting us'.",
        "Hmm, I didn't catch that. How can I help you with your digital transformation today?"
    ];

    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};
