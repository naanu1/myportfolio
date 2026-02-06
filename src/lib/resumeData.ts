import { Project, Experience, Skill } from '@/types';

export const resumeData = {
    personal: {
        name: 'HARSHITH M',
        title: 'Generative AI Engineer & Full Stack Engineer',
        location: 'Bengaluru, India',
        phone: '+91-9900381496',
        email: 'harshithmmallikarjun@gmail.com',
        linkedin: 'linkedin.com/in/harshith-m-60303a319',
        github: 'github.com/naanu1',
        summary: 'Generative AI Engineer & Full Stack Engineer specializing in Agentic Workflows and Generative AI. Expert in designing production-grade RAG pipelines and scalable Serverless AI platforms that automate complex business intelligence. Adept at building high-impact SaaS solutions by combining Generative AI with robust cloud infrastructure.',
    },

    skills: [
        {
            category: 'Generative AI',
            items: ['RAG', 'Agentic Workflows', 'LangChain', 'LangGraph', 'AWS Bedrock', 'Guardrails'],
        },
        {
            category: 'Backend Engineering',
            items: ['Python', 'FastAPI', 'Django', 'Event-Driven Architecture'],
        },
        {
            category: 'Cloud & DevOps',
            items: ['AWS Lambda', 'Step Functions', 'API Gateway', 'SQS', 'S3', 'DynamoDB'],
        },
        {
            category: 'Frontend Development',
            items: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        },
        {
            category: 'Database',
            items: ['PostgreSQL', 'MongoDB', 'DynamoDB'],
        },
        {
            category: 'Basic Ml',
            items: ['Machine Learning', 'Deep Learning', 'NLP'],
        },
    ] as Skill[],

    projects: [

        {
            id: "expense-trackify",
            title: "AI Expense Trackify",
            subtitle: "SaaS Financial Platform",
            description:
                "An AI-powered financial tracker allowing users to log expenses via voice and supports OCR for bills and Pdf and query data using natural language.",
            techStack: ["React.js", "Django", "PostgreSQL", "RAG Pipeline", "OCR"],
            features: [
                "Voice-First AI: Log transactions effortlessly using voice commands.",
                "OCR Integration: Extract data from bills and PDFs automatically.",
                "Chat with Data: Query 'How much did I spend on food?' via RAG pipeline.",
                "SaaS Architecture: Secure authentication and scalable database design.",
            ],
            futureEnhancements: [
                "Predictive Analytics for budgeting forecasts.",
                "Multi-Currency Support for global usage.",
                "Unified Banking Integration (UPI/Google Pay) for auto-imports.",
            ],
            github: "https://github.com/naanu1/ai_expense_backend",
        },
        {
            id: "contextflow",
            title: "ContextFlow RAG",
            subtitle: "Advanced Hybrid Retrieval Engine",
            description:
                "A production-ready RAG engine that combines the precision of keyword search with the understanding of semantic search.",
            techStack: ["Python", "Qdrant", "BM25", "Gemini", "LangChain"],
            features: [
                "Hybrid Search: Combines Dense Vector (Qdrant) & Sparse Keyword (BM25) search.",
                "Dynamic Memory: Recursively summarizes chat history to fit token limits.",
                "Agentic Planning: Decomposes complex queries into sub-tasks automatically.",
            ],
            github: "https://github.com/naanu1/contextflow-rag", // Update if you have a specific link
        },
        {
            id: "bhojanalaya",
            title: "Bhojanalaya",
            subtitle: "Restaurant Management SaaS",
            description:
                "A digital menu and ordering suite designed to streamline operations for small restaurant businesses.",
            techStack: ["React.js", "JavaScript", "HTML/CSS"],
            features: [
                "Digital Menu: Categorized, intuitive browsing experience.",
                "Fast UI: Optimized for mobile responsiveness and speed.",
            ],
            futureEnhancements: [
                "QR Code Integration for table-side ordering.",
                "Real-time Kitchen Order Tracking (KOT) system.",
            ],
            link: "https://bhojanalayaa.netlify.app/",
        },
        {
            id: "mini-projects",
            title: "Mini AI Projects",
            subtitle: "Experimental ML Models",
            description: "A collection of focused Machine Learning deployments.",
            isCollection: true,
            items: [
                {
                    name: "Multiple Disease Prediction",
                    stack: "Streamlit, SVC, Naive Bayes",
                    link: "https://multiple-disease-prediction--system.streamlit.app",
                },
                {
                    name: "Movie Recommendation System",
                    stack: "Content-Based Filtering, Cosine Similarity",
                    link: "https://movie-recommendation--system.streamlit.app",
                },
            ],
        },
    ],

    // --- Object D: The Blueprint Desk (Experience) ---
    experience: [
        {
            id: "ideasouq",
            company: "IdeaSouq",
            location: "Remote (Dubai)",
            role: "Full Stack AI Engineer",
            period: "May 2025 – Present",
            description:
                "Architected a 100% serverless platform validating startups for investors.",
            achievements: [
                "Architected a Serverless AI SaaS Platform that automates startup due diligence, validating funds and companies for investors with high precision.",
                "Built a AI Analysis Engine by integrating AWS Bedrock models secured by AWS Guardrails and Gemini to synthesize extracted data into detailed Investment Memos, Executive Summaries, and Clarification Questions.",
                "Engineered a systematic AI Autonomous Intelligence Pipeline using multi-Lambda functions orchestrated by AWS Step Functions to perform high-level web research, filter duplicates, and extract data from heterogeneous pitch decks (PDFs/Docs).",
                "Designed an Event-Driven Architecture leveraging API Gateway and SQS for asynchronous document processing and DynamoDB for state management, enabling the system to handle complex multi-document analysis at scale.",
            ],
        },
        {
            id: "loksun",
            company: "Loksun AI",
            location: "Bengaluru, India",
            role: "Full Stack AI Developer",
            period: "Dec 2024 – Apr 2025",
            description: "Delivered multiple MVP solutions for vision and content services to clients.",
            achievements: [
                "Developed a Real-Time PPE Monitoring System using Computer Vision to analyze live CCTV feeds, detecting safety violations (missing helmets/vests) and triggering instant email alerts to site managers.",
                "Built a Traffic Management AI MVP using pre-trained ML models to detect accidents and parking violations, integrating emergency alerting and analytical dashboards for safety monitoring.",
                "Delivered the full-stack MVP for 'Octopi Health', an AI-driven platform that automates blog generation from medical data using React.js and Python.",
            ],
        },
        {
            id: "relia",
            company: "Relia Software",
            location: "Ho Chi Minh City, Vietnam",
            role: "AI & Machine Learning Engineer",
            period: "Aug 2024 – Dec 2024",
            description:
                "Engineered high-concurrency backends for AI Deal Rooms.",
            achievements: [
                "Engineered a High-Concurrency Backend for an 'AI Deal Room' using Django, enabling lag-free asynchronous document analysis for thousands of concurrent users.",
                "Developed a RAG Legal Assistant featuring a 'Chat-with-Document' engine using Vector Embeddings and Cosine Similarity, allowing legal teams to query complex PDFs with high accuracy.",
                "Built an Automated Lead Gen system using NLP to monitor and analyze global news feeds to identify high-value sales targets, directly optimizing the revenue pipeline.",
            ],
        },
    ],
    // --- Object D (cont.): Internship Scroll (Inside Experience Modal) ---
    internships: [
        {
            company: "SLV Transformers",
            role: "Web Developer Intern",
            period: "Dec 2023 – Feb 2024",
            description:
                "Developed responsive web apps using MERN Stack, optimizing UI/UX performance.",
        },
        {
            company: "DLithe",
            role: "Machine Learning Intern",
            period: "Oct 2023 – Nov 2023",
            description:
                "Performed data preprocessing on healthcare datasets and implemented predictive ML algorithms.",
        },
    ],

    // --- Education (Can go in About or Experience Modal) ---
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering",
            institution: "Dayananda Sagar University",
            year: "2024",
            score: "CGPA: 7.75",
        },
        {
            degree: "Class 12 (Pre-University)",
            institution: "Narayana PU College",
            year: "2020",
            score: "84%",
        },
        {
            degree: "Class 10",
            institution: "Anekal Public School",
            year: "2018",
            score: "88%",
        },
    ],

    languages: ['Kannada', 'Hindi', 'English'],
};
