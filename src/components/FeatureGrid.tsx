import { FileText, Calendar, Repeat, Lock, BarChart3, Share2, Users, Tag, Network, Copy, PenTool, Bell } from 'lucide-react';

const features = [
  {
    icon: <FileText className="text-primary" size={24} />,
    title: "Forms, Polls & Alerts",
    description: "Three signal types — instant or full, with multi-step wizards."
  },
  {
    icon: <Calendar className="text-accent" size={24} />,
    title: "Scheduling",
    description: "Publish now or schedule for later; edit before go-live."
  },
  {
    icon: <Repeat className="text-[#F59E0B]" size={24} />,
    title: "Recurring series",
    description: "Daily/weekly/monthly/yearly automation with calendar view."
  },
  {
    icon: <Lock className="text-[#EF4444]" size={24} />,
    title: "Persistent alerts",
    description: "Full-screen lockdown for critical, can't-miss communications."
  },
  {
    icon: <BarChart3 className="text-[#3B82F6]" size={24} />,
    title: "Deep analytics",
    description: "Distribution, timeline, respondents, insights, and compare."
  },
  {
    icon: <Share2 className="text-[#8B5CF6]" size={24} />,
    title: "Share analytics",
    description: "Let recipients see results where role and anonymity allow."
  },
  {
    icon: <Users className="text-[#10B981]" size={24} />,
    title: "Groups",
    description: "Build recipient lists; clone groups; reverse lookup."
  },
  {
    icon: <Tag className="text-[#F43F5E]" size={24} />,
    title: "Labels",
    description: "Tag and filter signals across your workspace."
  },
  {
    icon: <Network className="text-[#EAB308]" size={24} />,
    title: "Hierarchy & levels",
    description: "Tiered publishing org with publisher directory and signal board."
  },
  {
    icon: <Copy className="text-[#06B6D4]" size={24} />,
    title: "Clone signals",
    description: "Duplicate any poll, alert, or form to save setup time."
  },
  {
    icon: <PenTool className="text-muted" size={24} />,
    title: "Drafts",
    description: "Auto-save and resume signals and responses."
  },
  {
    icon: <Bell className="text-firefly" size={24} />,
    title: "Desktop notifications",
    description: "OS alerts, sounds, and auto-updates."
  }
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-card border-y border-border">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to broadcast</h2>
          <p className="text-lg text-muted">
            Create, send, and analyze Forms, Alerts, and Polls across your organization. Schedule once or run recurring series, reach the right people through Groups and Hierarchy, and turn responses into rich Analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-[16px] bg-background border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
