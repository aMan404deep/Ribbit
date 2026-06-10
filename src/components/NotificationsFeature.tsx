import { Zap, BellRing, Layers, ShieldAlert, Sliders } from 'lucide-react';

export function NotificationsFeature() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never miss a signal — wherever you are</h2>
          <p className="text-lg text-muted">
            Ribbit reaches you with native desktop notifications, in-app alerts, and lightweight instant popups you can act on without ever opening the full app.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {/* Instant popups */}
          <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-[24px] bg-background border border-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-firefly/10 flex-shrink-0 flex items-center justify-center">
              <Zap className="text-primary-text" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Instant popups (act-in-place)</h3>
              <p className="text-muted leading-relaxed mb-4">
                When a publisher sends an instant signal, get a focused popup window to respond directly — no need to switch into the main app.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-text"></div> Instant Polls: Vote in one click</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-text"></div> Instant Alerts: Acknowledge instantly</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-text"></div> Instant Forms: Reply inline</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Native OS Notifications */}
            <div className="p-8 rounded-[24px] bg-background border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <BellRing className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Native OS notifications</h3>
              <p className="text-muted leading-relaxed">
                macOS, Windows, and Linux integration. Ribbit routes alerts to your OS history (Notification/Action Center) so you never get duplicate banners. Deep-links jump you right into the signal.
              </p>
            </div>

            {/* Global alert manager */}
            <div className="p-8 rounded-[24px] bg-background border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-6">
                <Layers className="text-[#3B82F6]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Global alert manager</h3>
              <p className="text-muted leading-relaxed">
                Centralized in-app surface for new polls, alerts, and forms using lightweight toasts and signal detail modals. Smart de-duplication ensures you're never pinged twice.
              </p>
            </div>

            {/* Persistent alerts */}
            <div className="p-8 rounded-[24px] bg-background border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center mb-6">
                <ShieldAlert className="text-[#EF4444]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Persistent alerts</h3>
              <p className="text-muted leading-relaxed">
                Desktop-grade urgency. OS-level kiosk/lockdown mode for critical alerts or final poll deadlines. The alert takes over your screen until you respond or skip with a reason.
              </p>
            </div>

            {/* Controls */}
            <div className="p-8 rounded-[24px] bg-background border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-muted/10 flex items-center justify-center mb-6">
                <Sliders className="text-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Notification controls</h3>
              <p className="text-muted leading-relaxed">
                You are always in control. Easily toggle global desktop notifications or sound alerts on and off from your Settings panel, fully synced with auto-update prompts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
