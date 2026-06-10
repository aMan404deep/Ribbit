import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppLogo } from './AppLogo';

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark') || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={'fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm transition-all'}>
      <div className="w-full px-6 lg:px-10 py-4 lg:py-6 flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3">
          <AppLogo className="w-10 h-10 drop-shadow-sm" />
          <span className="text-2xl font-bold tracking-tight text-foreground hidden sm:block">Ribbit</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-muted">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#changelog" className="hover:text-primary transition-colors">Changelog</a>
          <a href="#support" className="hover:text-primary transition-colors">Docs</a>
          
          <button onClick={toggleDark} className="p-2 rounded-full hover:bg-card transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="#download" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-[10px] font-semibold hover:bg-primary-hover shadow-sm transition-all">
            Download Free
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
           <button onClick={toggleDark} className="p-2 rounded-full hover:bg-card transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden bg-card border-b border-border p-4 shadow-lg absolute w-full"
        >
          <div className="flex flex-col space-y-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="font-medium px-2 py-1">Features</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)} className="font-medium px-2 py-1">Download</a>
            <a href="#support" onClick={() => setMobileMenuOpen(false)} className="font-medium px-2 py-1">Support</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-primary-foreground text-center px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
              <Download size={18} />
              Download App
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
