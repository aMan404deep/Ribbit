const fs = require('fs');

const fileContents = fs.readFileSync('src/components/JourneyTimeline.tsx', 'utf8');

const newComponent = `
const DetailsPanel = ({ selectedEntry, onClose }: { selectedEntry: typeof flattenedEntries[0] | null, onClose: () => void }) => {
  if (!selectedEntry) {
    return (
      <div className="hidden lg:flex w-full h-[600px] rounded-[2rem] border border-dashed border-border flex-col items-center justify-center text-muted">
         <Compass className="w-16 h-16 opacity-20 mb-4" />
         <p className="text-lg font-medium opacity-50">Select a checkpoint to view its story</p>
      </div>
    );
  }

  const theme = getThemeForType(selectedEntry.type);

  return (
    <motion.div
      key={selectedEntry.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-2xl lg:rounded-[2rem] bg-card border border-border shadow-2xl overflow-hidden flex flex-col max-h-[85vh] lg:max-h-[calc(100vh-160px)]"
    >
       <div className={\`p-6 md:p-8 \${theme.wrapper} border-b shrink-0 relative\`}>
          <button onClick={onClose} className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors absolute top-4 right-4 z-20 focus:outline-none lg:hidden">
             <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 mb-4 mt-2 lg:mt-0">
            <span className="font-mono text-xs font-bold tracking-widest uppercase opacity-80">{selectedEntry.period}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground pr-8 leading-tight">{selectedEntry.title}</h3>
          <div className="flex items-center gap-2 text-sm font-semibold opacity-75 uppercase tracking-widest mt-4">
            <Target className="w-4 h-4" />
            {selectedEntry.month}
          </div>
       </div>
       
       <div className="p-6 md:p-8 space-y-6 overflow-y-auto relax-scroll">
          <p className="text-lg leading-relaxed text-foreground/90">
             {selectedEntry.content}
          </p>
          
          {selectedEntry.details && (
            <div className="space-y-4 pt-6 border-t border-border">
              <h4 className="font-bold text-sm tracking-widest text-muted uppercase">Key Moments</h4>
              {selectedEntry.details.map((d, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                   <div className={\`w-8 h-8 rounded-full \${theme.wrapper} flex items-center justify-center shrink-0\`}>
                      <span className="text-xs font-mono font-bold">{i+1}</span>
                   </div>
                   <span className="text-base leading-relaxed text-foreground/80">{d}</span>
                </div>
              ))}
            </div>
          )}
          
          {selectedEntry.docLink && (
            <div className="pt-6">
              <a
                href={selectedEntry.docLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-sm w-full justify-center sm:w-auto hover:shadow-md"
              >
                <ExternalLink className="w-5 h-5" />
                {selectedEntry.docLink.label}
              </a>
            </div>
          )}
       </div>
    </motion.div>
  );
};

export function JourneyTimeline() {
  const [selectedEntry, setSelectedEntry] = useState<typeof flattenedEntries[0] | null>(null);

  // Prevent scrolling when modal is open on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (selectedEntry && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedEntry]);

  return (
    <section id="journey" className="py-24 bg-background border-y border-border relative overflow-hidden">
      {/* Background Decor */}
      <MapGridPattern />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left Column: Map */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="text-center lg:text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Quest Map</h2>
            <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              From a conceptual wireframe to a production-ready application. Click on any checkpoint to view our struggles, planning, and achievements throughout the journey.
            </p>
          </div>

          <div className="relative py-4">
            {/* Start Point */}
            <div className="flex flex-col items-center justify-center mb-4">
               <div className="w-20 h-20 bg-card rounded-full border-4 border-border flex items-center justify-center shadow-lg relative z-20">
                 <Flag className="w-8 h-8 text-primary" />
               </div>
               <p className="mt-4 font-mono font-bold tracking-widest text-primary uppercase">The Beginning</p>
               <p className="text-sm text-muted">Jan 2026</p>
            </div>

            {/* Nodes */}
            <div className="relative isolate pt-4 pb-4">
               {flattenedEntries.map((entry, index) => (
                 <MapNode 
                   key={index} 
                   entry={entry} 
                   total={flattenedEntries.length} 
                   onClick={() => setSelectedEntry(entry)} 
                 />
               ))}
            </div>

            {/* End Point */}
            <div className="flex flex-col items-center justify-center mt-4">
               <div className="w-24 h-24 bg-primary rounded-full border-4 border-primary/20 flex items-center justify-center shadow-primary/50 shadow-2xl relative z-20">
                 <Rocket className="w-10 h-10 text-primary-foreground" />
               </div>
               <p className="mt-6 font-mono font-bold tracking-widest text-primary text-xl uppercase">v1.0 Ready</p>
               <p className="text-sm text-muted">June 2026</p>
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className={\`
          lg:w-1/2 lg:sticky lg:top-32 lg:block lg:z-10
          \${selectedEntry 
             ? "fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:static" 
             : "hidden"
          }
        \`}>
           {/* Dismiss overlay on mobile */}
           {selectedEntry && (
             <div className="absolute inset-0 z-0 lg:hidden" onClick={() => setSelectedEntry(null)} />
           )}
           
           <div className="relative z-10 w-full max-w-2xl lg:max-w-none mx-auto">
              <AnimatePresence mode="wait">
                <DetailsPanel selectedEntry={selectedEntry} onClose={() => setSelectedEntry(null)} />
              </AnimatePresence>
           </div>
        </div>

      </div>
    </section>
  );
}
\`;

const startIdx = fileContents.indexOf('export function JourneyTimeline');
if (startIdx !== -1) {
    const finalContent = fileContents.substring(0, startIdx) + newComponent;
    fs.writeFileSync('src/components/JourneyTimeline.tsx', finalContent);
    console.log('Replaced JourneyTimeline.');
} else {
    console.log('Could not find JourneyTimeline export.');
}
