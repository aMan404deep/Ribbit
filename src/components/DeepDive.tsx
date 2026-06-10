import { Activity, Radio, Network, Calendar, Tag, Copy } from 'lucide-react';
import { AnalyticsMockup } from './AnalyticsMockup';
import { CalendarMockup } from './CalendarMockup';
import { GroupsMockup } from './GroupsMockup';
import { WizardMockup } from './WizardMockup';
import { HierarchyMockup } from './HierarchyMockup';
import { DraftsMockup } from './DraftsMockup';

export function DeepDive() {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">
        
        {/* Signals */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Radio className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Powerful Signal Wizards</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Create instant or scheduled Forms, Alerts, and Polls. Broadcast what matters with priority-based alerts, structural deep feedback forms, and quick-decision polls.
            </p>
            <ul className="space-y-4">
              {['Choice, rating, ranking, and text forms', 'Emergency & broadcast alerts', 'Instant, scheduled & recurring options'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✓</div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[450px] md:h-[550px]">
            <WizardMockup />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-firefly/20 blur-[50px] -z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Scheduling & Recurring */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mb-6">
              <Calendar className="text-[#F59E0B]" size={24} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Scheduling & Recurring Automations</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Publish at the right moment. Schedule signals for later or automate repeat signals with daily, weekly, monthly, or yearly series using end-by-count or end-by-date limits.
            </p>
            <ul className="space-y-4">
              {['Month grid + work-week view calendars', 'Edit series or per-occurrence actions', 'Occurrence preview before publishing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] text-sm">✓</div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
             <CalendarMockup />
          </div>
        </div>
        
        {/* Analytics */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Activity className="text-accent" size={24} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stage B Deep Analytics</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Dive deep into response data natively on your desktop. See donut charts, treemaps, and timeline views for distributions. Compare multiple signals visually with verdict strips.
            </p>
            <ul className="space-y-4">
              {['Per-question dot plots and funnels', 'Auto-generated insight cards', 'Excel / XLSX data export'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm">✓</div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[550px] md:h-[600px]">
            <AnalyticsMockup />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 blur-[50px] -z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Groups */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-[#34D399]/10 flex items-center justify-center mb-6">
              <Tag className="text-[#34D399]" size={24} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Groups & Labels</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Send to the right audience every time. Create named groups of consumers for one-click targeting, and use signal labels to categorize everything across your workspace.
            </p>
            <ul className="space-y-4">
              {['Card or List view for Groups', 'Full label taxonomy CRUD', 'Real-time label sync and usage counts'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#34D399]/10 flex items-center justify-center text-[#34D399] text-sm">✓</div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
            <GroupsMockup />
          </div>
        </div>

        {/* Hierarchy */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-6">
              <Network className="text-[#8B5CF6]" size={24} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Publisher Hierarchy</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Tiered organizational publishing. Assign hierarchy levels from Tier 1 up to GLOBAL for top-level publishers, mapping user domains correctly based on rules.
            </p>
            <ul className="space-y-4">
              {['Publisher Directory with locations & roles', 'Role-based access boundaries', 'Org-wide hierarchy signals board'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] text-sm">✓</div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
            <HierarchyMockup />
          </div>
        </div>

        {/* Clone & Drafts */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-primary-hover/10 flex items-center justify-center mb-6">
              <Copy className="text-primary-hover" size={24} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Clone & Drafts</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Start from a proven template. Connect faster by duplicating any published poll, alert, or form. Resume any communication smoothly using powerful auto-save drafts features.
            </p>
            <ul className="space-y-4">
              {['Clone signal, clone group, or instant variants', 'Auto-save responses to complex forms', 'Central drafts inbox'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-hover/10 flex items-center justify-center text-primary-hover text-sm">✓</div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[450px] md:h-[550px]">
            <DraftsMockup />
          </div>
        </div>

      </div>
    </section>
  );
}
