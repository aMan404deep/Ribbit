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
        title: "Foundations & Kickoff",
        type: "experience",
        content: "Project kickoff. Defined Ribbit's core purpose and system-level requirements across frontend and backend. Initial infra discussions began.",
        details: [
          "Frontend: Defined what Ribbit should be and what problems it should solve.",
          "Backend: High-level infra discussions and system direction finalized (core responsibilities, scaling expectations)."
        ],
        docLink: {
          label: "Arch Doc: What Ribbit Is",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        week: "Week 2",
        title: "Parallel Exploration",
        type: "insight",
        content: "Parallel exploration started for tech stacks, cross-platform feasibility, and DB design.",
        details: [
          "Frontend: Researched how to build a cross-platform desktop app (Windows, macOS, Linux).",
          "Backend: Initial database design started using AI (ChatGPT), but faced early structural challenges and frequent revisions."
        ]
      },
      {
        week: "Week 3",
        title: "Tech Evaluation Phase",
        type: "challenge",
        content: "Evaluated tech stacks via small demo apps and identified early structural/concurrency challenges.",
        details: [
          "Frontend: Evaluated tech stacks. Built small demo apps to learn and compare options.",
          "Backend: Threading and concurrency challenges identified under high load/multi-user stress scenarios. Initial stress testing began."
        ]
      },
      {
        week: "Week 4",
        title: "Final Decisions Locked",
        type: "achievement",
        content: "Stack and infrastructure access finalized. Early infra dependencies cleared.",
        details: [
          "Frontend: Finalized the stack choice: Electron.js.",
          "Backend: Redis permission approval completed along with Cursor access approval."
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
        title: "Architecture & Core Design",
        type: "experience",
        content: "System architecture discussions across frontend and backend. Full-stack flow defined.",
        details: [
          "Frontend: Deep architecture discussions: frontend, backend, database, and integrations.",
          "Backend: Cursor-assisted database redesign improved schema structure and reduced earlier design issues."
        ]
      },
      {
        week: "Week 6",
        title: "Data & Communication Layer",
        type: "achievement",
        content: "Finalized data storage splits and the communication layers between client and server.",
        details: [
          "Frontend: Local vs cloud storage decisions completed. Local DB integration direction agreed.",
          "Backend: SSE (Server-Sent Events) chosen for communication. Major backend refactor initiated for better scalability and maintainability."
        ],
        docLink: {
          label: "Arch Doc: Local Persistence (SQLite)",
          url: "https://pragmaticplay.atlassian.net/wiki/x/BIAzUQE"
        }
      },
      {
        week: "Week 7",
        title: "Infrastructure Onboarding",
        type: "challenge",
        content: "DevOps rollout and infrastructure onboarding presented friction due to pending stakeholders approvals.",
        details: [
          "Frontend: Finalized local database integration approach.",
          "Backend: DevOps infrastructure setup started (GitLab, servers, RDS, CloudWatch). Multiple approvals pending (Jacob, Jayaram, Sankara)."
        ]
      },
      {
        week: "Week 8",
        title: "Infrastructure Stabilization",
        type: "experience",
        content: "Pipeline and environment groundwork progressed alongside frontend groundwork.",
        details: [
          "Frontend: Worked out server ↔ client communication using Server-Sent Events (SSE).",
          "Backend: Continued DevOps setup and early integration of infra components. Pipeline groundwork progressed."
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
        title: "First End-to-End Validation",
        type: "achievement",
        content: "Built Phase 1 UI and basic backend alignment to demonstrate product direction and feasibility.",
        details: [
          "Frontend: Built Phase 1 UI to demonstrate end-to-end feasibility.",
          "Backend: Started adapting backend services to new infra setup. Initial migration and compatibility testing."
        ]
      },
      {
        week: "Week 10",
        title: "Phase 1 Demo & Feedback",
        type: "challenge",
        content: "Demoed Phase 1. Core functionality validated, but UI feedback was negative and backend exposed stress points.",
        details: [
          "Frontend: Demoed Phase 1 UI. Core functionality validated. UI feedback was negative.",
          "Backend: Continued infra validation. Stability testing and concurrency issues revisited under new environment."
        ]
      },
      {
        week: "Week 11",
        title: "System Redesign Phase",
        type: "insight",
        content: "Revamping UI/UX while entering a formal backend Graph API security review.",
        details: [
          "Frontend: Revamped UI and UX with help from the UI team (Aditya).",
          "Backend: Graph API security review initiated (Roman, Gururaj, Olekyendra, Furqan). Estimated duration: 1–1.5 months."
        ]
      },
      {
        week: "Week 12",
        title: "Parallel Stabilization",
        type: "experience",
        content: "Polishing frontend while the backend navigates ongoing security review and DevOps alignment.",
        details: [
          "Frontend: Continued UI polish and usability improvements based on feedback.",
          "Backend: Parallel progress on security review + DevOps coordination. Multiple back-and-forth discussions."
        ]
      }
    ]
  },
  {
    month: "April 2026",
    weeks: [
      {
        week: "Week 13",
        title: "Infra Migration Begins",
        type: "challenge",
        content: "Backend infra migration into new DevOps setup. Frontend continued addressing UX feedback.",
        details: [
          "Frontend: Designed notification behavior. Explored scheduling and periodic delivery.",
          "Backend: Ongoing DevOps and security coordination. GitLab instance configuration issues and alignment discussions."
        ]
      },
      {
        week: "Week 14",
        title: "Pipeline Stabilization",
        type: "experience",
        content: "Securing deployment pipelines and ironing out OS-specific notification behavior.",
        details: [
          "Frontend: Implemented scheduled notifications across Windows, macOS, and Linux.",
          "Backend: Infra stabilization phase. Fixes around deployment pipelines, permissions, and environment consistency."
        ]
      },
      {
        week: "Week 15",
        title: "System Hardening",
        type: "insight",
        content: "Designing persistent screen behaviors for frontend while the backend stabilizes under security constraints.",
        details: [
          "Frontend: Implemented persistent alerts and screen lockdown for a selected period.",
          "Backend: Continued Graph API security review + backend infra hardening. System gradually stabilized."
        ]
      },
      {
        week: "Week 16",
        title: "Stability Milestone",
        type: "achievement",
        content: "A major resolution phase. Reduced deployment instability and stabilized OS-level behaviors.",
        details: [
          "Frontend: Stabilized persistent alerts. Addressed remaining OS differences, especially on Linux.",
          "Backend: Major resolution phase for DevOps/security feedback loops. Reduced instability and finalized key infra behavior."
        ]
      }
    ]
  },
  {
    month: "May 2026",
    weeks: [
      {
        week: "Week 17",
        title: "Feature Expansion Begins",
        type: "experience",
        content: "Labels system introduced along with supporting schema updates and APIs.",
        details: [
          "Frontend: Added labels system and supporting UI.",
          "Backend: Final stages of Graph API security review. Addressed remaining security concerns and compliance adjustments."
        ]
      },
      {
        week: "Week 18",
        title: "Group System Development",
        type: "achievement",
        content: "Implemented group workflows, logics, and privacy access controls.",
        details: [
          "Frontend: Added groups. Designed group flows and updated UI.",
          "Backend: DevOps and backend integration refinement. Ensured production readiness and consistent deployment flow."
        ]
      },
      {
        week: "Week 19",
        title: "Privacy & Approvals",
        type: "experience",
        content: "Group privacy access controls implemented and final stakeholder validations were achieved.",
        details: [
          "Frontend: Implemented group privacy access controls.",
          "Backend: Approvals and final validations completed across stakeholders. Backend system considered near-stable."
        ]
      },
      {
        week: "Week 20",
        title: "Forms & System Consolidation",
        type: "insight",
        content: "Form builder introduced while backend focused on cleanup and readiness for product integrations.",
        details: [
          "Frontend: Added forms with different question types.",
          "Backend: Full backend stabilization. Cleanup of infra edge cases and readiness for product-level integrations."
        ]
      }
    ]
  },
  {
    month: "June 2026",
    weeks: [
      {
        week: "Week 21",
        title: "Optimization & Acceleration",
        type: "achievement",
        content: "Testing acceleration features completed. Focus shifted to speeding up iteration cycles.",
        details: [
          "Frontend (Jun 1–7): Implemented signal cloning to speed up testing and iteration.",
          "Backend (Jun 1–7): Backend support for signal cloning feature enabled to accelerate testing cycles."
        ]
      },
      {
        week: "Week 22",
        title: "Updates & Release Readiness",
        type: "experience",
        content: "Release pipeline and app update infrastructure completed and aligned for production rollout.",
        details: [
          "Frontend (Jun 8–12): Designed and implemented app updates for all three operating systems (in progress as of Jun 12).",
          "Backend (Jun 8–12): Backend support for app update system across Windows/macOS/Linux. Final coordination for release pipeline in progress."
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
