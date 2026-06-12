import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, AlertCircle, CheckCircle2, Lightbulb, Compass, ArrowRight, Activity, ExternalLink } from 'lucide-react';

interface WeekData {
  week: string;
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
  weeks: WeekData[];
}

const placeholderData: MonthGroup[] = [
  {
    month: "January 2026",
    weeks: [
      {
        week: "Week 1",
        title: "The Spark",
        type: "experience",
        content: "It started with a simple idea from Zucky: what if we built something better? Armed with minimal resources and boundless enthusiasm, we kicked off Ribbit. We brought in hungry interns, drafted our first PRD, and started dreaming big about what this desktop app could become.",
        details: [
          "The inception: Zucky's vision gave our small team a shared purpose.",
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
        week: "Week 2",
        title: "First Steps & Stumbles",
        type: "insight",
        content: "With our vision set, reality hit. We had to figure out how to actually build this thing across Windows, Mac, and Linux. It was a week of frantic research, late-night AI prompts for database designs, and realizing how much we didn't know.",
        details: [
          "The cross-platform puzzle: Diving deep into how to make a single codebase work everywhere.",
          "Wrestling with the database: Initial designs using ChatGPT felt like walking through mud—constant revisions and structural headaches.",
          "Learning to fail fast and pivot."
        ]
      },
      {
        week: "Week 3",
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
        week: "Week 4",
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
    weeks: [
      {
        week: "Week 5",
        title: "Architecting the Dream",
        type: "experience",
        content: "The architectural debates were intense. Frontend, backend, database—everyone had strong opinions. We pushed boundaries, becoming the first team to implement Server-Sent Events (SSE). It was exhausting but exhilarating.",
        details: [
          "Passionate debates: Architecture discussions that went back and forth for hours. We cared so much about getting it right.",
          "Pioneering SSE: Taking a risk as the first team to implement Server-Sent Events for real-time communication.",
          "Finding clarity: A Cursor-assisted database redesign finally cleared the fog from our earlier, flawed schemas."
        ]
      },
      {
        week: "Week 6",
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
        week: "Week 7",
        title: "Meeting the Machine",
        type: "challenge",
        content: "Welcome to enterprise development. We hit a wall of approvals, infosec reviews, and DevOps setups. It was frustratingly slow, but getting a soft sign-off from Infosec gave us a glimmer of hope. Also, we had to say a bittersweet goodbye to Satvik as he moved to the Noida office.",
        details: [
          "The waiting game: DevOps setup began (GitLab, RDS), but we were stalled by pending approvals from leadership.",
          "A glimmer of hope: A soft sign-off from Infosec meant our SSO approach wasn't completely crazy.",
          "Team changes: Satvik relocated to the Noida office, forcing us to adapt our daily rhythms."
        ]
      },
      {
        week: "Week 8",
        title: "Compromise & Growth",
        type: "experience",
        content: "A humbling week of learning to compromise. We realized our 'ideal' architecture clashed with what the DevOps team was used to supporting. We moved from EC2 to EKS, then to ECS. It was a masterclass in flexibility.",
        details: [
          "The reality check: Re-iterating our architecture to match DevOps realities, bouncing from EC2 to EKS to ECS.",
          "Bridging the gap: Both our team and the infra team had to bend and learn from each other.",
          "Nailing the connection: Server-client communication finally clicked into place."
        ],
        docLink: {
          label: "Arch Doc: Data Flow",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      }
    ]
  },
  {
    month: "March 2026",
    weeks: [
      {
        week: "Week 9",
        title: "The Prototype Nerve-Wracker",
        type: "achievement",
        content: "The moment of truth. We slapped together our Phase 1 UI and basic backend alignment, creating our very first working prototype. Showing it to Zucky and Shweta was terrifying, but seeing the app actually 'breathe' for the first time was magical.",
        details: [
          "It’s alive!: Building the Phase 1 UI and finally seeing end-to-end data flow.",
          "The big reveal: Nervous heartbeats as we demoed the prototype to Zucky and Shweta.",
          "Under the hood: Quietly wrestling with the new infra setup and compatibility testing in the background."
        ]
      },
      {
        week: "Week 10",
        title: "A Tough Pill to Swallow",
        type: "challenge",
        content: "The core functionality worked, but the UI... didn't land. The internal feedback was brutally honest and mostly negative. It hurt our pride, but deep down, we knew they were right. It was time to swallow our egos and do better.",
        details: [
          "The harsh reality: Core features worked, but the UI feedback was a wake-up call.",
          "A mountain of feedback: Internal reviews left us with a steep climb of improvements to make.",
          "Backend groans: Stability tests in the new environment surfaced old ghosts of concurrency issues."
        ]
      },
      {
        week: "Week 11",
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
        week: "Week 12",
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
    weeks: [
      {
        week: "Week 13",
        title: "Lost in Translation",
        type: "challenge",
        content: "If last week was a waiting game, this week was a game of telephone. Communication delays between us and DevOps caused endless friction. They made changes, we made changes, things broke. We desperately tried to find rhythm while designing our notification system.",
        details: [
          "Communication breakdown: Misalignments and delays as we tried to sync our code with DevOps' changes.",
          "Frustration mounts: Struggling with GitLab configuration issues that slowed us to a crawl.",
          "A creative escape: Pouring our frustration into designing a robust, cross-platform notification scheduling system."
        ]
      },
      {
        week: "Week 14",
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
        week: "Week 15",
        title: "Fortifying the Castle",
        type: "insight",
        content: "The security reviews raged on, forcing us to harden every inch of our backend. We matched that intensity on the frontend by building 'lockdown' features and persistent alerts. The app was no longer just a tool; it was becoming a fortress.",
        details: [
          "Security by fire: The relentless Graph API review forced us to build an incredibly resilient backend.",
          "Lockdown mode: Implementing persistent alerts and screen takeovers that commanded the user's attention.",
          "A sense of security: The system was finally becoming stable under immense scrutiny."
        ]
      },
      {
        week: "Week 16",
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
    weeks: [
      {
        week: "Week 17",
        title: "The Relentless March",
        type: "experience",
        content: "We refused to be slowed down by the final, dragging stages of the Graph API review. We put our heads down and kept delivering. We pushed out a whole new Labeling system. The momentum was intoxicating; nothing could stop us from building Ribbit.",
        details: [
          "Unstoppable momentum: Delivering bi-weekly features despite crushing administrative overhead.",
          "Organizing the chaos: Shipping a complex Labeling system across the full stack.",
          "The finish line in sight: Wrapping up the very last remnants of the grueling security compliance checks."
        ]
      },
      {
        week: "Week 18",
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
        week: "Week 19",
        title: "The Final Stamps",
        type: "experience",
        content: "We tackled the nerve-wracking complexity of group privacy and access controls. But the real triumph of the week was hearing those magic words: 'Approved.' Key stakeholders gave their final validations, and our turbulent backend was officially deemed 'stable.'",
        details: [
          "The privacy maze: Carefully engineering foolproof access controls for our new Groups feature.",
          "The 'Approved' stamp: Surpassing the final, massive hurdles of stakeholder validation.",
          "A solid foundation: The backend, after months of chaos, was finally at peace."
        ]
      },
      {
        week: "Week 20",
        title: "Polishing the Diamond",
        type: "insight",
        content: "With everything stable, we added the cherry on top: a dynamic form builder. While the frontend team ran wild with question types and UIs, the backend team operated like janitors, cleaning up edge cases and polishing the infrastructure until it shone.",
        details: [
          "The creative sprint: Building a dynamic, multi-question form builder to cap off our feature set.",
          "The deep clean: Eradicating edge cases and sweeping up technical debt in the backend.",
          "Ready for the big leagues: The system was completely primed for real-world product integration."
        ]
      }
    ]
  },
  {
    month: "June 2026",
    weeks: [
      {
        week: "Week 21",
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
        week: "Week 22",
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
      }
    ]
  }
];

const getThemeForType = (type: string) => {
  switch (type) {
    case 'challenge':
      return { 
        text: "text-[#EF4444]", 
        bg: "bg-[#EF4444]",
        wrapper: "border-[#EF4444]/30 bg-[#EF4444]/5 text-[#EF4444]",
        icon: <AlertCircle className="w-4 h-4" /> 
      };
    case 'achievement':
      return { 
        text: "text-[#10B981]", 
        bg: "bg-[#10B981]",
        wrapper: "border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981]",
        icon: <CheckCircle2 className="w-4 h-4" /> 
      };
    case 'insight':
      return { 
        text: "text-[#3B82F6]", 
        bg: "bg-[#3B82F6]",
        wrapper: "border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[#3B82F6]",
        icon: <Lightbulb className="w-4 h-4" /> 
      };
    case 'experience':
    default:
      return { 
        text: "text-muted",
        bg: "bg-muted",
        wrapper: "border-border bg-card text-muted", 
        icon: <Compass className="w-4 h-4" /> 
      };
  }
};

const TimelineItem = ({ data, index, isLastInCategory }: { data: WeekData; index: number; isLastInCategory: boolean; key?: number | string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeForType(data.type);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        delay: index * 0.1 
      }}
      className="relative pl-10 md:pl-16 group"
    >
      {/* Dynamic Connecting Line */}
      {!isLastInCategory && (
        <div className="absolute left-[3px] md:left-[23px] top-[40px] bottom-[-40px] w-px bg-border z-0" />
      )}

      {/* Node Icon container */}
      <div className="absolute left-[-13px] md:left-[7px] top-[18px] w-8 h-8 rounded-xl bg-card border border-border flex items-center justify-center z-10 shadow-sm transition-transform duration-300 group-hover:scale-110">
         <div className={`w-2.5 h-2.5 rounded-full ${theme.bg}`} />
      </div>

      {/* Content Card */}
      <div 
        className="cursor-pointer block relative -ml-4 p-6 rounded-[16px] bg-background border border-border hover:shadow-md transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">
            {data.week}
          </span>
          <div className="w-1 h-1 rounded-full bg-border" />
          <span className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-md uppercase tracking-wider border ${theme.wrapper}`}>
            {theme.icon}
            {data.type}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-foreground transition-colors group-hover:text-primary">
          {data.title}
        </h3>
        
        <p className="text-muted leading-relaxed">
          {data.content}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          {data.details && data.details.length > 0 && (
            <div className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground">
              <span className="p-1 rounded bg-card border border-border">
                {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              </span>
              {isOpen ? "Hide details" : "Show details"}
            </div>
          )}

          {data.docLink && (
            <a
              href={data.docLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors ml-auto px-3 py-1.5 rounded bg-primary/5 border border-primary/20 hover:bg-primary/10"
              onClick={(e) => e.stopPropagation()}
            >
              {data.docLink.label}
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          )}
        </div>

        <AnimatePresence>
          {isOpen && data.details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-6 border-t border-border">
                <ul className="space-y-3">
                  {data.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-muted">
                      <div className="w-5 h-5 rounded bg-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-mono">{idx + 1}</span>
                      </div>
                      <span className="leading-relaxed text-sm pt-[2px]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 bg-card border-y border-border">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
          <p className="text-lg text-muted">
            From a conceptual wireframe to a production-ready application. A transparent look at our architecture choices, failures, and breakthroughs.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24 max-w-5xl mx-auto">
          {placeholderData.map((monthGroup, mIndex) => (
            <div key={mIndex} className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
              
              {/* Sticky Month - Left Side */}
              <div className="lg:w-1/4 shrink-0">
                <div className="sticky top-32">
                  <span className="font-mono text-muted tracking-widest uppercase text-xs mb-2 block">
                    {mIndex + 1 < 10 ? `0${mIndex + 1}` : mIndex + 1} / 06
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground">{monthGroup.month}</h3>
                </div>
              </div>

              {/* Timeline Nodes - Right Side */}
              <div className="lg:w-3/4 relative pt-2">
                <div className="space-y-8">
                  {monthGroup.weeks.map((weekData, wIndex) => (
                    <TimelineItem 
                      key={wIndex} 
                      data={weekData} 
                      index={wIndex} 
                      isLastInCategory={wIndex === monthGroup.weeks.length - 1}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Architecture Documents Section */}
        <div className="mt-24 md:mt-32 max-w-5xl mx-auto border-t border-border pt-12 md:pt-16">
          <div className="bg-background rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-[-50%] right-[-5%] w-[40%] h-[200%] bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex-1">
              <h4 className="text-2xl font-bold mb-3 text-foreground">Deep Dive into the Architecture</h4>
              <p className="text-muted text-base max-w-xl leading-relaxed">
                Explore the comprehensive technical documentation outlining our system design, core infrastructure choices, and the underlying rationale behind the project.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <a
                href="https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-hover shadow-sm transition-all hover:shadow hover:-translate-y-0.5 w-full sm:w-auto min-w-[220px]"
              >
                Frontend Architecture
                <ExternalLink className="w-4 h-4 ml-1 opacity-90" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-muted/10 shadow-sm transition-all hover:shadow hover:-translate-y-0.5 w-full sm:w-auto min-w-[220px]"
                onClick={(e) => {
                  if (e.currentTarget.getAttribute('href') === '#') {
                    e.preventDefault();
                    // Placeholder action
                  }
                }}
              >
                Backend Architecture
                <ExternalLink className="w-4 h-4 ml-1 opacity-90" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
