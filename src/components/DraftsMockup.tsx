import { Search, Inbox, Send, Tags, Users, Network, Settings, Plus, ChevronDown, Check, X, Filter, ArrowUpDown, List, LayoutGrid, Clock, Trash2, Copy } from 'lucide-react';
import { AppLogo } from './AppLogo';

export function DraftsMockup() {
  return (
    <div className="w-full h-full rounded-[24px] bg-background border border-border overflow-hidden flex flex-col text-left select-none text-xs relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      {/* Container to hold sidebar and main content side by side */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[180px] bg-[#F3F4F6] dark:bg-[#111827] flex flex-col border-r border-border shrink-0">
          <div className="p-4 flex items-center gap-2 font-bold text-base mb-4 text-foreground">
            <AppLogo className="w-6 h-6 shrink-0" />
            Ribbit
          </div>
          <div className="px-3 mb-2 text-[9px] font-bold text-muted uppercase tracking-wider">Navigation</div>
          <div className="flex flex-col gap-1 px-2 flex-1">
            <div className="flex items-center gap-2 px-3 py-2 text-muted hover:text-foreground hover:bg-black/5 rounded-md font-medium">
              <Inbox className="w-4 h-4" /> Inbox
            </div>
            <div className="flex items-center justify-between px-3 py-2 bg-black/5 dark:bg-white/10 rounded-md font-medium text-foreground">
              <div className="flex items-center gap-2"><Send className="w-4 h-4" /> Sent</div>
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

        {/* Main Content */}
        <div className="flex-1 bg-[#F9FAFB] dark:bg-[#030712] p-6 flex flex-col relative overflow-hidden min-w-0">
           {/* Toast Notification */}
           <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 rounded-xl shadow-lg z-20">
             <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
               <Check className="w-3.5 h-3.5" />
             </div>
             <span className="font-bold text-sm">Draft saved!</span>
             <button className="ml-4 text-emerald-600/50 hover:text-emerald-800"><X className="w-4 h-4" /></button>
           </div>

           {/* Header */}
           <div className="flex justify-between items-start mb-6">
             <div>
               <h1 className="text-2xl font-bold text-foreground mb-1">Sent</h1>
               <p className="text-muted text-sm">0 active, 0 scheduled</p>
             </div>
             <div className="flex items-center gap-2 mt-4 absolute right-6 top-14 z-10 hidden sm:flex">
               <button className="flex items-center justify-between gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-sm">
                 <span className="flex items-center gap-1.5"><Plus className="w-4 h-4" /> Create Signal</span>
                 <ChevronDown className="w-4 h-4 opacity-70" />
               </button>
             </div>
           </div>

           {/* Stats */}
           <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
              <div className="p-4 bg-white dark:bg-card border border-border rounded-xl flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">2</span>
                <span className="text-[10px] text-muted">All</span>
              </div>
              <div className="p-4 bg-white dark:bg-card border border-border rounded-xl flex flex-col items-center justify-center hidden sm:flex">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">0</span>
                <span className="text-[10px] text-muted">Active</span>
              </div>
               <div className="p-4 bg-white dark:bg-card border border-border rounded-xl flex flex-col items-center justify-center hidden sm:flex">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">0</span>
                <span className="text-[10px] text-muted">Scheduled</span>
              </div>
               <div className="p-4 bg-white dark:bg-card border border-border rounded-xl flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">0</span>
                <span className="text-[10px] text-purple-600 dark:text-purple-400">Recurring</span>
              </div>
               <div className="p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800 rounded-xl flex flex-col items-center justify-center shadow-sm shadow-rose-100 dark:shadow-none bg-white">
                <span className="text-2xl font-bold text-rose-600 dark:text-rose-400">2</span>
                <span className="text-[10px] text-rose-600 dark:text-rose-400">Draft</span>
              </div>
           </div>

           {/* Filters */}
           <div className="flex items-center gap-3 mb-4">
             <div className="flex-1 relative">
              <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" className="w-full pl-9 pr-8 py-2 bg-white dark:bg-card border border-border rounded-lg" placeholder="Search drafts..." readOnly />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded bg-muted/20 flex items-center justify-center text-[10px] text-muted font-mono hidden sm:flex">/</div>
             </div>
             <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-card border border-border rounded-lg text-foreground font-medium whitespace-nowrap"><Filter className="w-4 h-4 text-muted" /> Filters</button>
             <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-card border border-border rounded-lg text-foreground font-medium whitespace-nowrap hidden sm:flex"><ArrowUpDown className="w-4 h-4 text-muted" /> Newest First</button>
             <div className="flex bg-white dark:bg-card border border-border rounded-lg p-0.5 hidden sm:flex">
              <button className="p-1.5 rounded shadow-sm bg-gray-100 dark:bg-muted/20 text-foreground"><List className="w-3.5 h-3.5" /></button>
              <button className="p-1.5 rounded text-muted hover:text-foreground"><LayoutGrid className="w-3.5 h-3.5" /></button>
             </div>
           </div>

           {/* Draft Items List */}
           <div className="flex flex-col gap-3">
             {/* Draft Item 1 */}
             <div className="p-4 bg-white dark:bg-card border border-border rounded-xl flex items-center justify-between shadow-sm hover:border-emerald-500/50 transition-colors">
               <div className="flex items-center gap-4 border-l-[3px] border-emerald-400 pl-3">
                 <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                   <div className="w-5 h-5 border-2 border-current rounded flex items-center justify-center text-[10px] font-bold">✓</div>
                 </div>
                 <div>
                   <h3 className="font-bold text-sm mb-1 text-foreground">What is your preference for topic 2?</h3>
                   <div className="flex items-center gap-2 text-[10px]">
                     <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1"><span className="opacity-50">CREATE</span> <Clock className="w-3 h-3" /> just now</span>
                     <span className="text-muted">Jun 10, 04:33 PM</span>
                   </div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs shadow-sm hover:bg-emerald-700 hidden sm:block transition-colors">Resume</button>
                 <button className="p-2 text-muted hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
               </div>
             </div>
             
             {/* Draft Item 2 */}
             <div className="p-4 bg-white dark:bg-card border border-border rounded-xl flex items-center justify-between shadow-sm hover:border-emerald-500/50 transition-colors">
               <div className="flex items-center gap-4 border-l-[3px] border-amber-400 pl-3">
                 <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-700 dark:text-amber-400 shrink-0">
                   <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">!</div>
                 </div>
                 <div>
                   <h3 className="font-bold text-sm mb-1 text-foreground">Weekly Team Pulse Check</h3>
                   <div className="flex items-center gap-2 text-[10px]">
                     <span className="px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 font-medium flex items-center gap-1"><span className="opacity-50">UPDATE</span> <Clock className="w-3 h-3" /> 2h ago</span>
                     <span className="text-muted">Jun 10, 02:15 PM</span>
                   </div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs shadow-sm hover:bg-emerald-700 hidden sm:block transition-colors">Resume</button>
                 <button className="p-2 text-muted hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* --- CLONE MODAL OVERLAY --- */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-30 flex items-center justify-center">
         <div className="w-[360px] sm:w-[400px] bg-white dark:bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative">
            <div className="p-5 border-b border-border flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                 <Copy className="w-5 h-5" />
               </div>
               <h2 className="text-xl font-bold text-foreground">Clone Signal</h2>
            </div>
            <div className="p-6">
              <div className="mb-2 text-[10px] font-bold text-muted uppercase tracking-wider">SIGNAL ID</div>
              <input type="text" className="w-full text-base p-3 px-4 rounded-xl border-2 border-emerald-500/50 focus:outline-none focus:border-emerald-600 bg-emerald-50/30 dark:bg-emerald-900/10 text-foreground transition-colors" placeholder="Enter signal ID" readOnly />
            </div>
            <div className="p-6 pt-0 flex gap-3">
              <button className="flex-1 py-3 px-4 rounded-xl border border-border text-foreground font-bold hover:bg-gray-50 dark:hover:bg-muted/10 transition-colors">Cancel</button>
              <button className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-colors">Clone</button>
            </div>
         </div>
      </div>
    </div>
  );
}
