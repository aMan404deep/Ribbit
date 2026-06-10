import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What signal types does Ribbit support?",
    a: "Polls, Alerts, and Forms — each available as instant (send now) or full (scheduled/recurring)."
  },
  {
    q: "Can I schedule signals for later?",
    a: "Yes. Set a future publish time and edit or delete before it goes live."
  },
  {
    q: "Does Ribbit support recurring signals?",
    a: "Yes. Create series with daily/weekly/monthly/yearly intervals, view them on a calendar, and manage occurrences."
  },
  {
    q: "What are persistent alerts?",
    a: "A full-screen lockdown mode for critical alerts and final-deadline polls so they can't be missed. They stay until you act, and you can skip a poll with a reason."
  },
  {
    q: "Can I clone a previous signal?",
    a: "Yes. Clone any published poll, alert, or form — or clone an entire group."
  },
  {
    q: "How does hierarchy work?",
    a: "Publishers are assigned hierarchy levels (Tier 1, 1.5, 2, … MAX/GLOBAL). Admins can view the publisher directory and assign levels."
  },
  {
    q: "What analytics are included?",
    a: "Overview, distribution charts, respondent tracking, timeline, auto-insights, signal comparison, and optional analytics sharing with recipients."
  },
  {
    q: "Can responses be anonymous?",
    a: "Yes — Recorded, Anonymous, or Semi-anonymous modes."
  },
  {
    q: "Does the app update itself?",
    a: "Yes. Built-in auto-update on Windows, macOS, and Linux."
  },
  {
    q: "Can I respond without opening the app?",
    a: "Yes. Instant polls, alerts, and forms show a desktop popup where you can vote, acknowledge, or reply inline."
  },
  {
    q: "Will I get duplicate notifications?",
    a: "No. Ribbit tracks notified/dismissed signals and routes native toasts to history (Action Center / Notification Center) to avoid double banners."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted">
            Everything you need to know about Ribbit and how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold pr-8">{faq.q}</span>
                <span className="text-muted shrink-0">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
