import { Search, Inbox, Send, Tags, Users, Network, Settings, Plus, ChevronDown, Filter, ArrowUpDown, List, LayoutGrid, Clock, Trash2, Edit2, BarChart2, Copy, Trash, XCircle } from 'lucide-react';
import { AppLogo } from './AppLogo';
import React, { useState, useRef, useEffect } from 'react';

function MockupContent() {
  return (
    <div className="w-[800px] h-[500px] text-left select-none text-sm relative flex flex-col bg-background font-sans">
      {/* Container to hold sidebar and main content side by side */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[64px] bg-card flex flex-col border-r border-border shrink-0 py-4 items-center">
           <AppLogo className="w-8 h-8 mb-8 text-primary" />
          
          <div className="flex flex-col gap-4 w-full px-2 flex-1">
            <div className="flex justify-center items-center w-full aspect-square text-muted hover:text-primary hover:bg-hover rounded-[10px] font-medium relative transition-colors duration-200">
               <Inbox className="w-5 h-5" />
               <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-card"></div>
            </div>
            <div className="flex justify-center items-center w-full aspect-square bg-primary/10 text-primary rounded-[10px] font-medium relative shadow-sm">
               <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md"></div>
               <Send className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-full aspect-square text-muted hover:text-primary hover:bg-hover rounded-[10px] font-medium transition-colors duration-200">
               <Tags className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-full aspect-square text-muted hover:text-primary hover:bg-hover rounded-[10px] font-medium transition-colors duration-200">
               <Users className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-full aspect-square text-muted hover:text-primary hover:bg-hover rounded-[10px] font-medium transition-colors duration-200">
               <Network className="w-5 h-5" />
            </div>
          </div>
          
          <div className="mt-auto flex justify-center items-center w-full px-2">
             <div className="flex justify-center items-center w-full aspect-square text-muted hover:text-primary hover:bg-hover rounded-[10px] transition-colors duration-200">
               <Settings className="w-5 h-5" />
             </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-background p-8 flex flex-col relative overflow-hidden min-w-0">
           {/* Header */}
           <div className="flex justify-between items-start mb-6 pr-8">
             <div>
               <h1 className="text-3xl font-bold text-foreground mb-1 tracking-tight">Sent</h1>
               <p className="text-muted text-sm border-b-0 font-mono">4 active, 0 scheduled</p>
             </div>
             <div className="flex items-center gap-2 z-10 hidden sm:flex">
               <button className="flex items-center justify-between gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-[10px] font-medium shadow-sm transition-all duration-200">
                 <span className="flex items-center gap-1.5"><Plus className="w-4 h-4" /> Create Signal</span>
                 <ChevronDown className="w-4 h-4 opacity-70" />
               </button>
             </div>
           </div>

           {/* Stats */}
           <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
              <div className="p-4 bg-card border border-border rounded-[16px] flex flex-col items-center justify-center shadow-[var(--shadow-card)]">
                <span className="text-2xl font-bold text-primary">7</span>
                <span className="text-xs text-muted font-mono mt-1">All</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-[16px] flex flex-col items-center justify-center shadow-[var(--shadow-card)] hidden sm:flex">
                <span className="text-2xl font-bold text-primary">4</span>
                <span className="text-xs text-muted font-mono mt-1">Active</span>
              </div>
               <div className="p-4 bg-card border border-border rounded-[16px] flex flex-col items-center justify-center shadow-[var(--shadow-card)] hidden sm:flex opacity-60">
                <span className="text-2xl font-bold text-muted">0</span>
                <span className="text-xs text-muted font-mono mt-1">Scheduled</span>
              </div>
               <div className="p-4 bg-card border border-border rounded-[16px] flex flex-col items-center justify-center shadow-[var(--shadow-card)]">
                <span className="text-2xl font-bold text-accent">4</span>
                <span className="text-xs text-accent font-mono mt-1">Recurring</span>
              </div>
               <div className="p-4 bg-card border border-border rounded-[16px] flex flex-col items-center justify-center shadow-[var(--shadow-card)] opacity-60">
                <span className="text-2xl font-bold text-muted">0</span>
                <span className="text-xs text-muted font-mono mt-1">Draft</span>
              </div>
           </div>

           {/* Filters */}
           <div className="flex items-center gap-3 mb-6">
             <div className="flex-1 relative">
              <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" className="w-full pl-9 pr-8 py-2.5 bg-card border border-border text-foreground rounded-[10px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" placeholder="Search your signals..." readOnly />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded bg-muted/10 flex items-center justify-center text-[10px] text-muted font-mono hidden sm:flex">/</div>
             </div>
             <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border shadow-sm hover:bg-hover rounded-[10px] text-foreground font-medium whitespace-nowrap transition-colors"><Filter className="w-4 h-4 text-muted" /> Filters</button>
             <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border shadow-sm hover:bg-hover rounded-[10px] text-foreground font-medium whitespace-nowrap hidden sm:flex transition-colors"><ArrowUpDown className="w-4 h-4 text-muted" /> Newest First</button>
             <div className="flex bg-card border border-border shadow-sm rounded-[10px] p-1 hidden sm:flex">
              <button className="p-1.5 rounded-[6px] bg-muted/10 text-foreground transition-colors"><List className="w-4 h-4" /></button>
              <button className="p-1.5 rounded-[6px] text-muted hover:text-foreground hover:bg-muted/5 transition-colors"><LayoutGrid className="w-4 h-4" /></button>
             </div>
           </div>

           {/* Items List */}
           <div className="flex flex-col gap-4 min-h-0 flex-1 overflow-hidden" 
                style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
             {/* Item 1 */}
             <div className="p-5 bg-card border border-border rounded-[16px] flex items-center justify-between shadow-[var(--shadow-card)] hover:border-primary/30 transition-colors group">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary shrink-0 relative">
                   <div className="w-5 h-5 border-2 border-primary rounded-[6px] border-dashed flex items-center justify-center text-[10px] font-bold">✓</div>
                 </div>
                 <div>
                   <h3 className="font-semibold text-base mb-1.5 text-foreground flex items-center gap-2">
                     What is your preference for topic 2?
                   </h3>
                   <div className="flex items-center gap-2 text-xs text-muted">
                     <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Amandeep Singh</span>
                   </div>
                   <div className="flex items-center gap-2 mt-2.5">
                     <span className="px-2 py-0.5 rounded-[4px] bg-[rgba(52,78,65,0.05)] text-muted font-mono text-[10px] tracking-wide border border-border">label-31</span>
                     <span className="px-2 py-0.5 rounded-[4px] bg-[rgba(52,78,65,0.05)] text-muted font-mono text-[10px] tracking-wide border border-border">label-15</span>
                     <span className="px-2 py-0.5 rounded-[4px] bg-[rgba(52,78,65,0.05)] text-muted font-mono text-[10px] tracking-wide border border-border">label-16</span>
                   </div>
                 </div>
               </div>
               <div className="flex flex-col items-end gap-4 shrink-0">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                     <span className="text-accent bg-accent/10 px-2.5 py-1 rounded-[6px] font-medium flex items-center gap-1.5 border border-accent/20"><Clock className="w-3 h-3" /> Ends 16h 19m</span>
                   </div>
                 <div className="flex items-center gap-4">
                   <button className="text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash className="w-4 h-4" /></button>
                   <button className="text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><Edit2 className="w-4 h-4" /></button>
                   <button className="text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><BarChart2 className="w-4 h-4" /></button>
                   <button className="text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><Copy className="w-4 h-4" /></button>
                   <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-[10px] font-medium text-xs shadow-sm flex items-center gap-2 transition-colors">
                     <Send className="w-3 h-3" /> Fill Response
                   </button>
                 </div>
               </div>
             </div>
             
             {/* Item 2 */}
             <div className="p-5 bg-card border border-border rounded-[16px] flex items-center justify-between shadow-[var(--shadow-card)] hover:border-primary/30 transition-colors group">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary shrink-0 relative">
                   <div className="w-5 h-5 border-2 border-primary rounded-[6px] border-dashed flex items-center justify-center text-[10px] font-bold">✓</div>
                 </div>
                 <div>
                   <h3 className="font-semibold text-base mb-1.5 text-foreground flex items-center gap-2">
                     Weekly standup: are you attending?
                   </h3>
                   <div className="flex items-center gap-2 text-xs text-muted">
                     <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Dummy Publisher</span>
                   </div>
                   <div className="flex items-center gap-2 mt-2.5">
                     <span className="px-2 py-0.5 rounded-[4px] bg-[rgba(52,78,65,0.05)] text-muted font-mono text-[10px] tracking-wide border border-border">eng-team</span>
                   </div>
                 </div>
               </div>
               <div className="flex flex-col items-end gap-4 shrink-0">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                     <span className="text-primary bg-primary/10 px-2.5 py-1 rounded-[6px] font-medium flex items-center gap-1.5 border border-primary/20"><Clock className="w-3 h-3" /> Ends 6h 0m</span>
                   </div>
                 <div className="flex items-center gap-4">
                   <button className="text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash className="w-4 h-4" /></button>
                   <button className="text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><Edit2 className="w-4 h-4" /></button>
                   <button className="text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><BarChart2 className="w-4 h-4" /></button>
                   <button className="px-4 py-2 bg-card border border-border hover:bg-hover text-foreground rounded-[10px] font-medium text-xs shadow-sm flex items-center gap-2 transition-colors">
                     <Send className="w-3 h-3" /> Fill Response
                   </button>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export function HeroMockup() {
  const [position, setPosition] = useState(55);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newPos = (x / rect.width) * 100;
    setPosition(newPos);
    
    // Update global theme based on slider position
    if (newPos > 50) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full max-w-[800px] md:w-[800px] mx-auto h-[500px] rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] overflow-hidden shrink-0 bg-background select-none`}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ touchAction: 'none' }}
    >
      
      {/* Background (Dark Mode) */}
      <div className="absolute inset-0 dark bg-background text-foreground flex w-[800px]">
        <MockupContent />
      </div>

      {/* Foreground (Light Mode) */}
      <div 
        className={`absolute inset-y-0 left-0 overflow-visible z-10 light ${isDragging ? '' : 'transition-all duration-300 pointer-events-none'}`}
        style={{ width: `${position}%` }}
      >
        <div className="w-full h-full overflow-hidden border-r border-border shadow-[12px_0_32px_-12px_rgba(0,0,0,0.3)] bg-background pointer-events-auto">
          <div className="w-[800px] h-[500px] shrink-0 bg-background text-foreground">
            <MockupContent />
          </div>
        </div>
        
        {/* Slider Handle Hint */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-8 translate-x-1/2 cursor-ew-resize flex items-center justify-center z-20 pointer-events-auto"
          onPointerDown={handlePointerDown}
        >
          <div className="w-7 h-14 bg-card border border-border shadow-lg rounded-full flex items-center justify-center gap-1 hover:scale-105 transition-transform">
             <div className="w-0.5 h-3 bg-muted/50 rounded-full pointer-events-none"></div>
             <div className="w-0.5 h-3 bg-muted/50 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
