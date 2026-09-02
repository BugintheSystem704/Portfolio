/**
 * PORTFOLIO CONFIGURATION & DATA SOURCE
 * ==========================================================
 * Adarsh Kumar Singh — Personal Engineering Portfolio
 * 
 * Central data source containing verified details for projects,
 * skills, training, education, achievements, and contact information.
 * ==========================================================
 */

const PORTFOLIO_CONFIG = {
  // --------------------------------------------------------
  // PERSONAL & PROFILE INFORMATION
  // --------------------------------------------------------
  personal: {
    name: "ADARSH KUMAR SINGH",
    role: "Aspiring Software Engineer",
    statement: "Building practical software across web development, multiplayer applications and IoT — while exploring AI/ML.",
    
    academicInfo: {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Lovely Professional University",
      period: "2025–2029",
      cgpa: "9.2",
      currentYear: "2nd Year"
    },
    
    location: "Punjab, India",
    aboutText: "I am a second-year B.Tech Computer Science and Engineering student at Lovely Professional University. I enjoy learning by building practical projects and have explored web development, multiplayer applications and IoT-based systems through hands-on work. My current focus is strengthening software development fundamentals while beginning my journey into Python, NumPy and Machine Learning.",
    personalStatement: "Someone who can take an idea from concept to a working product.",
    
    photoPath: "assets/adarsh-photo.jpg",
    resumePath: "assets/Adarsh_Kumar_Singh_Resume.pdf"
  },

  // --------------------------------------------------------
  // CONTACT & SOCIAL DETAILS
  // --------------------------------------------------------
  contact: {
    email: "adarshkumarsingh@gmail.com",
    // Replace with your actual URLs before deployment
    linkedin: "https://www.linkedin.com/in/adarsh-kumar-singh-placeholder",
    linkedinDisplay: "LinkedIn ↗",
    github: "https://github.com/adarsh-kumar-singh-placeholder",
    githubDisplay: "GitHub ↗",
    resumeDisplay: "Download Resume ↗",
    note: "Interested in software development, practical projects, or technical collaboration."
  },

  // --------------------------------------------------------
  // TECHNICAL SKILLS
  // --------------------------------------------------------
  skills: {
    categories: [
      {
        index: "01",
        name: "LANGUAGES",
        items: ["Python", "C", "C++", "JavaScript"]
      },
      {
        index: "02",
        name: "TECHNOLOGIES & PLATFORMS",
        items: ["HTML", "CSS", "Firebase", "ESP32", "IoT"]
      },
      {
        index: "03",
        name: "DATABASES / TOOLS",
        items: ["Git", "GitHub", "VS Code"]
      },
      {
        index: "04",
        name: "SOFT SKILLS",
        items: ["Problem Solving", "Adaptability", "Team Collaboration", "Time Management"]
      }
    ],
    
    currentlyExploring: [
      "Python for ML",
      "NumPy",
      "Machine Learning",
      "Full-Stack Development"
    ]
  },

  // --------------------------------------------------------
  // DETAILED PROJECT CASE STUDIES (DOMINANT SECTION)
  // Framework: PROBLEM → TECHNOLOGY → RESULT → LEARNING
  // --------------------------------------------------------
  projects: [
    {
      id: "tiki-topple",
      number: "01",
      title: "Tiki Topple",
      subtitle: "Multiplayer Digital Board Game",
      status: "Completed",
      badgeClass: "status-completed",
      techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
      shortDescription: "Developed a browser-based digital adaptation of the Tiki Topple tactical board game for 2–4 players.",
      image: "assets/tiki-topple.png",
      imageCaption: "Digital adaptation of the physical Tiki Topple tabletop game.",
      
      problem: "The challenge was to translate a physical board-game experience into an interactive browser-based multiplayer experience while preserving the original gameplay mechanics.",
      
      approach: "The game was recreated digitally with the core gameplay structure preserved, while selected physical interactions were adapted for a screen-based interface.",
      
      myRole: [
        "Game implementation",
        "Gameplay/UI adaptation",
        "Firebase multiplayer functionality",
        "Asset integration",
        "Audio integration",
        "Interface refinement"
      ],
      
      technicalImplementation: [
        "Implemented Firebase-based room creation and unique room-code joining to allow multiple players to enter the same game session.",
        "Translated the physical board representation into a level-based digital structure where progression could be represented clearly on screen.",
        "Integrated game imagery, visual assets and audio elements to enhance player feedback.",
        "Modified selected interactions where directly reproducing the physical board would negatively affect the digital interface."
      ],
      
      result: "Produced a playable browser-based multiplayer version of the game supporting 2–4 players.",
      
      whatILearned: "This project taught me that reproducing a physical experience digitally is not always a matter of copying it exactly. Some interactions need to be redesigned around the constraints of the interface while preserving the original experience.",
      
      links: {
        repoText: "Repository — Private",
        demoText: null
      }
    },
    {
      id: "safety-shoe",
      number: "02",
      title: "Smart Safety Shoe",
      subtitle: "IoT Emergency Response System",
      status: "Completed Prototype",
      badgeClass: "status-proto",
      techStack: ["ESP32", "IoT Sensors", "Reed Switch", "Battery-Powered Hardware", "MIT App Inventor"],
      shortDescription: "Designed and developed a wearable IoT-based emergency response prototype that enables users to trigger an emergency workflow through a predefined triple-tap activation mechanism.",
      image: "assets/safety-shoe.png",
      imageCaption: "Wearable emergency-response hardware prototype.",
      
      problem: "The project explored how an emergency response could be triggered through a wearable interface when directly accessing a phone or conventional control may not be convenient.",
      
      myRole: [
        "Research into existing safety solutions",
        "Analysis of related projects",
        "System workflow design",
        "Hardware development",
        "Component integration",
        "Physical prototype development",
        "Fitting electronics into the shoe"
      ],
      teamNote: "Note: A teammate handled the primary coding/mobile application work.",
      
      systemFlow: [
        { step: "01", label: "TRIPLE TAP", desc: "Mechanical reed switch actuation" },
        { step: "02", label: "TRIGGER", desc: "ESP32 evaluates timestamped trigger sequence" },
        { step: "03", label: "10-SECOND WINDOW", desc: "Cancellation buffer to abort accidental triggers" },
        { step: "04", label: "LOCATION + CALL", desc: "Companion app dispatches GPS coordinates & call" }
      ],
      
      technicalImplementation: [
        "Engineered the hardware prototype integrating an ESP32 microcontroller, sensors, mechanical reed switch, and battery within footwear.",
        "Designed a two-stage alert mechanism incorporating a 10-second cancellation window to reduce accidental activations (if cancelled → returns to normal; if not cancelled → dispatches alert).",
        "Connected the hardware trigger workflow with a companion mobile application capable of sharing real-time location and initiating an emergency phone call to a saved contact."
      ],
      
      keyChallenge: "Fitting the electronics into a wearable shoe while keeping the prototype practical and usable.",
      
      result: "Produced a working wearable IoT safety prototype with a defined emergency activation and response workflow.",
      
      whatILearned: "The project showed me that hardware engineering involves more than making the circuit work. Physical constraints, component placement, power requirements and usability all influence the final system.",
      
      links: {
        repoText: "Hardware Prototype & Documentation",
        demoText: null
      }
    },
    {
      id: "navyugal",
      number: "03",
      title: "NavYugal",
      subtitle: "Event Management Platform",
      status: "In Development",
      badgeClass: "status-dev",
      techStack: ["HTML", "CSS", "JavaScript"],
      shortDescription: "Developing an event-management web platform focused on simplifying event discovery and helping users identify suitable event options.",
      image: "assets/navyugal.png",
      imageCaption: "Frontend interface and event discovery workflow.",
      
      problem: "Event discovery and planning can be fragmented and overwhelming for users trying to find suitable event options, compare categories, and understand venue requirements.",
      
      currentImplementation: [
        "Homepage structure & responsive navigation",
        "Choose Your Event interactive selection",
        "Event categories & structured browsing layout",
        "Frontend interface & clean modular styling"
      ],
      
      plannedUsers: ["Administrator", "Vendor", "Customer"],
      
      progression: [
        {
          stage: "CURRENT",
          title: "Frontend Foundation",
          items: ["Homepage UI", "Event discovery flow", "Category selection"]
        },
        {
          stage: "NEXT",
          title: "Backend Implementation",
          items: ["Event details workflows", "User booking flows", "Backend fundamentals"]
        },
        {
          stage: "EXPLORING",
          title: "AI-Assisted Recommendations",
          items: ["Exploring recommendation capabilities based on event type, requirements and budget"]
        }
      ],
      
      aiExplorationText: "Exploring AI-assisted recommendation capabilities to help users identify suitable event options based on preferences such as event type, requirements and budget.",
      
      result: "Active development of the client-side event discovery experience and platform structure.",
      
      whatILearned: "This project is helping me move from building individual interfaces toward thinking about how a complete product is structured, while strengthening my understanding of frontend development and preparing for backend implementation.",
      
      links: {
        repoText: "Frontend Repository — Active Work",
        demoText: null
      }
    }
  ],

  // --------------------------------------------------------
  // TRAINING & COMMUNITY EXPERIENCE (CONCISE)
  // --------------------------------------------------------
  training: {
    title: "Python Programming Trainer & Community Volunteer",
    organization: "ApneLog · Community Development Project",
    date: "25 June 2026 – 25 July 2026",
    duration: "30 Hours",
    description: "Conducted structured Python sessions for school students using practical examples and interactive methods to introduce programming fundamentals.",
    topics: ["Python Basics", "Variables", "Data Types", "Operators", "Conditional Statements", "Loops"],
    skillsDeveloped: ["Communication", "Teaching", "Leadership", "Classroom Management"]
  },

  // --------------------------------------------------------
  // EDUCATION TIMELINE (CONCISE)
  // --------------------------------------------------------
  education: [
    {
      period: "2025 — 2029",
      degree: "B.Tech Computer Science & Engineering",
      institution: "Lovely Professional University",
      score: "CGPA 9.2"
    },
    {
      period: "2022 — 2024",
      degree: "Higher Secondary Education",
      institution: "Maharaja College",
      score: "80%"
    },
    {
      period: "2022",
      degree: "Secondary Education",
      institution: "DAV Public School",
      score: "96%"
    }
  ],

  // --------------------------------------------------------
  // CERTIFICATIONS GALLERY
  // --------------------------------------------------------
  certifications: [
    {
      name: "Python Programming",
      issuer: "Verified Course Curriculum",
      year: "2025",
      image: "assets/certificates/python-cert.png"
    },
    {
      name: "Database Management Systems (DBMS)",
      issuer: "Academic Coursework",
      year: "2025",
      image: "assets/certificates/dbms-cert.png"
    },
    {
      name: "Time Management",
      issuer: "Professional Development",
      year: "2025",
      image: "assets/certificates/timemanagement-cert.png"
    }
  ],

  // --------------------------------------------------------
  // ACHIEVEMENTS (RESTRAINED ACADEMIC FACTS)
  // --------------------------------------------------------
  achievements: [
    {
      metric: "9.2 CGPA",
      title: "B.Tech CSE",
      desc: "Consistent academic performance in core computer science courses."
    },
    {
      metric: "02 Hackathons",
      title: "Collaborative Prototyping",
      desc: "Participation in collaborative problem solving and rapid prototyping."
    },
    {
      metric: "30 HRS",
      title: "Community Training",
      desc: "Python programming training conducted for school students."
    }
  ]
};

if (typeof Object.freeze === 'function') {
  Object.freeze(PORTFOLIO_CONFIG);
}
