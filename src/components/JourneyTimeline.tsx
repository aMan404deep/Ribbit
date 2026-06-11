import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, AlertCircle, CheckCircle2, Lightbulb, Compass, ArrowRight, Activity, ExternalLink } from 'lucide-react';

interface WeekData {
  week: string;
  title: string;
  type: string;
  content: string;
  details?: string[];
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
        title: "The Initial Concept",
        type: "experience",
        content: "Drafted the first set of wireframes. The goal was to build a tool that felt as natural as a frog's ribbit to broadcast messages.",
        details: [
          "Sketched out 14 different variations of the core signal broadcasting view.",
          "Interviewed 5 potential users to refine the core value proposition.",
          "Settled on a desktop-first approach to avoid the clutter of a mobile-first philosophy."
        ]
      },
      {
        week: "Week 2",
        title: "First Major Roadblock",
        type: "challenge",
        content: "Realized our initial state management approach wouldn't scale for complex nested signals. Had to pause and rethink our data models.",
        details: [
          "Attempted to use pure React Context for global state, but encountered massive re-render bottlenecks.",
          "Investigated Zustand and Redux; ultimately decided on a reactive proxy approach.",
          "Spent 3 days just rewriting data fetching hooks to stabilize the UI."
        ]
      },
      {
        week: "Week 3",
        title: "Architecture Breakthrough",
        type: "achievement",
        content: "Successfully prototyped the core broadcasting protocol. Seeing data instantly map across multiple clients was a huge mood booster.",
        details: [
          "Implemented WebSocket connections that successfully maintained 10ms latency under normal loads.",
          "Built our first functional 'Signal' that updated in real-time across two different local instances.",
          "Secured our base schema structure for document-based storage."
        ]
      },
      {
        week: "Week 4",
        title: "Learning from Mistakes",
        type: "insight",
        content: "What we did wrong: We tried to build everything custom initially. What we did right: Pivoted quickly to adopt established libraries for the heavy lifting.",
        details: [
          "Scrapped 2,000 lines of custom scrolling logic and replaced it with a virtualized list library.",
          "Realized 'Not Invented Here' syndrome was slowing us down.",
          "Team morale improved significantly after we stopped fighting standard browser behaviors."
        ]
      }
    ]
  },
  {
    month: "February 2026",
    weeks: [
      {
        week: "Week 5",
        title: "Building the Engine",
        type: "experience",
        content: "Solid week of heads down coding. The focus was entirely on getting the desktop environment optimized.",
        details: [
          "Containerized the core layout to strictly prevent unexpected fluid layout reflows.",
          "Started building the custom design system (buttons, inputs, signals, cards).",
          "Decided on a 'slate' dark mode aesthetic, avoiding pure blacks."
        ]
      },
      {
        week: "Week 7",
        title: "Performance Issues",
        type: "challenge",
        content: "Hit a massive performance wall when rendering over 1,000 signals simultaneously. Thread locking crashes were common.",
        details: [
          "DOM nodes exploded to over 25,000. Chrome profiling showed excessive restyling.",
          "Implemented aggressive debouncing and lazy-loading for off-screen signal components.",
          "Had to disable CSS backdrop-filters as they were causing GPU spikes."
        ]
      }
    ]
  },
  {
    month: "March 2026",
    weeks: [
      {
        week: "Week 10",
        title: "The Beta Release",
        type: "achievement",
        content: "Pushed our first semi-stable build to a small group of testers. The feedback was incredibly motivating.",
        details: [
          "Packaged the first macOS DMG and Windows EXE.",
          "Distributed to 12 alpha testers.",
          "Received our first piece of positive feedback: 'It feels surprisingly fast'."
        ]
      },
      {
        week: "Week 12",
        title: "UI Overhaul",
        type: "insight",
        content: "Realized our dark mode wasn't actually accessible. Had to rewrite our entire color token system to increase contrast.",
        details: [
          "Testers complained about gray text on gray backgrounds.",
          "Ran total accessibility audits, pushing all structural gray contrasts to WCAG AA minimums.",
          "Introduced 'emerald' as our primary action color for a sharp pop."
        ]
      }
    ]
  },
  {
    month: "April 2026",
    weeks: [
      {
        week: "Week 15",
        title: "OS Integrations",
        type: "challenge",
        content: "Native notifications proved to be a pain across Windows, macOS, and Linux. Lots of edge cases to handle.",
        details: [
          "macOS required specific entitlements we didn't initially have.",
          "Windows Action Center grouped notifications incorrectly.",
          "Spent weeks writing platform-specific notification glue code."
        ]
      }
    ]
  },
  {
    month: "May 2026",
    weeks: [
      {
        week: "Week 20",
        title: "Scaling the Backend",
        type: "experience",
        content: "Spent most of this month optimizing database queries and reducing latency for cross-region signaling.",
        details: [
          "Migrated away from simple regional databases to a globally distributed topology.",
          "Implemented read-replicas closer to user nodes.",
          "Halved the TTFB (Time to First Byte) on initial load."
        ]
      }
    ]
  },
  {
    month: "June 2026",
    weeks: [
      {
        week: "Week 24",
        title: "Launch Prep & Reflection",
        type: "achievement",
        content: "Final polish. Looking back, the journey has been exhausting but deeply rewarding. We made it to v1.0.",
        details: [
          "Finalized copy and assets for the landing page.",
          "Confirmed app stability with zero unresolved blocker bugs.",
          "Hit the 'Publish' button on our respective package channels."
        ]
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

const TimelineItem = ({ data, index, isLastInCategory }: { data: WeekData; index: number; isLastInCategory: boolean }) => {
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

        {data.details && data.details.length > 0 && (
          <div className="mt-4 flex items-center gap-2">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground">
              <span className="p-1 rounded bg-card border border-border">
                {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              </span>
              {isOpen ? "Hide details" : "Show details"}
            </div>
          </div>
        )}

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
