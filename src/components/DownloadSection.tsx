import { Download, Check, Shield, FileText, Apple, Monitor, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

// USER: Replace these placeholders with your actual Google Drive share links.
// Tip: To get a direct download link from Google Drive, replace 'file/d/' with 'uc?export=download&id='
// and remove '/view?usp=sharing'
const DOWNLOAD_LINKS = {
  win: "https://github.com/aMan404deep/Ribbit-Releases/releases/download/v0.1.38/Ribbit-0.1.38-Setup.exe",
  mac: "https://github.com/aMan404deep/Ribbit-Releases/releases/download/v0.1.38/Ribbit-0.1.35.dmg",
  linuxAppImage: "https://github.com/aMan404deep/Ribbit-Releases/releases/download/v0.1.38/Ribbit-0.1.38.AppImage",
  linuxDeb: "https://github.com/aMan404deep/Ribbit-Releases/releases/download/v0.1.38/ribbit-app_0.1.38_amd64.deb",
};

export function DownloadSection() {
  const [activeTab, setActiveTab] = useState<'win' | 'mac' | 'linux'>('win');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('mac') > -1) setActiveTab('mac');
    else if (userAgent.indexOf('linux') > -1) setActiveTab('linux');
    else setActiveTab('win');
  }, []);

  const getMainDownloadLink = () => {
    switch (activeTab) {
      case 'win': return DOWNLOAD_LINKS.win;
      case 'mac': return DOWNLOAD_LINKS.mac;
      case 'linux': return DOWNLOAD_LINKS.linuxAppImage;
      default: return '#';
    }
  };

  return (
    <section id="download" className="py-24 bg-card border-t border-border">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start signaling today</h2>
          <p className="text-lg text-muted">
            Download the officially signed Ribbit desktop installers. Updates are delivered automatically.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          {/* Premium glow effect behind the box */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
          
          <div className="relative bg-background/80 backdrop-blur-2xl rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-border/50 bg-muted/20">
              <button 
                onClick={() => setActiveTab('win')}
                className={`relative flex-1 py-5 px-6 flex items-center justify-center gap-3 font-medium transition-all duration-300 ${activeTab === 'win' ? 'text-primary bg-background/50' : 'text-muted hover:text-foreground hover:bg-muted/30'}`}
              >
                <Monitor size={22} className={activeTab === 'win' ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''} /> 
                <span className="tracking-wide">Windows</span>
                {activeTab === 'win' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,255,255,0.5)]" />}
              </button>
              <button 
                onClick={() => setActiveTab('mac')}
                className={`relative flex-1 py-5 px-6 flex items-center justify-center gap-3 font-medium transition-all duration-300 ${activeTab === 'mac' ? 'text-primary bg-background/50' : 'text-muted hover:text-foreground hover:bg-muted/30'}`}
              >
                <Apple size={22} className={activeTab === 'mac' ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''} /> 
                <span className="tracking-wide">macOS</span>
                {activeTab === 'mac' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,255,255,0.5)]" />}
              </button>
              <button 
                onClick={() => setActiveTab('linux')}
                className={`relative flex-1 py-5 px-6 flex items-center justify-center gap-3 font-medium transition-all duration-300 ${activeTab === 'linux' ? 'text-primary bg-background/50' : 'text-muted hover:text-foreground hover:bg-muted/30'}`}
              >
                <Terminal size={22} className={activeTab === 'linux' ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''} /> 
                <span className="tracking-wide">Linux</span>
                {activeTab === 'linux' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,255,255,0.5)]" />}
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-14 relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-border/40">
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight flex items-center gap-4 mb-3">
                    Ribbit
                    <span className="text-sm py-1 px-3 rounded-full bg-primary/10 text-primary font-mono border border-primary/20 shadow-inner">v0.1.38</span>
                  </h3>
                  <p className="text-muted/80 flex items-center gap-2 font-medium">
                    <Shield size={18} className="text-primary/70" /> 
                    Ready to use locally on your device
                  </p>
                </div>
                <a 
                  href={getMainDownloadLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-full md:w-auto bg-foreground text-background px-8 py-5 rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 shrink-0 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download size={22} className="relative z-10" />
                  <span className="relative z-10 tracking-wide">
                    Download for {activeTab === 'win' ? 'Windows' : activeTab === 'mac' ? 'macOS' : 'Linux'}
                  </span>
                </a>
              </div>

              {/* Architecture options if any */}
              <div className="relative">
                <h4 className="text-sm uppercase tracking-widest text-muted/60 font-bold mb-4">Available Distributables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeTab === 'win' && (
                    <a href={DOWNLOAD_LINKS.win} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FileText size={20}/>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Ribbit-0.1.38-Setup.exe</div>
                        <div className="text-xs text-muted mt-0.5">Standard 64-bit Installer</div>
                      </div>
                    </a>
                  )}
                  {activeTab === 'mac' && (
                    <a href={DOWNLOAD_LINKS.mac} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all">
                       <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FileText size={20}/>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Ribbit-0.1.35.dmg</div>
                        <div className="text-xs text-muted mt-0.5">Universal Disk Image</div>
                      </div>
                    </a>
                  )}
                  {activeTab === 'linux' && (
                    <>
                      <a href={DOWNLOAD_LINKS.linuxAppImage} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          <FileText size={20}/>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Ribbit-0.1.38.AppImage</div>
                          <div className="text-xs text-muted mt-0.5">Portable AppImage</div>
                        </div>
                      </a>
                      <a href={DOWNLOAD_LINKS.linuxDeb} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          <FileText size={20}/>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">ribbit-app_0.1.38_amd64.deb</div>
                          <div className="text-xs text-muted mt-0.5">Debian/Ubuntu Package</div>
                        </div>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
