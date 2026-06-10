import { MoreHorizontal, Download, X, Eye, BarChart2, Users, Clock, Lightbulb, GitMerge, TrendingUp } from 'lucide-react';

export function AnalyticsMockup() {
  return (
    <div className="w-full h-full rounded-[24px] bg-background border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col text-left select-none text-[10px] md:text-xs">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <BarChart2 className="text-accent w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-foreground text-sm">Poll Analytics</div>
            <div className="text-muted text-[10px]">Response breakdown and distribution</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-border rounded-md text-foreground font-medium cursor-pointer hover:bg-border/80">
            <Download className="w-3 h-3" />
            <span>Export</span>
          </div>
          <div className="w-8 h-8 flex items-center justify-center hover:bg-border rounded-md cursor-pointer text-muted">
            <X className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 overflow-hidden flex flex-col bg-[#F8FAFC] dark:bg-[#0B1121]">
        {/* Question Header */}
        <div className="mb-4">
          <div className="text-[9px] font-bold text-muted uppercase tracking-wider mb-1">Question</div>
          <div className="text-sm font-bold text-foreground mb-2">What is your preference for topic 2?</div>
          <div className="flex gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium text-[9px]">label-31</span>
            <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium text-[9px]">label-15</span>
            <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium text-[9px]">label-16</span>
          </div>
        </div>

        {/* Tabs & Share */}
        <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
          <div className="flex items-center gap-4 text-muted font-medium">
            <div className="flex items-center gap-1.5 text-accent border-b-2 border-accent pb-2 -mb-[9px]">
              <BarChart2 className="w-3 h-3" /> Overview
            </div>
            <div className="flex items-center gap-1.5 pb-2 -mb-[9px]">
              <TrendingUp className="w-3 h-3" /> Distribution
            </div>
            <div className="flex items-center gap-1.5 pb-2 -mb-[9px] hidden sm:flex">
              <Users className="w-3 h-3" /> Respondents
            </div>
            <div className="flex items-center gap-1.5 pb-2 -mb-[9px]">
              <Clock className="w-3 h-3" /> Timeline
            </div>
            <div className="flex items-center gap-1.5 pb-2 -mb-[9px] hidden sm:flex">
              <Lightbulb className="w-3 h-3" /> Insights
            </div>
            <div className="flex items-center gap-1.5 pb-2 -mb-[9px]">
              <GitMerge className="w-3 h-3" /> Compare
            </div>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded-full border border-border bg-card">
             <Eye className="w-3 h-3 text-muted" />
             <span className="text-[10px] text-foreground font-medium">Share analytics</span>
             <div className="w-6 h-3 bg-accent rounded-full relative ml-1">
                <div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div>
             </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex flex-col gap-3">
          {/* Headline cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-[10px] text-accent mb-1 font-medium">
                <TrendingUp className="w-3 h-3" /> Response rate
              </div>
              <div className="text-xl font-bold text-foreground">50%</div>
            </div>
             <div className="p-3 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-1 text-[10px] text-muted mb-1 font-medium">
                <div className="w-3 h-3 rounded-full border border-current flex items-center justify-center">✓</div> Submitted
              </div>
              <div className="text-xl font-bold text-foreground">1</div>
            </div>
             <div className="p-3 rounded-lg border border-red-500/20 bg-red-500/5 dark:bg-red-500/10">
              <div className="flex items-center gap-1 text-[10px] text-red-500 mb-1 font-medium">
                <X className="w-3 h-3" /> Skipped
              </div>
              <div className="text-xl font-bold text-foreground">0</div>
            </div>
          </div>

          {/* Completion Bar */}
          <div className="mb-2 mt-1">
             <div className="text-[9px] font-bold text-muted uppercase tracking-wider mb-2">Completion</div>
             <div className="flex items-center gap-3 text-[9px] mb-1.5">
               <div className="flex items-center gap-1"><div className="w-2 h-2 bg-accent rounded-full"></div>Submitted: 1</div>
               <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-400 rounded-full"></div>Defaults: 0</div>
               <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div>Skipped: 0</div>
               <div className="flex items-center gap-1"><div className="w-2 h-2 bg-gray-400 rounded-full"></div>Pending: 1</div>
             </div>
             <div className="h-2 w-full bg-border rounded-full overflow-hidden flex">
               <div className="h-full bg-accent w-1/2 rounded-r-full"></div>
             </div>
          </div>

          {/* Distribution Block */}
          <div className="flex-1 min-h-0 border border-border bg-card rounded-lg p-3 flex flex-col mb-3">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-foreground mb-3">
              <TrendingUp className="w-3 h-3 text-muted" /> Response overview
            </div>
            <div className="flex gap-6 items-center flex-1">
               <div className="w-20 h-20 rounded-full border-[8px] border-pink-500 flex flex-col items-center justify-center shrink-0">
                  <span className="font-bold text-sm">1</span>
                  <span className="text-[8px] text-muted">Responses</span>
               </div>
               <div className="flex-1 flex flex-col gap-2 justify-center">
                 {/* Option B */}
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-sm bg-pink-500"></div>
                   <div className="flex-1">
                     <div className="flex justify-between text-[10px] mb-1 font-medium">
                       <span className="text-foreground">Option B</span>
                       <span className="text-muted"><strong className="text-foreground">1</strong> 100.0%</span>
                     </div>
                     <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                       <div className="w-full h-full bg-pink-500"></div>
                     </div>
                   </div>
                 </div>
                 {/* Option A */}
                 <div className="flex items-center gap-2 opacity-50 hidden sm:flex">
                   <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-600"></div>
                   <div className="flex-1">
                     <div className="flex justify-between text-[10px] mb-1 font-medium">
                       <span className="text-muted">Option A</span>
                       <span className="text-muted"><strong className="text-muted">0</strong> 0.0%</span>
                     </div>
                     <div className="w-full h-1 bg-border rounded-full overflow-hidden"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Timeline Block */}
          <div className="border border-border bg-card rounded-lg p-3 flex flex-col">
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-foreground">
                 <Clock className="w-3 h-3 text-muted" /> Submission timeline
               </div>
            </div>
            <div className="relative h-16 w-full mt-2">
              <div className="absolute inset-0 border-b border-l border-border"></div>
              {/* Grid Lines */}
              <div className="absolute top-0 w-full border-t border-dashed border-border/50"></div>
              <div className="absolute top-1/2 w-full border-t border-dashed border-border/50"></div>
              
              {/* Event Line */}
              <div className="absolute left-6 top-1/2 right-6 h-0.5 bg-green-500/50"></div>
              <div className="absolute right-6 top-1/2 w-2 h-2 bg-green-500 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              {/* Markers */}
              <div className="absolute left-6 top-0 bottom-0 border-l border-dashed border-purple-500/50"></div>
              <div className="absolute right-6 top-0 bottom-0 border-l border-dashed border-orange-500/50"></div>
              <div className="absolute left-4 -top-3 text-[8px] text-purple-500 font-medium">Published</div>
              <div className="absolute right-4 -top-3 text-[8px] text-orange-500 font-medium">Deadline</div>

              <div className="absolute -left-2 top-0 -translate-x-full text-[8px] text-muted">2</div>
              <div className="absolute -left-2 bottom-0 -translate-x-full text-[8px] text-muted">0</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
