import { ArrowRight, Download, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HeroMockup } from './HeroMockup';

export function Hero() {
  const [os, setOs] = useState<'win' | 'mac' | 'linux' | 'unknown'>('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('win') > -1) setOs('win');
    else if (userAgent.indexOf('mac') > -1) setOs('mac');
    else if (userAgent.indexOf('linux') > -1) setOs('linux');
  }, []);

  const getDownloadText = () => {
    if (os === 'win') return 'Download for Windows';
    if (os === 'mac') return 'Download for macOS';
    if (os === 'linux') return 'Download for Linux';
    return 'Download Ribbit';
  };

  return (
    <section className="relative pt-32 pb-12 overflow-hidden flex-1 flex">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10 lg:py-12 flex flex-col lg:flex-row gap-12 items-center relative z-10 w-full">
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left"
          >
            <span className="inline-flex items-center px-3 py-1 bg-firefly/30 border border-primary/20 rounded-full text-primary-text text-xs font-bold uppercase tracking-wider mb-6">
              New: Stage B Analytics
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter mb-6 bg-gradient-to-r from-primary to-firefly bg-clip-text text-transparent hover:brightness-125 transition-all duration-300 animate-breathe">
              Never miss a <br />
              <span>Critical Signal</span>
            </h1>
            <p className="text-lg text-muted max-w-md leading-relaxed mb-6">
              The professional desktop powerhouse for structured communications. Built for speed, privacy, and deep response intelligence.
            </p>
            
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="#download" className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-[16px] font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
                  <Download size={24} />
                  {getDownloadText()}
                </a>
                <div className="flex flex-col text-[10px] font-mono text-muted justify-center h-full pt-1">
                  <span>v0.1.38 · Stable</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-muted">
                <a href="#download" className="underline hover:text-foreground">macOS (Universal)</a>
                <a href="#download" className="underline hover:text-foreground">Linux (AppImage and deb)</a>
                <a href="#download" className="underline hover:text-foreground">Other platforms</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Mockup */}
        <div className="w-full lg:w-1/2 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px]"
          >
            <HeroMockup />
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
