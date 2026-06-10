export function Footer() {
  return (
    <footer id="support" className="bg-background border-t border-border pt-16 pb-8">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Ribbit</span>
            </div>
            <p className="text-muted text-sm mb-6 max-w-sm">
              Signal with Nature's Clarity. A professional desktop application for structured broadcast messaging, polling, and rich response analytics.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs font-mono bg-card border border-border px-2 py-1 rounded">v0.1.29</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-primary transition-colors">Changelog</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-primary transition-colors">Report an issue</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><a href="https://arrisesolutions.com" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-primary transition-colors">Arrise Solutions</a></li>
              <li><a href="mailto:support@arrisesolutions.com" className="text-sm text-muted hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-primary transition-colors">EULA</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-muted font-medium uppercase tracking-wider">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Arrise Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>For Windows, macOS, and Linux.</span>
            <span className="hidden md:block w-1 h-1 bg-border rounded-full"></span>
            <span className="text-primary-text">System Status: All Green</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
