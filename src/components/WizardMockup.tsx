import { Search, Inbox, Send, Tags, Users, Network, Settings, X, Star, Hash, Heart, Shield, ThumbsUp, MoreVertical, Copy, BarChart2, Send as SendIcon } from 'lucide-react';
import { AppLogo } from './AppLogo';

export function WizardMockup() {
  return (
    <div className="w-full h-full rounded-[24px] bg-background border border-border overflow-hidden flex text-left select-none text-xs relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      {/* --- BACKGROUND INBOX --- */}
      {/* Sidebar */}
      <div className="w-[180px] bg-[#F3F4F6] dark:bg-[#111827] flex flex-col border-r border-border">
        <div className="p-4 flex items-center gap-2 font-bold text-base mb-4 text-foreground">
          <AppLogo className="w-6 h-6 shrink-0" />
          Ribbit
        </div>
        <div className="px-3 mb-2 text-[9px] font-bold text-muted uppercase tracking-wider">Navigation</div>
        <div className="flex flex-col gap-1 px-2 flex-1">
          <div className="flex items-center justify-between px-3 py-2 bg-black/5 dark:bg-white/10 rounded-md font-medium text-foreground">
            <div className="flex items-center gap-2"><Inbox className="w-4 h-4" /> Inbox</div>
            <span className="text-[10px] bg-black/10 dark:bg-white/20 px-1.5 rounded-full">2</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 text-muted hover:text-foreground hover:bg-black/5 rounded-md font-medium">
            <div className="flex items-center gap-2"><Send className="w-4 h-4" /> Sent</div>
            <span className="text-[10px] text-emerald-500">1</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-muted hover:text-foreground hover:bg-black/5 rounded-md font-medium">
            <Tags className="w-4 h-4" /> Labels
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-muted hover:text-foreground hover:bg-black/5 rounded-md font-medium">
            <Users className="w-4 h-4" /> Groups
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-muted hover:text-foreground hover:bg-black/5 rounded-md font-medium">
            <Network className="w-4 h-4" /> Hierarchy
          </div>
        </div>
        <div className="p-4 mt-auto">
          <div className="flex items-center gap-2 text-muted hover:text-foreground font-medium">
            <Settings className="w-4 h-4" /> Settings
          </div>
        </div>
      </div>

      {/* Inbox Content */}
      <div className="flex-1 bg-[#F9FAFB] dark:bg-[#030712] p-6 flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Inbox</h1>
          <p className="text-muted text-sm">2 signals waiting</p>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-emerald-50 border-emerald-200 border rounded-xl flex flex-col items-center justify-center text-emerald-800">
            <span className="text-2xl font-bold">2</span>
            <span className="text-[10px]">All</span>
          </div>
          <div className="p-4 bg-white border-border border rounded-xl flex flex-col items-center justify-center text-foreground">
            <span className="text-2xl font-bold text-emerald-700">2</span>
            <span className="text-[10px] text-muted">Incomplete</span>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input type="text" className="w-full pl-9 py-2 bg-white border border-border rounded-lg" placeholder="Search signals..." />
        </div>

        <div className="flex flex-col gap-3">
          <div className="p-4 bg-white border border-border rounded-xl flex items-start gap-3">
             <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
               <div className="w-5 h-5 border-2 border-emerald-500 rounded flex items-center justify-center">✓</div>
             </div>
             <div className="flex-1">
               <div className="font-bold text-base mb-1">What is your preference for topic 2?</div>
               <div className="flex items-center gap-2 text-muted mb-3">
                  <div className="w-4 h-4 rounded-full bg-gray-200"></div> Amandeep Singh
               </div>
               <div className="flex gap-1">
                 <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px]">label-31</span>
                 <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px]">label-15</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- BACKDROP OVERLAY --- */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 transition-all"></div>

      {/* --- OVERLAY WIZARD --- */}
      <div className="absolute top-0 bottom-0 right-0 left-[15%] xl:left-[25%] bg-background shadow-[-20px_0_40px_rgba(0,0,0,0.15)] border-l border-border flex flex-col z-20 rounded-l-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-sm md:text-base font-bold text-foreground">Create Form</h2>
          <button className="text-muted hover:text-foreground"><X className="w-4 h-4" /></button>
        </div>

        {/* Stepper */}
        <div className="flex items-center px-6 py-4 overflow-x-hidden border-b border-border text-[9px] md:text-[10px] font-medium text-muted bg-[#F8FAFC] dark:bg-card whitespace-nowrap">
          <div className="flex items-center text-emerald-700 dark:text-emerald-500">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-1.5 font-bold">1</div>
            Basic info
          </div>
          <div className="w-4 md:w-8 h-px bg-emerald-600 mx-2"></div>
          <div className="flex items-center text-emerald-700 dark:text-emerald-500 font-bold">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-1.5 font-bold">2</div>
            Sections & questions
          </div>
          <div className="w-4 md:w-8 h-px bg-border mx-2"></div>
          <div className="flex items-center">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-muted flex items-center justify-center mr-1.5">3</div>
            Recipients
          </div>
          <div className="w-4 md:w-8 h-px bg-border mx-2"></div>
          <div className="flex items-center">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-muted flex items-center justify-center mr-1.5">4</div>
            Timing
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-hidden p-6 bg-white dark:bg-background relative">
           
           {/* Form Area */}
           <div className="max-w-2xl mx-auto border-2 border-emerald-600/30 dark:border-emerald-500/30 rounded-xl p-4 md:p-6 bg-[#F4FBF7] dark:bg-emerald-900/5 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-2 text-muted hidden md:flex">
                <MoreVertical className="w-4 h-4" />
              </div>

              {/* Question Input */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <input type="text" className="w-full p-3 rounded-lg border-2 border-emerald-600/30 dark:border-emerald-500/30 bg-white dark:bg-card text-sm md:text-base font-medium focus:outline-none" value="How well the event was in terms of management?" readOnly />
                  <div className="absolute bottom-1 right-2 text-[9px] text-muted">46/1000</div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-xs font-medium text-foreground">Required</span>
                  <div className="w-8 h-4 rounded-full bg-emerald-600 flex items-center justify-end p-0.5">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>

              {/* Settings Block */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 font-bold text-[11px] mb-3 text-foreground">
                  <Star className="w-3.5 h-3.5 text-orange-400" /> Rating settings
                </div>
                
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="text-[10px] text-muted">Symbol</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border-2 border-orange-400 text-orange-500 bg-orange-50 font-medium">
                      <Star className="w-3.5 h-3.5 fill-current" /> Star
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-white dark:bg-card text-muted hover:bg-muted/10">
                      <Hash className="w-3.5 h-3.5" /> Number
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-white dark:bg-card text-muted hover:bg-muted/10">
                      <Heart className="w-3.5 h-3.5" /> Heart
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-white dark:bg-card text-muted hover:bg-muted/10 hidden sm:flex">
                      <Shield className="w-3.5 h-3.5" /> Badge
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] text-muted mb-2 flex items-center gap-2">
                    Scale labels <span className="px-1.5 py-0.5 bg-muted/20 rounded text-[9px]">Optional</span>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="text-[10px] text-muted mb-1">1 = Low</div>
                      <input type="text" className="w-full p-2 rounded-md border border-border bg-white dark:bg-card" value="Poor" readOnly />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] text-muted mb-1">5 = High</div>
                      <input type="text" className="w-full p-2 rounded-md border border-border bg-white dark:bg-card" value="Excellent" readOnly />
                    </div>
                  </div>
                </div>

                <div>
                   <div className="flex items-center gap-2 mb-3">
                     <div className="w-5 h-5 rounded bg-muted/20 flex items-center justify-center">
                       <BarChart2 className="w-3 h-3 text-muted" />
                     </div>
                     <span className="font-bold text-[11px] text-foreground">Default response</span>
                     <span className="px-1.5 py-0.5 bg-muted/20 rounded text-[9px] text-muted">Required</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <Star className="w-6 h-6 text-orange-400 fill-current" />
                     <Star className="w-6 h-6 text-orange-400 fill-current" />
                     <Star className="w-6 h-6 text-orange-400 fill-current" />
                     <Star className="w-6 h-6 text-muted/30" />
                     <Star className="w-6 h-6 text-muted/30" />
                     <span className="ml-2 text-muted text-xs">3 / 5</span>
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-[#F8FAFC] dark:bg-background flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-muted font-medium hover:text-foreground">{'<'} Back</button>
            <button className="px-4 py-2 border border-border bg-white dark:bg-card rounded-md font-medium text-foreground hover:bg-muted/10 flex items-center gap-2">
              <SaveIcon className="w-3 h-3" /> Save as Draft
            </button>
          </div>
          <div className="text-muted hidden sm:block">Step 2 of 7</div>
          <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium flex items-center gap-2">
            Next {'>'}
          </button>
        </div>

      </div>
    </div>
  );
}

const SaveIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);
