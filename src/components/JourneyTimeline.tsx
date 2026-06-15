import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Plus, Minus, AlertCircle, CheckCircle2, Lightbulb, Compass, ExternalLink, X, Map as MapIcon, Flag, Target, Zap, Rocket } from 'lucide-react';

interface TimelineEntry {
  period: string;
  title: string;
  type: string;
  content: string;
  details?: string[];
  docLink?: {
    label: string;
    url: string;
  };
}

interface MonthGroup {
  month: string;
  entries: TimelineEntry[];
}

const placeholderData: MonthGroup[] = [
  {
    month: "January 2026",
    entries: [
      {
        period: "Update 1",
        title: "Project Kickoff",
        type: "experience",
        content: "Ribbit began as an initiative from the HR team to improve employee communication and engagement through a dedicated desktop application. With a small team and limited resources, we started defining the product vision, identifying key use cases, and preparing the initial roadmap.",
        details: [
          "Defined the initial product vision and objectives.",
          "Prepared the first Product Requirements Document (PRD).",
          "Evaluated possible technical approaches and infrastructure needs.",
          "Onboarded interns and established the core development team.",
          "Key Learning: Clear problem definition early in the project helped align technical and business goals."
        ],
        docLink: {
          label: "Arch Doc: What Ribbit Is",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 2",
        title: "Research & Discovery",
        type: "insight",
        content: "As implementation planning began, we focused on understanding the challenges of building a desktop application that would work consistently across Windows, macOS, and Linux. This phase involved significant research into application architecture, deployment strategies, and data management.",
        details: [
          "Evaluated cross-platform desktop development options.",
          "Explored database design approaches and iterated through multiple schema revisions.",
          "Identified technical risks and assumptions early in the project lifecycle.",
          "Established an approach for rapid experimentation and validation.",
          "Key Learning: Early design decisions have long-term consequences; investing time in research reduced future rework."
        ]
      },
      {
        period: "Update 3",
        title: "Proof of Concepts & Early Challenges",
        type: "challenge",
        content: "The team moved from planning to execution by creating proof-of-concept applications and evaluating different technologies. Initial load testing exposed concurrency and scalability concerns that required further architectural investigation.",
        details: [
          "Built multiple prototypes to validate technical decisions.",
          "Leveraged free-tier services and developer programs to accelerate experimentation.",
          "Conducted early performance testing.",
          "Identified threading and concurrency limitations that could impact scalability.",
          "Key Learning: Testing assumptions early helped uncover risks before they reached production systems."
        ]
      },
      {
        period: "Update 4",
        title: "Technology Stack Finalization",
        type: "achievement",
        content: "After evaluating several options, we finalized the primary technology stack and began coordinating with infrastructure teams for required resources and approvals.",
        details: [
          "Selected Electron.js as the desktop framework.",
          "Finalized core frontend and backend technologies.",
          "Secured access to infrastructure components including Redis.",
          "Began engaging with DevOps and platform teams for deployment planning.",
          "Key Learning: Technology selection is only one part of the process; organizational alignment is equally important."
        ],
        docLink: {
          label: "Arch Doc: Tech Stack",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      }
    ]
  },
  {
    month: "February 2026",
    entries: [
      {
        period: "Update 5",
        title: "Architecture Consolidation",
        type: "experience",
        content: "The team focused on refining application architecture and resolving open design questions. Several iterations were required before arriving at a scalable and maintainable structure.",
        details: [
          "Conducted architecture reviews across frontend, backend, and database layers.",
          "Implemented Server-Sent Events (SSE) for real-time communication.",
          "Redesigned database structures to address limitations identified during earlier phases.",
          "Established clearer ownership boundaries between services.",
          "Key Learning: Architecture discussions can be time-consuming, but they significantly reduce complexity later."
        ],
        docLink: {
          label: "Arch Doc: Backend Architecture",
          url: "https://pragmaticplay.atlassian.net/wiki/x/IYBCUQE"
        }
      },
      {
        period: "Update 6",
        title: "Strategic Refactoring",
        type: "achievement",
        content: "As development progressed, we recognized that portions of the backend would not scale effectively. Rather than carrying technical debt forward, we invested time in a major refactoring effort.",
        details: [
          "Reworked backend components to improve maintainability.",
          "Defined clear boundaries between local and cloud-hosted data.",
          "Improved scalability and reliability foundations.",
          "Reduced future operational risk.",
          "Key Learning: Early refactoring is less expensive than large-scale redesign after release."
        ],
        docLink: {
          label: "Arch Doc: Local Persistence (SQLite)",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 7",
        title: "First Working Prototype",
        type: "achievement",
        content: "The first end-to-end prototype successfully demonstrated core workflows and validated the overall direction of the product.",
        details: [
          "Completed Phase 1 UI implementation.",
          "Established frontend-backend integration.",
          "Began infrastructure setup including GitLab pipelines and cloud resources.",
          "Conducted the first stakeholder demonstrations.",
          "Key Learning: Even a simple working prototype creates valuable feedback opportunities."
        ]
      },
      {
        period: "Update 8",
        title: "Product Feedback & Iteration",
        type: "challenge",
        content: "Initial stakeholder feedback highlighted significant usability and design improvements needed before broader adoption.",
        details: [
          "Gathered extensive internal feedback.",
          "Identified UI and UX improvement opportunities.",
          "Reassessed design priorities.",
          "Continued addressing backend stability concerns discovered during testing.",
          "Key Learning: Constructive feedback often provides the clearest roadmap for improvement."
        ]
      }
    ]
  },
  {
    month: "March 2026",
    entries: [
      {
        period: "Update 9",
        title: "Quality & Release Preparation",
        type: "experience",
        content: "The focus shifted toward stabilization and testing as the team prepared the first release candidate.",
        details: [
          "Initiated a structured testing cycle.",
          "Resolved critical defects and usability issues.",
          "Implemented a feature freeze to prioritize stability.",
          "Improved release readiness."
        ]
      },
      {
        period: "Update 10",
        title: "Real-Time Communication",
        type: "experience",
        content: "The real-time communication framework became operational, establishing the foundation for live updates throughout the application.",
        details: [
          "Successfully deployed SSE-based communication flows.",
          "Improved synchronization between client and server.",
          "Began building deployment automation foundations."
        ],
        docLink: {
          label: "Arch Doc: Data Flow",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 11",
        title: "Design & Security Collaboration",
        type: "insight",
        content: "External collaboration became increasingly important as design refinements and security reviews accelerated.",
        details: [
          "Worked closely with design stakeholders to improve user experience.",
          "Initiated Microsoft Graph API security reviews.",
          "Addressed compliance and security requirements.",
          "Established stronger collaboration with security teams."
        ]
      },
      {
        period: "Update 12",
        title: "Infrastructure Readiness",
        type: "experience",
        content: "Core functionality was largely complete, shifting attention toward deployment environments and operational readiness.",
        details: [
          "Finalized most major features.",
          "Continued UI refinement and usability improvements.",
          "Coordinated environment provisioning and deployment planning.",
          "Prepared for broader testing activities."
        ]
      }
    ]
  },
  {
    month: "April 2026",
    entries: [
      {
        period: "Update 13",
        title: "Environment Alignment Challenges",
        type: "challenge",
        content: "Coordination challenges between development and infrastructure teams created delays and highlighted the importance of tighter communication processes.",
        details: [
          "Addressed deployment configuration inconsistencies.",
          "Resolved GitLab pipeline integration issues.",
          "Designed the application's notification architecture.",
          "Improved cross-team collaboration practices."
        ]
      },
      {
        period: "Update 14",
        title: "Platform Stabilization",
        type: "experience",
        content: "Deployment environments became increasingly stable while cross-platform functionality matured.",
        details: [
          "Standardized deployment workflows.",
          "Improved consistency across environments.",
          "Enhanced native notification support for Windows, macOS, and Linux.",
          "Reduced platform-specific issues."
        ]
      },
      {
        period: "Update 15",
        title: "Security Hardening",
        type: "insight",
        content: "Security reviews drove substantial improvements in application resilience and operational safeguards.",
        details: [
          "Strengthened backend security controls.",
          "Implemented persistent alerting and attention-grabbing notification mechanisms.",
          "Improved system reliability under security review.",
          "Completed multiple compliance-driven enhancements."
        ],
        docLink: {
          label: "Arch Doc: Backend Security & Stability",
          url: "https://pragmaticplay.atlassian.net/wiki/x/IYBCUQE"
        }
      },
      {
        period: "Update 16",
        title: "Operational Stability Achieved",
        type: "achievement",
        content: "After several months of infrastructure and security work, the platform reached a significantly higher level of operational stability.",
        details: [
          "Closed outstanding security review items.",
          "Resolved Linux-specific platform challenges.",
          "Improved deployment confidence.",
          "Reduced operational uncertainty."
        ]
      }
    ]
  },
  {
    month: "May 2026",
    entries: [
      {
        period: "Update 17",
        title: "Continuous Delivery Momentum",
        type: "experience",
        content: "Feature development continued despite ongoing compliance activities.",
        details: [
          "Delivered a new labeling system.",
          "Maintained steady release velocity.",
          "Completed remaining security compliance activities.",
          "Improved data organization workflows."
        ]
      },
      {
        period: "Update 18",
        title: "Collaboration Features",
        type: "achievement",
        content: "Ribbit evolved from an individual productivity tool into a collaborative platform.",
        details: [
          "Introduced Groups functionality.",
          "Designed collaborative workflows and permissions.",
          "Matured deployment processes into repeatable routines.",
          "Increased overall product readiness."
        ]
      },
      {
        period: "Update 19",
        title: "Validation & Approval",
        type: "experience",
        content: "Stakeholder reviews concluded successfully, validating both product direction and technical implementation.",
        details: [
          "Implemented group privacy and access controls.",
          "Received key stakeholder approvals.",
          "Achieved backend stability objectives.",
          "Completed major validation milestones."
        ]
      },
      {
        period: "Update 20",
        title: "Final Feature Expansion",
        type: "insight",
        content: "With the platform stabilized, the team focused on enhancing flexibility and reducing technical debt.",
        details: [
          "Delivered a dynamic form builder.",
          "Resolved remaining edge cases.",
          "Improved infrastructure reliability.",
          "Prepared the platform for broader integration scenarios."
        ],
        docLink: {
          label: "Arch Doc: Infrastructure Resilience",
          url: "https://pragmaticplay.atlassian.net/wiki/x/IYBCUQE"
        }
      }
    ]
  },
  {
    month: "June 2026",
    entries: [
      {
        period: "Update 21",
        title: "Internal Productivity Improvements",
        type: "achievement",
        content: "The team invested in internal tooling to accelerate testing and development workflows.",
        details: [
          "Developed signal cloning capabilities.",
          "Reduced manual testing setup effort.",
          "Improved iteration speed.",
          "Increased engineering efficiency."
        ]
      },
      {
        period: "Update 22",
        title: "Release Readiness",
        type: "experience",
        content: "Attention shifted toward release orchestration, deployment automation, and application update mechanisms.",
        details: [
          "Implemented cross-platform auto-update workflows.",
          "Finalized release pipelines.",
          "Completed final integration testing.",
          "Prepared for version 1.0 launch."
        ],
        docLink: {
          label: "Arch Doc: Auto-Update",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 23",
        title: "Architecture Adaptation",
        type: "insight",
        content: "As deployment planning matured, architectural decisions evolved to better align with operational realities and support models.",
        details: [
          "Evaluated multiple hosting strategies including EC2, EKS, and ECS.",
          "Adapted architecture based on infrastructure team feedback.",
          "Improved collaboration between development and operations teams.",
          "Balanced ideal technical designs with practical operational requirements.",
          "Key Learning: Successful enterprise software requires adaptability as much as technical excellence."
        ],
        docLink: {
          label: "Arch Doc: Infrastructure Resilience",
          url: "https://pragmaticplay.atlassian.net/wiki/x/IYBCUQE"
        }
      }
    ]
  }
];

// Flatten data
const flattenedEntries = placeholderData.flatMap(mg => 
  mg.entries.map(e => ({ ...e, month: mg.month }))
).map((e, i) => ({ ...e, globalIndex: i }));

const getThemeForType = (type: string) => {
  switch (type) {
    case 'challenge':
      return { 
        text: "text-accent", 
        bg: "bg-accent",
        wrapper: "border-accent/30 bg-accent/10 text-accent",
        icon: <AlertCircle className="w-5 h-5" /> 
      };
    case 'achievement':
      return { 
        text: "text-primary", 
        bg: "bg-primary",
        wrapper: "border-primary/30 bg-primary/10 text-primary",
        icon: <CheckCircle2 className="w-5 h-5" /> 
      };
    case 'insight':
      return { 
        text: "text-firefly", 
        bg: "bg-firefly",
        wrapper: "border-firefly/30 bg-firefly/10 text-firefly",
        icon: <Lightbulb className="w-5 h-5" /> 
      };
    case 'experience':
    default:
      return { 
        text: "text-foreground",
        bg: "bg-muted",
        wrapper: "border-border bg-card text-foreground", 
        icon: <Compass className="w-5 h-5" /> 
      };
  }
};

const MapBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
    {/* Base gentle tint */}
    <div className="absolute inset-0 bg-[#D4C4A8]/10 dark:bg-[#D4C4A8]/5" />
    
    {/* Vintage Map / Topography Pattern */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.1] text-primary" xmlns="http://www.w3.org/2000/svg">
      <pattern id="treasure-map" width="400" height="400" patternUnits="userSpaceOnUse">
         {/* Stylized Waves */}
         <path d="M 40,50 Q 55,35 70,50 T 100,50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
         <path d="M 40,65 Q 55,50 70,65 T 100,65" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
         
         <path d="M 300,320 Q 315,305 330,320 T 360,320" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
         
         {/* Sea Monster / Serpent loops */}
         <path d="M 220,120 Q 240,90 260,120 T 300,120" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
         <circle cx="260" cy="110" r="3" fill="currentColor" />
         
         {/* Stylized Mountains */}
         <path d="M 80,250 L 110,210 L 140,250 L 170,220 L 210,260" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
         <path d="M 110,210 L 120,230 L 105,235" fill="none" stroke="currentColor" strokeWidth="1" />
         <path d="M 170,220 L 175,235 L 165,240" fill="none" stroke="currentColor" strokeWidth="1" />

         {/* Dotted Trails */}
         <path d="M 150,80 C 200,100 180,180 120,160 C 50,140 20,200 40,220" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round" />
         
         <path d="M 340,180 Q 360,160 380,180" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#treasure-map)" />
    </svg>

    {/* Big abstract continents (shadow blobs) to make it feel like landmasses */}
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[60vh] bg-primary rounded-[50%_40%_60%_30%] blur-[80px] opacity-[0.05] dark:opacity-[0.03]" />
    <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[50vh] bg-primary rounded-[40%_60%_70%_30%] blur-[100px] opacity-[0.05] dark:opacity-[0.03]" />
    
    {/* Compass Rose */}
    <div className="absolute top-[5%] right-[5%] xl:top-[10%] xl:right-[15%] opacity-[0.1] mix-blend-multiply dark:mix-blend-overlay">
      <Compass strokeWidth={0.5} className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] text-primary" />
    </div>
    
    {/* Map Decorations (No Text) */}
    <div className="absolute top-[20%] left-[10%] opacity-[0.2] mix-blend-multiply dark:mix-blend-overlay">
       <X strokeWidth={2} className="w-16 h-16 xl:w-24 xl:h-24 text-primary" />
    </div>
    
    <div className="absolute bottom-[30%] left-[15%] opacity-[0.1] mix-blend-multiply dark:mix-blend-overlay">
       <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full border-2 border-dashed border-primary" />
          <div className="w-8 h-8 rounded-full border-2 border-dashed border-primary" />
       </div>
    </div>

    <div className="absolute top-[60%] right-[20%] opacity-[0.15] mix-blend-multiply dark:mix-blend-overlay">
        <MapIcon strokeWidth={1} className="w-32 h-32 xl:w-48 xl:h-48 text-primary" />
    </div>
  </div>
);

const MapNode = ({ entry, total, isVisited, onClick }: { entry: typeof flattenedEntries[0], total: number, isVisited: boolean, onClick: () => void }) => {
  // Use a combination of sine waves to create a natural meandering path.
  const getX = (index: number) => {
    // scale index slightly to make waves
    const v = Math.sin(index * 0.7) + 0.5 * Math.sin(index * 0.3); 
    return 50 + (v / 1.5) * 35; // Value between 15% and 85%
  };

  const x = getX(entry.globalIndex);
  const nextX = entry.globalIndex < total - 1 ? getX(entry.globalIndex + 1) : null;
  const theme = getThemeForType(entry.type);

  const labelSide = x > 50 ? 'left' : 'right';

  return (
    <div className="relative w-full h-32 md:h-40 flex items-center justify-center -my-2 group/node">
      {/* Connector Path */}
      {nextX !== null && (
        <svg 
           className="absolute top-1/2 left-0 w-full h-full pointer-events-none z-0" 
           viewBox="0 0 100 100" 
           preserveAspectRatio="none"
        >
          <path 
            d={`M ${x} 0 C ${x} 50, ${nextX} 50, ${nextX} 100`} 
            fill="none" 
            className="text-primary/30"
            style={{ stroke: 'currentColor', strokeWidth: '3px', strokeLinecap: 'round', vectorEffect: 'non-scaling-stroke', strokeDasharray: '8 12' }}
          />
        </svg>
      )}

      {/* Checkpoint Node */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="absolute z-10 flex flex-col items-center justify-center cursor-pointer"
        style={{ left: `${x}%`, transform: 'translateX(-50%)' }}
        onClick={onClick}
      >
        <div className="relative w-14 h-14 md:w-16 md:h-16 group-hover/node:scale-110 transition-all duration-300 z-10 flex items-center justify-center">
          {/* Diamond Backdrop */}
          <div className="absolute inset-1 rotate-45 bg-card border-2 border-primary/30 shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover/node:border-primary/70 transition-colors duration-300" />
          <div className={`absolute inset-2 rotate-45 border border-primary/10 ${theme.bg} opacity-20`} />
          
          {/* Pulsing ring if unvisited */}
          {!isVisited && (
            <div className="absolute inset-1 rotate-45 border border-primary/40 animate-ping opacity-50" />
          )}
          
          <div className="absolute inset-1 rotate-45 bg-primary/5 opacity-0 group-hover/node:opacity-100 transition-opacity duration-300" />
          
          <div className={`relative z-10 ${theme.text} drop-shadow-md`}>
            {theme.icon}
          </div>
        </div>

        {/* Label (floating left or right) */}
        <div className={`absolute top-1/2 -translate-y-1/2 ${labelSide === 'left' ? 'right-[calc(100%+0.5rem)] text-right items-end' : 'left-[calc(100%+0.5rem)] text-left items-start'} flex flex-col w-40 md:w-56 pointer-events-none`}>
          {/* Connector line */}
          <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-0.5 bg-primary/30 ${labelSide === 'left' ? 'right-[-1.2rem]' : 'left-[-1.2rem]'}`} />
          
          <div className={`bg-card/95 backdrop-blur-md px-4 py-3 rounded-xl border border-primary/20 shadow-lg pointer-events-auto transition-transform duration-300 group-hover/node:-translate-y-1 group-hover/node:border-primary/50 relative ${labelSide === 'left' ? 'ml-auto' : 'mr-auto'}`}>
             <div className="flex flex-col gap-1">
               <span className={`text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] font-bold ${theme.text}`}>{entry.period}</span>
               <span className="text-sm md:text-base font-bold text-foreground leading-snug tracking-tight">{entry.title}</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const DetailsPanel = ({ selectedEntry, onClose }: { selectedEntry: typeof flattenedEntries[0], onClose: () => void }) => {
  const theme = getThemeForType(selectedEntry.type);
  const [panelWidth, setPanelWidth] = useState(480);
  const [isResizing, setIsResizing] = useState(false);

  // Resize logic
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    const startX = e.clientX;
    const startWidth = panelWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = startX - moveEvent.clientX; 
      const newWidth = Math.min(Math.max(startWidth + deltaX, 320), window.innerWidth * 0.9, 1000);
      setPanelWidth(newWidth);
    };

    const onMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <>
      {/* Overlay */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.3 }}
         onClick={onClose}
         className="fixed inset-0 bg-background/40 backdrop-blur-sm z-[90]"
      />

      {/* Side Panel */}
      <motion.div
        key="sidepanel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        style={{ width: panelWidth }}
        className="fixed top-0 right-0 bottom-0 z-[100] max-w-[90vw] bg-card border-l border-border flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.2)]"
      >
         {/* Drag Handle */}
         <div 
           className={`absolute left-0 top-0 bottom-0 w-2 group cursor-col-resize z-50 flex items-center justify-center ${isResizing ? 'bg-primary/20' : 'hover:bg-primary/10'} transition-colors`}
           onMouseDown={handleMouseDown}
         >
           <div className={`w-1 h-12 rounded-full ${isResizing ? 'bg-primary' : 'bg-border group-hover:bg-primary/50'} transition-colors`} />
         </div>

         {/* Header */}
         <div className={`p-6 md:p-10 border-b relative ${theme.wrapper} bg-opacity-20`}>
            {/* Background gradient overlay for nicer tint */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg} opacity-10 pointer-events-none`} />
            
            <button onClick={onClose} className="p-2.5 bg-background/50 backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors absolute top-6 right-6 z-20 focus:outline-none border border-border/50">
               <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.bg} text-white/90 shadow-sm`}>
                  {theme.icon}
                </div>
                <span className={`font-mono text-xs font-bold tracking-widest uppercase ${theme.text}`}>{selectedEntry.period}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground pr-12 leading-tight tracking-tight">{selectedEntry.title}</h3>
              <div className="flex items-center gap-2 text-sm font-semibold opacity-75 uppercase tracking-widest text-muted-foreground">
                <Target className="w-4 h-4" />
                {selectedEntry.month}
              </div>
            </div>
         </div>
         
         {/* Scrollable Content */}
         <div className="p-6 md:p-10 space-y-8 overflow-y-auto relax-scroll flex-1 relative bg-background/50">
            <p className="text-xl leading-relaxed text-foreground/90 font-medium">
               {selectedEntry.content}
            </p>
            
            {selectedEntry.details && (
              <div className="space-y-4 pt-8 border-t border-border/50">
                <h4 className="font-bold text-sm tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                   <Zap className="w-4 h-4 text-primary" /> Key Moments
                </h4>
                <div className="grid gap-4 mt-4">
                  {selectedEntry.details.map((d, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
                       <div className={`w-8 h-8 rounded-full ${theme.wrapper} flex items-center justify-center shrink-0`}>
                          <span className={`text-xs font-mono font-bold ${theme.text}`}>{i+1}</span>
                       </div>
                       <span className="text-base leading-relaxed text-foreground/80">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {selectedEntry.docLink && (
              <div className="pt-8">
                <a
                  href={selectedEntry.docLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-sm w-full sm:w-auto hover:shadow-md hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {selectedEntry.docLink.label}
                </a>
              </div>
            )}
         </div>
      </motion.div>
    </>
  );
};

export function JourneyTimeline() {
  const [selectedEntry, setSelectedEntry] = useState<typeof flattenedEntries[0] | null>(null);
  const [visitedNodes, setVisitedNodes] = useState<number[]>([]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedEntry) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedEntry]);

  return (
    <section id="journey" className="py-24 bg-background border-y border-border relative min-h-screen overflow-hidden">
      {/* Background Decor */}
      <MapBackground />

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Map Container */}
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Journey</h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              From a conceptual wireframe to a production-ready application. Click on any checkpoint to view our struggles, planning, and achievements throughout the journey.
            </p>
          </div>

          <div className="relative py-4">
            {/* Start Point */}
            <div className="flex flex-col items-center justify-center mb-4">
               <div className="w-20 h-20 bg-card rounded-full border-4 border-border flex items-center justify-center shadow-lg relative z-20">
                 <Flag className="w-8 h-8 text-primary" />
               </div>
               <p className="mt-4 font-mono font-bold tracking-widest text-primary uppercase">The Beginning</p>
               <p className="text-sm text-muted">Jan 2026</p>
            </div>

            {/* Nodes */}
            <div className="relative isolate pt-4 pb-4">
               {flattenedEntries.map((entry, index) => (
                 <MapNode 
                   key={index} 
                   entry={entry} 
                   total={flattenedEntries.length} 
                   isVisited={visitedNodes.includes(entry.globalIndex)}
                   onClick={() => {
                     setSelectedEntry(entry);
                     if (!visitedNodes.includes(entry.globalIndex)) {
                       setVisitedNodes(prev => [...prev, entry.globalIndex]);
                     }
                   }} 
                 />
               ))}
            </div>

            {/* End Point */}
            <div className="flex flex-col items-center justify-center mt-4">
               <div className="w-24 h-24 bg-primary rounded-full border-4 border-primary/20 flex items-center justify-center shadow-primary/50 shadow-2xl relative z-20">
                 <Rocket className="w-10 h-10 text-primary-foreground" />
               </div>
               <p className="mt-6 font-mono font-bold tracking-widest text-primary text-xl uppercase">v1.0 Ready</p>
               <p className="text-sm text-muted">June 2026</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedEntry && (
          <DetailsPanel selectedEntry={selectedEntry} onClose={() => setSelectedEntry(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
