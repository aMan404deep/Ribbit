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
        title: "The Spark",
        type: "experience",
        content: "It started with a simple idea from the HR team: what if we built something better? Armed with minimal resources and boundless enthusiasm, we kicked off Ribbit. We brought in hungry interns, drafted our first PRD, and started dreaming big about what this desktop app could become.",
        details: [
          "The inception: The HR team's vision gave our small team a shared purpose.",
          "Bootstrapping: We decided to embrace our constraints, building a desktop app with bare-minimum resources.",
          "Drafting the blueprint: Deep dives into features, early infra discussions, and formalizing our PRD.",
          "The energy was palpable. We were young, scrappy, and ready to take on the world."
        ],
        docLink: {
          label: "Arch Doc: What Ribbit Is",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 2",
        title: "First Steps & Stumbles",
        type: "insight",
        content: "With our vision set, reality hit. We had to figure out how to actually build this thing across Windows, Mac, and Linux. It was a period of frantic research, late-night AI prompts for database designs, and realizing how much we didn't know.",
        details: [
          "The cross-platform puzzle: Diving deep into how to make a single codebase work everywhere.",
          "Wrestling with the database: Initial designs using ChatGPT felt like walking through mud—constant revisions and structural headaches.",
          "Learning to fail fast and pivot."
        ]
      },
      {
        period: "Update 3",
        title: "Getting Our Hands Dirty",
        type: "challenge",
        content: "We stopped talking and started coding. We spun up GitHub repos, scraped together every free tier and student offer we could find, and built tiny throwaway apps to test our theories. But early load tests revealed terrifying concurrency issues.",
        details: [
          "Scrappy beginnings: Surviving entirely on free tiers, student packs, and sheer willpower.",
          "The demo phase: Building small throwaway apps to test and compare tech stacks.",
          "The first scare: Initial stress tests exposed deep threading and concurrency flaws. Our hearts sank when the servers buckled."
        ]
      },
      {
        period: "Update 4",
        title: "Locking It In",
        type: "achievement",
        content: "After a grueling month, we made our bets. We chose Electron.js for the frontend and began the arduous process of navigating corporate infra approvals. Getting Redis and Cursor access felt like winning a small war.",
        details: [
          "Placing our bets: Electron.js officially became our weapon of choice for the desktop client.",
          "Navigating the maze: Our intro to the world of infra, DevOps, and corporate approvals. Redis was finally in.",
          "Breathing slightly easier knowing our foundational stack was locked."
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
        title: "Architecting the Dream",
        type: "experience",
        content: "The architectural debates were intense. Frontend, backend, database—everyone had strong opinions. We pushed boundaries, becoming the first team to implement Server-Sent Events (SSE). It was exhausting but exhilarating.",
        details: [
          "Passionate debates: Architecture discussions that went back and forth for hours. We cared so much about getting it right.",
          "Pioneering SSE: Taking a risk as the first team to implement Server-Sent Events for real-time communication.",
          "Finding clarity: A Cursor-assisted database redesign finally cleared the fog from our earlier, flawed schemas."
        ],
        docLink: {
          label: "Arch Doc: Backend Architecture",
          url: "https://pragmaticplay.atlassian.net/wiki/x/IYBCUQE"
        }
      },
      {
        period: "Update 6",
        title: "Tearing Down to Build Up",
        type: "achievement",
        content: "We realized our backend wasn't going to hold up, so we made the painful choice to refactor early. Meanwhile, we drew the hard lines on what lived locally versus what lived in the cloud. It felt like open-heart surgery on our young codebase.",
        details: [
          "The great divide: Finally settling the agonizing debate over local vs. cloud storage.",
          "The painful refactor: Stepping back to rewrite major backend components for the sake of future scalability.",
          "Trust the process: It felt like moving backwards, but we knew it was necessary."
        ],
        docLink: {
          label: "Arch Doc: Local Persistence (SQLite)",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 7",
        title: "Meeting the Machine & The First Prototype",
        type: "achievement",
        content: "Welcome to enterprise development. We hit a wall of approvals and DevOps setups, and said a bittersweet goodbye to Satvik as he moved to Noida. Despite this, we slapped together our Phase 1 UI and basic backend alignment, creating our first working prototype. Showing it to the HR team and Shweta was terrifying, but seeing the app actually breathe was magical.",
        details: [
          "The waiting game: DevOps setup began (GitLab, RDS), but we were stalled by pending approvals from leadership.",
          "A glimmer of hope: A soft sign-off from Infosec meant our SSO approach wasn't completely crazy.",
          "Team changes: Satvik relocated to the Noida office, forcing us to adapt our daily rhythms.",
          "It’s alive!: Building the Phase 1 UI and seeing end-to-end data flow.",
          "The big reveal: Nervous heartbeats as we demoed the prototype to the HR team and Shweta."
        ]
      },
      {
        period: "Update 8",
        title: "A Tough Pill to Swallow",
        type: "challenge",
        content: "The core functionality worked, but the UI... didn't land. The internal feedback was brutally honest and mostly negative. It hurt our pride, but deep down, we knew they were right. It was time to swallow our egos and do better.",
        details: [
          "The harsh reality: Core features worked, but the UI feedback was a wake-up call.",
          "A mountain of feedback: Internal reviews left us with a steep climb of improvements to make.",
          "Backend groans: Stability tests in the new environment surfaced old ghosts of concurrency issues."
        ]
      }
    ]
  },
  {
    month: "March 2026",
    entries: [
      {
        period: "Update 9",
        title: "Testing & Pre-Release Build",
        type: "experience",
        content: "We were gearing up for our first build release, which meant pencils down on new features. We kicked off an intensive testing sprint, obsessively hunting down bugs.",
        details: [
          "Pre-release jitters: Testing every corner of the app as we prepared to hand over our first build.",
          "Squashing bugs: A frantic sprint to fix the most glaring issues before the deadline.",
          "Feature freeze: No more new ideas, just making sure the current ones actually worked."
        ]
      },
      {
        period: "Update 10",
        title: "Piping the Data",
        type: "experience",
        content: "With testing rolling out, we doubled down on our real-time data flows. Server-client communication was officially born via SSE, and the groundwork for our deployment pipelines started to take shape.",
        details: [
          "Nailing the connection: Server-client communication finally clicked into place via Server-Sent Events (SSE).",
          "Pipeline groundwork: We started early integration of devops components, laying the tracks for our eventual deployments."
        ],
        docLink: {
          label: "Arch Doc: Data Flow",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 11",
        title: "Finding Our Guardian Angels",
        type: "insight",
        content: "Drowning in UI debt, we reached out for help. Aditya from the design team became our unsung hero, squeezing us in whenever he had a free moment. Simultaneously, we triggered the Eye of Sauron (Infosec) by asking for MS Graph APIs.",
        details: [
          "The UI Savior: Aditya from design gracefully stepped in to help us out of our UX mess.",
          "Under the microscope: Asking for MS Graph APIs initiated a massive, grueling security review.",
          "The endless ping-pong: A frustrating but necessary back-and-forth with the security teams."
        ]
      },
      {
        period: "Update 12",
        title: "The Waiting Game",
        type: "experience",
        content: "We hit a strange milestone: almost all our key features were done. Everything looked great on the frontend. But we were chained to the ground by lingering environment setups and endless DevOps discussions. We had a Ferrari, but we were waiting for the road to be built.",
        details: [
          "The feature plateau: A bittersweet moment—core features were done, but we were blocked by environment setups.",
          "Polishing the chrome: Spending our nervous energy refining the UI while waiting on approvals.",
          "The DevOps dance: Endless coordination and alignment meetings to get the infra ready."
        ]
      }
    ]
  },
  {
    month: "April 2026",
    entries: [
      {
        period: "Update 13",
        title: "Lost in Translation",
        type: "challenge",
        content: "If the last update was a waiting game, this one was a game of telephone. Communication delays between us and DevOps caused endless friction. They made changes, we made changes, things broke. We desperately tried to find rhythm while designing our notification system.",
        details: [
          "Communication breakdown: Misalignments and delays as we tried to sync our code with DevOps' changes.",
          "Frustration mounts: Struggling with GitLab configuration issues that slowed us to a crawl.",
          "A creative escape: Pouring our frustration into designing a robust, cross-platform notification scheduling system."
        ]
      },
      {
        period: "Update 14",
        title: "Smoothing the Rough Edges",
        type: "experience",
        content: "Slowly, painfully, the chaotic pipelines started to solidify. We finally got permissions sorted and environments consistent. On the frontend, getting notifications to behave perfectly across Mac, Windows, and Linux felt like wrestling a three-headed dog.",
        details: [
          "Calming the storm: Deployment pipelines finally started behaving predictably.",
          "The OS puzzle: Taming the wild beasts of Windows, macOS, and Linux native notifications.",
          "Finding our footing: The infrastructure finally felt like something we could stand on."
        ]
      },
      {
        period: "Update 15",
        title: "Fortifying the Castle",
        type: "insight",
        content: "The security reviews raged on, forcing us to harden every inch of our backend. We matched that intensity on the frontend by building 'lockdown' features and persistent alerts. The app was no longer just a tool; it was becoming a fortress.",
        details: [
          "Security by fire: The relentless Graph API review forced us to build an incredibly resilient backend.",
          "Lockdown mode: Implementing persistent alerts and screen takeovers that commanded the user's attention.",
          "A sense of security: The system was finally becoming stable under immense scrutiny."
        ],
        docLink: {
          label: "Arch Doc: Backend Security & Stability",
          url: "https://pragmaticplay.atlassian.net/wiki/x/IYBCUQE"
        }
      },
      {
        period: "Update 16",
        title: "The Clouds Part",
        type: "achievement",
        content: "Finally, a breakthrough. The endless feedback loops with DevOps and Security finally closed. The infrastructure held firm. Even Linux, our most stubborn OS child, finally played nice with our notifications. For the first time, we could breathe.",
        details: [
          "Closing the loops: Surmounting the mountain of DevOps and InfoSec feedback.",
          "Taming the Penguin: Finally fixing the last, stubborn OS quirks on Linux.",
          "A quiet victory: The overwhelming sense of relief as the foundational instability melted away."
        ]
      }
    ]
  },
  {
    month: "May 2026",
    entries: [
      {
        period: "Update 17",
        title: "The Relentless March",
        type: "experience",
        content: "We refused to be slowed down by the final, dragging stages of the Graph API review. We put our heads down and kept delivering. We pushed out a whole new Labeling system. The momentum was intoxicating; nothing could stop us from building Ribbit.",
        details: [
          "Unstoppable momentum: Delivering regular features despite crushing administrative overhead.",
          "Organizing the chaos: Shipping a complex Labeling system across the full stack.",
          "The finish line in sight: Wrapping up the very last remnants of the grueling security compliance checks."
        ]
      },
      {
        period: "Update 18",
        title: "Bringing People Together",
        type: "achievement",
        content: "Ribbit was evolving from a single-user tool into a true collaborative platform. Building the Groups system challenged us to think deeply about workflows and UI. Behind the scenes, the deployment flow finally became a boring, predictable routine—which is exactly what you want.",
        details: [
          "The social fabric: Designing and shipping complex Group workflows and user interfaces.",
          "Boring is beautiful: Achieving a production-ready, flawlessly consistent deployment pipeline.",
          "A maturing application: We were no longer building a prototype; we were building an enterprise tool."
        ]
      },
      {
        period: "Update 19",
        title: "The Final Stamps",
        type: "experience",
        content: "We tackled the nerve-wracking complexity of group privacy and access controls. But the real triumph of the period was hearing those magic words: 'Approved.' Key stakeholders gave their final validations, and our turbulent backend was officially deemed 'stable.'",
        details: [
          "The privacy maze: Carefully engineering foolproof access controls for our new Groups feature.",
          "The 'Approved' stamp: Surpassing the final, massive hurdles of stakeholder validation.",
          "A solid foundation: The backend, after months of chaos, was finally at peace."
        ]
      },
      {
        period: "Update 20",
        title: "Polishing the Diamond",
        type: "insight",
        content: "With everything stable, we added the cherry on top: a dynamic form builder. While the frontend team ran wild with question types and UIs, the backend team operated like janitors, cleaning up edge cases and polishing the infrastructure until it shone.",
        details: [
          "The creative sprint: Building a dynamic, multi-question form builder to cap off our feature set.",
          "The deep clean: Eradicating edge cases and sweeping up technical debt in the backend.",
          "Ready for the big leagues: The system was completely primed for real-world product integration."
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
        title: "Need for Speed",
        type: "achievement",
        content: "We realized our testing cycles were too slow. So, we stopped building for the users for a moment, and built for ourselves. Creating 'signal cloning' was a game-changer; suddenly, what took minutes of manual setup took seconds. We were flying.",
        details: [
          "Sharpening our tools: Halting feature work to build internal tools that dramatically sped up our workflow.",
          "The cloning breakthrough: Implementing full-stack data cloning to bypass agonizing manual test setups.",
          "The power of iteration: Feeling the immediate rush of moving twice as fast."
        ]
      },
      {
        period: "Update 22",
        title: "The Launchpad",
        type: "experience",
        content: "This is it. The final stretch. We stared down the terrifying reality of auto-updates across Mac, Windows, and Linux. The release pipelines are humming, the final coordination is happening, and we're standing on the precipice of v1.0. We are exhausted, but we've never been prouder.",
        details: [
          "The Auto-Update beast: Wrestling with the immense complexity of seamless cross-platform app updates.",
          "All systems go: The backend and frontend aligning perfectly for the final release pipeline orchestration.",
          "The eve of launch: A profound sense of exhaustion mixed with the undeniable thrill of seeing our creation ready for the world."
        ],
        docLink: {
          label: "Arch Doc: Auto-Update",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        period: "Update 23",
        title: "Compromise & Growth",
        type: "insight",
        content: "The latest development: A humbling time of learning to compromise. We realized our 'ideal' architecture clashed with what the DevOps team was used to supporting. We moved from EC2 to EKS, then to ECS. It was a masterclass in flexibility.",
        details: [
          "The reality check: Re-iterating our architecture to match DevOps realities, bouncing from EC2 to EKS to ECS.",
          "Bridging the gap: Both our team and the infra team had to bend and learn from each other.",
          "Adapting fast: It was all new to the team, so they had to adjust at few places and we had to adjust at some."
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
