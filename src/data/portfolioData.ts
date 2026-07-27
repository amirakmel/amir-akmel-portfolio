import amirPhoto from '../assets/amir_photo.jpg';

export interface Project {
  id: string;
  title: string;
  category: 'network' | 'security' | 'software' | 'it-ops';
  categoryLabel: string;
  tags: string[];
  description: string;
  image: string;
  featured?: boolean;
  role?: string;
  duration?: string;
  challengeText?: string;
  challengePoints?: string[];
  solutionText?: string;
  solutionFeatures?: { title: string; description: string }[];
  impactDescription?: string;
  retentionChange?: string;
  ticketChange?: string;
  heroImage?: string;
  wireframeImage?: string;
  finalUiImage?: string;
  designSystemImage?: string;
  nextProjectId?: string;
  nextProjectTitle?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-network-infrastructure',
    title: 'Enterprise LAN/WAN & Cisco Network Infrastructure',
    category: 'network',
    categoryLabel: 'Network & Security',
    tags: ['Cisco Networking', 'LAN/WAN', 'Wireless', 'Routing & Switching'],
    description: 'High-availability corporate network deployment featuring multi-subnet VLANs, redundant Cisco routing, and encrypted wireless coverage.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    role: 'IT Officer & Network Lead',
    duration: 'WASS Electromechanical Works (2025)',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    challengeText: 'The organization required a resilient network topology capable of handling high bandwidth throughput for electromechanical engineering data, CCTV streams, and office operations without single points of failure.',
    challengePoints: [
      'Eliminate bandwidth bottlenecks across internal department subnets.',
      'Configure dual-WAN failover for 99.9% uptime across internet gateways.',
      'Implement strict VLAN isolation between guest Wi-Fi and corporate servers.'
    ],
    solutionText: 'Designed and deployed a structured Cisco-based network architecture with managed L2/L3 switches, encrypted WPA3 enterprise wireless access points, and dynamic bandwidth prioritization for mission-critical systems.',
    solutionFeatures: [
      {
        title: 'DUAL-WAN FAILOVER',
        description: 'Automatic traffic rerouting preventing Internet outages.'
      },
      {
        title: 'VLAN ISOLATION',
        description: 'Segmented subnet architecture protecting internal file servers.'
      }
    ],
    impactDescription: 'Achieved zero unorganized downtime, reduced network latency by 45%, and secured full LAN stability for over 150+ connected devices.',
    retentionChange: '99.9%',
    ticketChange: '-65%',
    wireframeImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
    finalUiImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    designSystemImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    nextProjectId: 'cctv-access-control-matrix',
    nextProjectTitle: 'Integrated CCTV & Biometric Access Security System'
  },
  {
    id: 'cctv-access-control-matrix',
    title: 'Integrated CCTV & Biometric Access Security Deployment',
    category: 'security',
    categoryLabel: 'Security Systems',
    tags: ['CCTV Surveillance', 'Access Control', 'NVR Storage', 'Physical Security'],
    description: 'Turnkey physical and digital security installation featuring IP cameras, centralized NVR storage arrays, and RFID biometric access gates.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    role: 'Security Systems Administrator',
    duration: 'WASS Electromechanical Works (2025)',
    heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    challengeText: 'Facilities and sensitive electromechanical project zones needed continuous 24/7 high-definition surveillance with centralized access logging to safeguard valuable equipment.',
    challengePoints: [
      'Deploy 360-degree camera coverage across perimeter and indoor zones.',
      'Establish biometric RFID entry logs integrated with employee attendance.',
      'Configure remote live monitoring feeds for administrative security personnel.'
    ],
    solutionText: 'Installed high-definition IP cameras equipped with night-vision, connected to a redundant multi-terabyte NVR array, and configured door access controllers connected to central security software.',
    solutionFeatures: [
      {
        title: 'CENTRAL NVR ARRAY',
        description: '30-day rolling encrypted video retention with motion triggers.'
      },
      {
        title: 'BIOMETRIC ENTRY LOGS',
        description: 'Real-time entry verification reducing unauthorized access.'
      }
    ],
    impactDescription: 'Secured 100% perimeter coverage, eliminated unauthorized entry incidents, and provided instant video retrieval for audit compliance.',
    retentionChange: '100%',
    ticketChange: '-80%',
    wireframeImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80',
    finalUiImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
    designSystemImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    nextProjectId: 'it-tender-compliance-system',
    nextProjectTitle: 'Automated IT Tender & Technical Compliance Documentation'
  },
  {
    id: 'it-tender-compliance-system',
    title: 'Automated IT Tender & Technical Compliance System',
    category: 'it-ops',
    categoryLabel: 'IT Operations',
    tags: ['Technical Specs', 'Bids & Tenders', 'Compliance', 'Documentation'],
    description: 'Systematic framework and compliance specification engine for electromechanical and ICT project bid submissions.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    role: 'IT Officer & Compliance Lead',
    duration: 'WASS Electromechanical Works (2025)',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    challengeText: 'Preparing competitive government and commercial ICT tenders required meticulously formatted technical specification sheets, compliance matrices, and hardware bills of quantities under tight deadlines.',
    challengePoints: [
      'Standardize technical compliance sheets for networking and security equipment.',
      'Reduce preparation turnaround time for multi-million birr electromechanical bids.',
      'Ensure zero technical disqualification rates on tender submissions.'
    ],
    solutionText: 'Created standardized technical documentation templates, equipment parameter databases, and automated spec verification checklists aligning with ISO and national Ethiopian tender guidelines.',
    solutionFeatures: [
      {
        title: 'COMPLIANCE MATRIX',
        description: 'Auto-checks proposed hardware specs against client RFPs.'
      },
      {
        title: 'EQUIPMENT CATALOG',
        description: 'Pre-vetted Cisco, Hikvision, and Dell technical spec sheets.'
      }
    ],
    impactDescription: 'Increased bid submission efficiency by 60%, resulting in successful qualification for major electromechanical and ICT integration contracts.',
    retentionChange: '+60%',
    ticketChange: '0%',
    wireframeImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80',
    finalUiImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    designSystemImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    nextProjectId: 'python-network-monitoring',
    nextProjectTitle: 'Python Network Health & Telemetry Automation'
  },
  {
    id: 'python-network-monitoring',
    title: 'Python Network Health & Active Device Monitor',
    category: 'software',
    categoryLabel: 'Software & Scripts',
    tags: ['Python', 'Network Monitoring', 'Cisco', 'SNMP Telemetry'],
    description: 'Custom Python script suite automating ICMP ping polling, bandwidth usage tracking, and real-time alert notifications.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    role: 'Software Developer & Network Admin',
    duration: 'Cisco & Independent Project (2024)',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    challengeText: 'Manual monitoring of network devices across multiple offices was inefficient, making it difficult to detect intermittent packet loss or rogue device attachments.',
    challengePoints: [
      'Automate 24/7 heartbeat checks for switches, routers, and IP cameras.',
      'Trigger instant alerts via Telegram/Email when latency spikes occur.',
      'Log historical bandwidth consumption for capacity planning.'
    ],
    solutionText: 'Developed a lightweight Python application utilizing asynchronous network requests, SNMP polling, and clean CLI dashboards to visualize live device statuses.',
    solutionFeatures: [
      {
        title: 'INSTANT ALERTING',
        description: 'Sends real-time notification upon link failure or packet loss.'
      },
      {
        title: 'BANDWIDTH LOGGER',
        description: 'Records interface throughput to identify network hogs.'
      }
    ],
    impactDescription: 'Identified micro-outages before end users reported them, cutting troubleshooting mean-time-to-resolution (MTTR) by 50%.',
    retentionChange: '50%',
    ticketChange: '-50%',
    wireframeImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    finalUiImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    designSystemImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    nextProjectId: 'java-university-capstone',
    nextProjectTitle: 'St. Mary University Java Information Management System'
  },
  {
    id: 'java-university-capstone',
    title: 'St. Mary University Computer Science Capstone System',
    category: 'software',
    categoryLabel: 'Software & Engineering',
    tags: ['Java', 'Computer Science', 'Object-Oriented', 'Database System'],
    description: 'Full-stack desktop software application developed for B.Sc. Computer Science degree implementing OOP design patterns.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    role: 'Lead Computer Science Student',
    duration: 'St. Mary University (2023-2024)',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    challengeText: 'Demonstrating core Computer Science principles including relational database normalization, transaction processing, and user access roles.',
    challengePoints: [
      'Design normalized relational database tables with foreign key constraints.',
      'Implement secure authentication and role-based authorization.',
      'Deliver intuitive user interfaces with input validation and error logging.'
    ],
    solutionText: 'Built an enterprise Java application with swing UI components, JDBC relational connectivity, and strict data validation layers reviewed and passed by university faculty.',
    solutionFeatures: [
      {
        title: 'ROLE-BASED ACCESS',
        description: 'Differentiated views for administrators, officers, and guests.'
      },
      {
        title: 'DATA PERSISTENCE',
        description: 'SQL database backend with ACID transaction guarantees.'
      }
    ],
    impactDescription: 'Successfully defended with high honors, fulfilling requirements for B.Sc. in Computer Science at St. Mary University.',
    retentionChange: '100%',
    ticketChange: '0%',
    wireframeImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    finalUiImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    designSystemImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1000&q=80',
    nextProjectId: 'electromechanical-ict-integration',
    nextProjectTitle: 'Electromechanical & ICT Project Quality Assurance'
  },
  {
    id: 'electromechanical-ict-integration',
    title: 'Electromechanical & ICT Commissioning & Quality Assurance',
    category: 'it-ops',
    categoryLabel: 'ICT Integration',
    tags: ['ICT Integration', 'Testing & Commissioning', 'Quality Assurance', 'Hardware'],
    description: 'Cross-functional IT commissioning, wire testing, hardware integration, and quality assurance framework for electromechanical sites.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    role: 'IT & Electromechanical Quality Officer',
    duration: 'WASS Electromechanical Works (2025)',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    challengeText: 'Complex electromechanical engineering sites require seamless integration between heavy electrical infrastructure, backup generators, low-voltage communication cabling, and network control nodes.',
    challengePoints: [
      'Perform structured cabling continuity tests (CAT6/Fiber) prior to activation.',
      'Ensure surge protection and grounded power supply for network racks.',
      'Coordinate testing, commissioning, and client sign-off procedures.'
    ],
    solutionText: 'Established standardized testing protocols using cable analyzers, thermal monitoring for hardware racks, and formal commissioning acceptance documentation for client handovers.',
    solutionFeatures: [
      {
        title: 'CABLE CONTINUITY TESTS',
        description: 'Fluke cable verification ensuring zero signal degradation.'
      },
      {
        title: 'COMMISSIONING LOGS',
        description: 'Comprehensive sign-off checklists for project stakeholders.'
      }
    ],
    impactDescription: 'Ensured 100% first-pass commissioning rate on active electromechanical & technology integration projects.',
    retentionChange: '100%',
    ticketChange: '-90%',
    wireframeImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    finalUiImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    designSystemImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    nextProjectId: 'enterprise-network-infrastructure',
    nextProjectTitle: 'Enterprise LAN/WAN & Cisco Network Infrastructure'
  }
];

export const PROFILE = {
  name: 'Amir Akmel',
  title: 'IT Officer & Computer Science Specialist',
  subtitle: 'Network Infrastructure, Systems Administration, CCTV Security & Electromechanical ICT Projects',
  location: 'Lideta, Addis Ababa, Ethiopia',
  email: 'amirakmel451@gmail.com',
  phone: '(+251) 984872475',
  dateOfBirth: '03/03/2001',
  nationality: 'Ethiopian',
  gender: 'Male',
  avatarCircle: amirPhoto,
  headshotAbout: amirPhoto,
  aboutBio: 'Dedicated and detail-oriented IT Officer with a strong background in managing network infrastructure, system administration, and technical support. Proven track record in maintaining network security, configuring hardware and software solutions, and ensuring minimal system downtime. Exceptional problem-solving skills with a commitment to aligning IT operations with organizational goals and delivering seamless technical support.',
  socials: {
    linkedIn: 'https://www.linkedin.com/in/amir-akmel',
    gitHub: 'https://github.com/amirakmel',
    telegram: 'https://t.me/amirakmel'
  },
  workExperience: [
    {
      role: 'IT Officer',
      company: 'WASS ELECTROMECHANICAL WORKS',
      period: '13/01/2025 – Present',
      location: 'Addis Ababa, Ethiopia',
      responsibilities: [
        'Manage and maintain the organization\'s IT infrastructure, including computers, servers, network devices, and software systems.',
        'Provide technical support and troubleshooting for hardware, software, network, and system-related issues.',
        'Install, configure, and maintain LAN/WAN networks, internet connectivity, and wireless communication systems.',
        'Administer and monitor CCTV surveillance systems, access control systems, and other security technologies.',
        'Prepare technical specifications, compliance sheets, and documentation for bids and tender submissions.',
        'Participate in the design, supply, installation, testing, commissioning, and maintenance of ICT and security system projects.',
        'Monitor system performance and recommend improvements to enhance operational efficiency.',
        'Support project planning, implementation, and quality assurance activities for electromechanical and ICT projects.',
        'Collaborate with project teams to ensure successful delivery of CCTV, networking, and technology integration projects.'
      ]
    }
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'St. Mary University',
      period: '11/08/2019 – 07/08/2024',
      location: 'Addis Ababa, Ethiopia',
      website: 'https://www.smuc.edu.et/'
    },
    {
      degree: 'Ethiopian Grade 12 Examination',
      institution: 'Ministry Of Education of Ethiopia',
      period: '11/08/2017 – 07/06/2019',
      location: 'Addis Ababa, Ethiopia',
      website: 'https://moe.gov.et/'
    },
    {
      degree: 'Ethiopian Grade 10 Examination',
      institution: 'Ministry Of Education of Ethiopia',
      period: '11/08/2015 – 07/06/2017',
      location: 'Addis Ababa, Ethiopia',
      website: 'https://moe.gov.et/'
    }
  ],
  certifications: [
    {
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: '02/12/2025',
      mode: 'Online'
    },
    {
      title: 'Python Programming Language',
      issuer: 'Programming Hub',
      date: '25/11/2023',
      mode: 'Online'
    },
    {
      title: 'Introduction to Java',
      issuer: 'SoloLearn',
      date: '09/11/2023',
      mode: 'Online'
    },
    {
      title: 'University Exit Exam Certificate',
      issuer: 'FDRE Ministry of Education',
      date: '21/06/2024',
      mode: 'National Exam'
    }
  ],
  skills: [
    'Network Infrastructure & LAN/WAN',
    'Cisco Routing & Switching',
    'CCTV Surveillance Systems',
    'Access Control & Security Systems',
    'Hardware & Software Troubleshooting',
    'Python Programming & Scripting',
    'Java Software Development',
    'Technical Specifications & Bids',
    'Tender Submissions & Compliance',
    'Electromechanical ICT Integration',
    'Microsoft Office (Excel, Word, PowerPoint)',
    'Organizational & Planning Skills'
  ],
  languages: [
    { name: 'Amharic', level: 'Native (Mother tongue)' },
    { name: 'English', level: 'B2 Listening / B2 Reading / B1 Speaking / B2 Writing (Independent User)' }
  ]
};
