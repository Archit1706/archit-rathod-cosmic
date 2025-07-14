export const personalInfo = {
    name: "Archit Rathod",
    title: "Machine Learning Engineer",
    location: "Chicago, IL, USA",
    email: "arath21@uic.edu",
    phone: "+1 331-270-7909",
    tags: ["Frontend", "Backend", "Python"],
    tagline: "I have two years of experience in creating websites. Currently I am building Web using Next.js and exploring Machine Learning and AI.",
    about: [
        "I'm a Master's student in Computer Science at University of Illinois at Chicago (UIC) with a background in Information Technology from the University of Mumbai. I'm passionate about web development and problem-solving.",
        "I have two years of experience as a full-stack developer specializing in the MERN stack and Next.js. I'm expanding my expertise in Data Science, Machine Learning, and AI. A hackathon enthusiast, I've clinched victories in six competitive events.",
        "In my leisure, I dive into finance and investments, enjoy tennis, and love watching sci-fi movies. Always eager to learn and grow, I'm looking for new opportunities.",
    ]
};

export const projects = [
    {
        title: "RealEstate 360",
        slug: "realestate-360",
        desc: "RealEstate360, the future of online house-hunting, is a platform that leverages Augmented Reality (AR), Virtual Reality (VR), and Artificial Intelligence (AI) to provide an immersive, interactive, and informative experience for both real estate agents and homebuyers. The platform allows users to explore houses virtually, getting a feel for the layout and atmosphere, and uses AI and ML to provide insights and suggestions.",
        tech: [
            "Next JS",
            "Tailwind",
            "FastAPI",
            "Node.js",
            "AR-VR",
            "Socket I/O",
            "ManziPango",
            "Panellum React",
            "MongoDB",
            "Three.js",
        ],
        link: "https://realestate360.vercel.app/",
        github: "https://github.com/Archit1706/RealEstate360",
        featured: true,
    },
    {
        title: "Ascend AI",
        slug: "ascend-ai",
        desc: "Ascend AI is a revolutionary interview preparation platform designed to elevate your communication skills and confidence. With its cutting-edge features, Ascend AI offers comprehensive AI analysis, real-time tone and pitch feedback, facial expression recognition, and precise video mock interview reviews. It's your personal interview coach, ensuring you present your best self in every interview.",
        tech: [
            "Next JS",
            "Tailwind",
            "LLama C++",
            "FastAPI",
            "Librosa",
            "Transformers",
            "OpenCV",
            "MongoDB",
            "Whisper",
        ],
        link: "https://ascend-ai-mpr.vercel.app/",
        github: "https://github.com/Archit1706/AscendAI",
        featured: true,
    },
    {
        title: "FitSphere",
        slug: "fitsphere",
        desc: "FitSphere is a state-of-the-art pose estimation system that leverages Computer Vision and Machine Learning to enhance the field of sports and fitness. The system offers automated exercise recognition, accurate rep and set counting, progress tracking, exercise recommendations, and a warning system to improve the fitness journey for users.",
        tech: [
            "React JS",
            "Tailwind",
            "OpenCV",
            "FastAPI",
            "MongoDB",
            "PoseNet",
            "OpenPose",
        ],
        link: "https://fitsphere.vercel.app/",
        github: "https://github.com/Archit1706/FitSphere",
        featured: true,
    },
    {
        title: "PhishFence",
        slug: "phishfence",
        desc: "PhishFence is an innovative AI and ML-powered solution designed to automatically detect and block phishing domains among newly registered websites. By integrating WHOIS data, real-time URL fetching, image comparison, and typosquatting checks, it swiftly identifies threats, enhancing user security. With a user-friendly interface and a chatbot for assistance, PhishFence offers comprehensive protection against phishing attacks.",
        tech: [
            "Next JS",
            "Tailwind",
            "Selenium",
            "FastAPI",
            "WhoisDB",
            "LighGBM",
            "OpenCV",
            "OpenAI",
        ],
        link: "https://phishfence.vercel.app/",
        github: "https://github.com/Archit1706/PhishFence",
        featured: false,
    },
    {
        title: "SwarBhaav",
        slug: "swarbhaav",
        desc: "SwarBhaav: A call centre solution featuring dual dashboards for rookies and managers, offering distinct access controls and insightful features: chat analysis for chat summaries, sentiment scores, and key words; audio sentiment analysis with seven emotion classification using librosa, and a robust reporting system with MongoDB integration for easy review of sentiment analysis results.",
        tech: [
            "Next JS",
            "Tailwind",
            "Node JS",
            "FastAPI",
            "Librosa",
            "Transformers",
            "OpenAI",
        ],
        link: "https://swarbhaav.vercel.app/",
        github: "https://github.com/Archit1706/SwarBhaav",
        featured: false,
    },
    {
        title: "Attire AI",
        slug: "attire-ai",
        desc: "AttireAI: Your ultimate fashion companion powered by Gen AI. Discover and create personalized fashion outfits with ease through natural, conversational interactions. Revolutionizing the way you explore fashion, AttireAI analyzes your style preferences, past purchases, and social media trends to curate tailor-made outfit recommendations.",
        tech: ["Next JS", "Tailwind", "Flask", "LangChain", "LLama", "NLTK"],
        link: "https://attire-ai.vercel.app",
        github: "https://github.com/Archit1706/Attire-AI",
        featured: false,
    },
    {
        title: "Bid Bazaar",
        slug: "bid-bazaar",
        desc: "Bid-Bazaar is an online auction platform that enables users to create and bid on auctions for a wide range of products and services like cars, bikes, laptops, mobiles, real estates and government contracts. The platform also has a chat feature where users can chat with each other. We also have live Bidding feature where users can bid on the product in real time.",
        tech: [
            "Next JS",
            "Tailwind",
            "Node JS",
            "Express",
            "MongoDB",
            "Socket.io",
            "Cloudinary",
        ],
        link: "https://bid-bazaar.vercel.app/",
        github: "https://github.com/Archit1706/TIAA-Hackathon",
        featured: false,
    },
    {
        title: "Social Vision",
        slug: "social-vision",
        desc: "Social Vision is a system that connects people who have posted similar articles in the past within a certain time limit and refers to this as 'coordinated inauthentic behavior' The system also attempts to detect the agenda of these networks using keyword extraction, the propaganda behind them with multi-class classification, and identifies fake news using sentiment analysis.",
        tech: [
            "Next JS",
            "Tailwind",
            "MongoDB",
            "Python",
            "ML Models",
            "Fast API",
        ],
        link: "https://social-vision.vercel.app/",
        github: "https://github.com/Archit1706/SocialVision",
        featured: false,
    }
];

export const experience = [
    {
        title: "Software Engineer - Contributor",
        company: "Google Summer of Code 2025 - OpenStreetMap",
        duration: "May 2025 – Aug 2025",
        location: "Chicago, USA",
        type: "Remote",
        description: "Developing a Temporary Road Closures Database and RESTful API using PostgreSQL/PostGIS and FastAPI to enable real-time road closure reporting for OpenStreetMap navigation applications. Implementing OpenLR integration for cross-platform location encoding, ensuring compatibility across multiple OSM-based navigation systems.",
        achievements: [
            "Building full-stack web application with interactive mapping interface using Leaflet.js",
            "Implementing OpenLR (Open Location Referencing) integration for cross-platform compatibility",
            "Developing RESTful API using PostgreSQL/PostGIS and FastAPI"
        ]
    },
    {
        title: "Research Assistant",
        company: "University of Illinois Chicago",
        duration: "Feb 2025 – May 2025",
        location: "Chicago, USA",
        type: "On-site",
        description: "Developed a geospatial analysis pipeline using OSMnx, NetworkX, and Python to construct a road network graph of Chicago, optimizing node reduction by filtering primary and secondary roads for computational efficiency including 40-45 intersections.",
        achievements: [
            "Engineered graph-based cycle detection model to identify traffic congestion zones",
            "Implemented bounded cycle search algorithms for optimal camera placements",
            "Developed Python-based models for urban congestion zone identification using graph analytics"
        ]
    },
    {
        title: "Research and Web Engineer",
        company: "SimPPL",
        duration: "Mar 2023 – Jul 2024",
        location: "New York, USA",
        type: "Remote",
        description: "Developed a full-stack Next.js web application for ethical AI research by integrating a FastAPI backend and GCP Compute for deploying LLMs. Applied NLP techniques for real-time text data analysis and summarization to detect toxic responses, aligning with ethical AI goals.",
        achievements: [
            "Built interactive network graph visualizer handling 20000+ nodes and 100K+ edges",
            "Engineered automated GCP pipeline to scrape and store 2,300+ Stormfront threads into BigQuery",
            "Led data engineering efforts collecting 80M+ comments across 440K YouTube videos",
            "Created Looker Studio dashboards and optimized BigQuery SQL queries"
        ]
    },
    {
        title: "Software Developer and AI Engineer",
        company: "Digital Information Research Lab, Boston University",
        duration: "Dec 2023 – Jun 2024",
        location: "Boston, USA",
        type: "Remote",
        description: "Led a team of 14 engineers to develop a gamified virtual marketplace in React.js and Empirica.ly, simulating economic decision-making with 2000+ human participants and agentic AI sellers.",
        achievements: [
            "Built mathematical models using LLM-driven agents for decision-making behavior simulation",
            "Designed multi-stage game logic with 8 consumer-producer strategies",
            "Researched transformer fine-tuning methods for improving model efficiency"
        ]
    },
    {
        title: "Teaching Assistant - Python Lab (ITL404)",
        company: "University of Mumbai, Department of Information Technology",
        duration: "Aug 2022 – Nov 2022",
        location: "Mumbai, India",
        type: "On-site",
        description: "Conducted lab sessions for 25 students, defined lab objectives, and helped in the practical implementation of Python concepts like advanced data types, OOPs, file handling, and web programming with RESTful APIs guided by Dr. Arun Kulkarni.",
        achievements: [
            "Developed and evaluated lab assignments covering Python programming",
            "Provided one-on-one assistance enhancing student comprehension",
            "Achieved average score improvement of 20% among students"
        ]
    },
    {
        title: "Machine Learning Intern",
        company: "Kaizen Future Tech",
        duration: "May 2021 – July 2021",
        location: "Mumbai, Maharashtra",
        type: "On-site",
        description: "Built and trained image classification models for detecting natural disasters using Convolutional Neural Networks (CNNs) and ResNet, achieving up to 95% accuracy.",
        achievements: [
            "Developed stacked ensemble model combining CNN and ResNet predictions",
            "Used XGBoost as meta-classifier to improve generalization and precision",
            "Cleaned and curated large-scale disaster image dataset (30K+ images)",
            "Conducted experiments with hyperparameter tuning using TensorFlow GPU acceleration"
        ]
    }
];

export const research = [
    {
        title: "Leveraging CNNs and Ensemble Learning for Automated Disaster Image Classification",
        slug: "leveraging-cnns-ensemble-learning-disaster-classification",
        authors: [
            "Archit Rathod",
            "Veer Pariawala",
            "Mokshit Surana",
            "Kumkum Saxena",
        ],
        affiliations: [
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
        ],
        venue: "ICSISCET 2023 - Springer Book Series 'Algorithms for Intelligent Systems'",
        status: "Published",
        year: "2023",
        abstract: "Natural disasters act as a serious threat globally, requiring effective and efficient disaster management and recovery. This paper focuses on classifying natural disaster images using Convolutional Neural Networks (CNNs). Multiple CNN architectures were built and trained on a dataset containing images of earthquakes, floods, wildfires, and volcanoes. A stacked CNN ensemble approach proved to be the most effective, achieving 95% accuracy and an F1 score going up to 0.96 for individual classes.",
        keywords: ["CNN", "Ensemble Learning", "Disaster Classification", "Computer Vision", "Deep Learning"],
        dataset: "MIT's Incidents 1M Dataset",
        links: {
            arxiv: "https://arxiv.org/abs/2311.13531",
            pdf: "https://arxiv.org/ftp/arxiv/papers/2311/2311.13531.pdf",
        },
        type: "Conference Paper"
    },
    {
        title: "Multiagent Simulators for Social Networks",
        slug: "multiagent-simulators-social-networks",
        authors: [
            "Aditya Surve",
            "Archit Rathod",
            "Mokshit Surana",
            "Gautam Malpani",
            "Aneesh Shamraj",
            "Sainath Reddy Sankepally",
            "Raghav Jain",
            "Swapneel Mehta",
        ],
        affiliations: Array(8).fill("SimPPL"),
        venue: "NeurIPS 2023 - Multi-agent Security (MASec) Workshop",
        status: "Published",
        year: "2023",
        abstract: "Multiagent social network simulations are an avenue that can bridge the communication gap between the public and private platforms in order to develop solutions to a complex array of issues relating to online safety. While there are significant challenges relating to the scale of multiagent simulations, efficient learning from observational and interventional data to accurately model micro and macro-level emergent effects, there are equally promising opportunities not least with the advent of large language models that provide an expressive approximation of user behavior.",
        keywords: ["Multi-agent Systems", "Social Networks", "Simulation", "Online Safety", "Large Language Models"],
        links: {
            arxiv: "https://arxiv.org/abs/2311.14712",
            openreview: "https://openreview.net/forum?id=eL61LbI4uv",
            pdf: "https://arxiv.org/pdf/2311.14712.pdf",
        },
        type: "Workshop Paper"
    },
    {
        title: "Building Confidence Through Technology: A Technical Exploration of Facial Expression, Tone and Pitch Analysis with Chatbot Guidance",
        slug: "building-confidence-technology-facial-expression-analysis",
        authors: [
            "Siddh Shah",
            "Archit Rathod",
            "Mokshit Surana",
            "Gargi Sathe",
            "Kumkum Saxena",
        ],
        affiliations: [
            "Thadomal Shahani Engineering College",
            "University of Illinois at Chicago",
            "University of Illinois at Chicago",
            "University of Illinois at Chicago",
            "Thadomal Shahani Engineering College",
        ],
        venue: "Springer Scopus Series, ICDSA 2024",
        status: "Published",
        year: "2024",
        abstract: "A comprehensive technical exploration of using artificial intelligence for facial expression analysis, tone and pitch analysis with chatbot guidance for building confidence in interview settings. The system leverages computer vision, audio processing, and natural language processing to provide real-time feedback and guidance.",
        keywords: ["Facial Expression Analysis", "Audio Processing", "Chatbot", "Interview Preparation", "Computer Vision"],
        links: {
            paper: "#"
        },
        type: "Conference Paper"
    },
    {
        title: "Deploying Large Language Model-based Chatbots for Indic Languages in Low-Resource Regions",
        slug: "deploying-llm-chatbots-indic-languages",
        authors: [
            "Mrunmayi Parker",
            "Nahush Patil",
            "Raghav Jain",
            "Aditya Surve",
            "Pratyay Banerjee",
            "Mokshit Surana",
            "Jhagrut Lalwani",
            "Archit Rathod",
            "Swapneel Mehta",
        ],
        affiliations: Array(9).fill("SimPPL"),
        venue: "Working Paper",
        status: "In Progress",
        year: "2024",
        abstract: "There are many public health challenges in the so-called global south that are tackled through literacy-focused interventions by nonprofits and public health agencies. However, it is extremely challenging to scale such interventions to large populations in countries that speak multiple languages, and have complex sociocultural norms. We leverage large language models (LLMs) to demonstrate a scaling of successful literacy interventions to improve menstrual health and hygiene among adolescent females in Bangladesh.",
        keywords: ["Large Language Models", "Indic Languages", "Public Health", "Low-Resource Languages", "Healthcare"],
        links: {},
        type: "Working Paper"
    }
];

export const education = [
    {
        degree: "Master of Science in Computer Science",
        institution: "University of Illinois at Chicago",
        location: "Chicago, IL, USA",
        duration: "Aug 2024 – May 2026",
        gpa: "In Progress",
        coursework: [
            "Applied Machine Learning",
            "Natural Language Processing",
            "Big Data Analytics",
            "Advanced Algorithms",
            "Computer Vision"
        ],
        type: "Masters"
    },
    {
        degree: "Bachelor of Engineering in Information Technology",
        institution: "University of Mumbai",
        location: "Mumbai, India",
        duration: "Aug 2020 – May 2024",
        gpa: "9.35 / 10",
        coursework: [
            "Data Structures and Algorithms",
            "Database Management Systems",
            "Software Engineering",
            "Web Technologies",
            "Machine Learning",
            "Computer Networks"
        ],
        type: "Bachelors"
    }
];

export const skills = {
    languages: [
        { name: "Python", level: "Advanced", color: "cyan-300" },
        { name: "JavaScript", level: "Advanced", color: "yellow-300" },
        { name: "TypeScript", level: "Intermediate", color: "blue-500" },
        { name: "C++", level: "Intermediate", color: "blue-900" },
        { name: "HTML", level: "Advanced", color: "orange-400" },
        { name: "CSS", level: "Advanced", color: "blue-400" },
        { name: "Shell", level: "Intermediate", color: "gray-600" }
    ],
    frameworks: [
        { name: "React JS", level: "Advanced", color: "cyan-600" },
        { name: "Next JS", level: "Advanced", color: "gray-800" },
        { name: "Node JS", level: "Advanced", color: "lime-400" },
        { name: "FastAPI", level: "Advanced", color: "lime-400" },
        { name: "Flask", level: "Intermediate", color: "sky-400" },
        { name: "PyTorch", level: "Intermediate", color: "orange-600" },
        { name: "TensorFlow", level: "Intermediate", color: "orange-500" },
        { name: "Express", level: "Advanced", color: "gray-700" }
    ],
    databases: [
        { name: "MongoDB", level: "Advanced", color: "emerald-600" },
        { name: "MySQL", level: "Advanced", color: "blue-600" },
        { name: "BigQuery", level: "Intermediate", color: "sky-500" },
        { name: "Neo4j", level: "Beginner", color: "blue-200" },
        { name: "PostgreSQL", level: "Intermediate", color: "blue-800" }
    ],
    tools: [
        { name: "Git", level: "Advanced", color: "orange-600" },
        { name: "Docker", level: "Intermediate", color: "blue-500" },
        { name: "Kubernetes", level: "Beginner", color: "blue-600" },
        { name: "AWS", level: "Intermediate", color: "orange-400" },
        { name: "GCP", level: "Advanced", color: "blue-600" },
        { name: "Vercel", level: "Advanced", color: "zinc-800" },
        { name: "VS Code", level: "Advanced", color: "blue-800" },
        { name: "Postman", level: "Advanced", color: "amber-400" }
    ],
    libraries: [
        { name: "NumPy", level: "Advanced", color: "blue-500" },
        { name: "Pandas", level: "Advanced", color: "blue-400" },
        { name: "OpenCV", level: "Intermediate", color: "gray-800" },
        { name: "Scikit-learn", level: "Intermediate", color: "orange-400" },
        { name: "Matplotlib", level: "Advanced", color: "blue-600" },
        { name: "Plotly", level: "Intermediate", color: "blue-600" },
        { name: "Tailwind CSS", level: "Advanced", color: "emerald-400" },
        { name: "jQuery", level: "Advanced", color: "sky-400" }
    ]
};

export const socialLinks = {
    linkedIn: "https://www.linkedin.com/in/archit-rathod/",
    twitter: "https://twitter.com/ArchitRathod_17",
    github: "https://github.com/Archit1706",
    email: "arath21@uic.edu",
    leetcode: "https://leetcode.com/Archit176/",
    portfolio: "https://architrathod.dev",
    resume: "/resume.pdf"
};

export const achievements = [
    {
        title: "Hackathon Winner",
        description: "Won 6 out of 10+ hackathons participated",
        year: "2021-2024",
        category: "Competition"
    },
    {
        title: "Google Summer of Code",
        description: "Selected for GSoC 2025 with OpenStreetMap",
        year: "2025",
        category: "Program"
    },
    {
        title: "Research Publications",
        description: "Published 3+ research papers in reputed conferences",
        year: "2023-2024",
        category: "Research"
    },
    {
        title: "Academic Excellence",
        description: "CGPA 9.35/10 in Bachelor's degree",
        year: "2024",
        category: "Academic"
    }
];

export const extracurricular = [
    {
        title: "React.js Crash Course",
        description: "Conducted 'React Zero-to-Hero' course under HoD of IT department",
        year: "2023",
        type: "Teaching"
    },
    {
        title: "Invited Talk",
        description: "Gave talk at Fellowship backed by Google Research and Mozilla on YouTube Data Project",
        year: "2024",
        type: "Speaking"
    },
    {
        title: "Open Source Contribution",
        description: "Contributed to 'Sakhi' WhatsApp chatbot for menstrual health literacy in rural Bangladesh",
        year: "2023",
        type: "Social Impact"
    }
];

// Utility functions
export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getPublishedResearch = () => research.filter(paper => paper.status === 'Published');
export const getProjectBySlug = (slug) => projects.find(project => project.slug === slug);
export const getResearchBySlug = (slug) => research.find(paper => paper.slug === slug);

// SEO and Meta Data
export const siteMetadata = {
    title: "Archit Rathod - Machine Learning Engineer & Full Stack Developer",
    description: "Portfolio of Archit Rathod, Machine Learning Engineer with expertise in AI, web development, and research. Currently pursuing MS in Computer Science at UIC.",
    keywords: [
        "Archit Rathod",
        "Machine Learning Engineer",
        "Full Stack Developer",
        "AI Research",
        "Next.js",
        "React",
        "Python",
        "University of Illinois Chicago",
        "Portfolio"
    ],
    author: "Archit Rathod",
    siteUrl: "https://architrathod.dev",
    image: "/og-image.jpg",
    twitterUsername: "@ArchitRathod_17"
};

export default {
    personalInfo,
    projects,
    experience,
    research,
    education,
    skills,
    socialLinks,
    achievements,
    extracurricular,
    siteMetadata,
    getFeaturedProjects,
    getPublishedResearch,
    getProjectBySlug,
    getResearchBySlug
};