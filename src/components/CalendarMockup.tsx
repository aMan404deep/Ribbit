import { Bell, CheckSquare } from 'lucide-react';

export function CalendarMockup() {
  const headers = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const EventItem = ({ type, time, title, dashed = false }: { type: 'alert' | 'poll', time: string, title: string, dashed?: boolean }) => {
    const isAlert = type === 'alert';
    const baseColorClass = isAlert 
      ? 'bg-yellow-50 dark:bg-yellow-900/10 text-yellow-800 dark:text-yellow-300' 
      : 'bg-emerald-50 dark:bg-emerald-900/10 text-emerald-800 dark:text-emerald-300';
    const iconColor = isAlert ? 'text-yellow-500' : 'text-emerald-500';
    
    const borderStyle = dashed 
      ? `border-dashed border-[1.5px] ${isAlert ? 'border-yellow-400/70' : 'border-emerald-400/70'}` 
      : `border border-l-[4px] ${isAlert ? 'border-l-yellow-400 border-yellow-200 dark:border-yellow-700/50 dark:border-l-yellow-500' : 'border-l-emerald-400 border-emerald-200 dark:border-emerald-700/50 dark:border-l-emerald-500'}`;

    return (
      <div className={`flex items-center gap-1.5 px-1.5 py-1 mb-1.5 rounded-sm text-[9px] sm:text-[10px] ${baseColorClass} ${borderStyle} truncate`}>
        {isAlert ? <Bell className={`w-3 h-3 ${iconColor} shrink-0`} /> : <CheckSquare className={`w-3 h-3 ${iconColor} shrink-0`} />}
        <span className="opacity-80 font-medium shrink-0">{time}</span>
        <span className="font-bold truncate">{title}</span>
      </div>
    );
  };

  return (
    <div className="w-full h-full rounded-[24px] bg-background border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col text-left select-none text-[10px] md:text-xs">
      <div className="flex bg-[#F4FBF7] dark:bg-card">
        {headers.map(h => (
          <div key={h} className="flex-1 py-3 text-center font-bold text-muted text-[9px] md:text-[10px] tracking-wider uppercase border-b border-border border-r border-border/50 last:border-r-0">
            {h}
          </div>
        ))}
      </div>
      
      <div className="flex-1 flex flex-col bg-card">
        {/* Row 1 */}
        <div className="flex-1 flex border-b border-border">
          <div className="flex-1 border-r border-border/50 bg-[#F8FAFC] dark:bg-background/50 p-1.5 flex flex-col">
            <span className="self-end text-muted">31</span>
          </div>
          {[1,2,3,4,5,6].map(d => (
            <div key={d} className="flex-1 border-r border-border/50 p-1.5 flex flex-col last:border-r-0">
              <span className="self-end text-foreground/70">{d}</span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex-[1.5] sm:flex-[2] flex border-b border-border bg-background/50">
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">7</span></div>
          <div className="flex-1 border-r border-border/50 p-1 flex flex-col">
            <span className="self-end text-foreground/70 mb-1 pr-0.5">8</span>
            <EventItem type="alert" time="4:03 PM" title="Daily stand..." dashed />
          </div>
          <div className="flex-1 border-r border-border/50 p-1 flex flex-col">
            <span className="self-end text-foreground/70 mb-1 pr-0.5">9</span>
            <EventItem type="alert" time="4:03 PM" title="Daily stand..." dashed />
          </div>
          <div className="flex-1 border-r border-border/50 p-1 flex flex-col relative bg-[#F0FDF4] dark:bg-[#064E3B]/20">
            <div className="self-end w-5 h-5 rounded-full bg-[#34D399] flex items-center justify-center text-white font-bold mb-1 -mt-0.5 -mr-0.5 z-10">10</div>
            <EventItem type="poll" time="3:03 PM" title="Weekly sta..." />
            <EventItem type="poll" time="3:52 PM" title="What is yo..." />
            <EventItem type="alert" time="4:03 PM" title="Daily stan..." dashed />
            {/* Tooltip */}
            <div className="absolute left-1/2 bottom-0 translate-y-[90%] -translate-x-[40%] bg-popover border border-border text-popover-foreground shadow-xl text-[9px] sm:text-[10px] px-3 py-1.5 z-20 rounded shadow-[0_10px_20px_rgba(0,0,0,0.1)] whitespace-nowrap hidden md:block">
              Alert · Daily standup starts in 15 minutes · Jun 10, 4:03 PM (active)
            </div>
          </div>
          <div className="flex-1 border-r border-border/50 p-1 flex flex-col z-10 bg-background/50">
            <span className="self-end text-foreground/70 mb-1 pr-0.5">11</span>
            <EventItem type="alert" time="4:03 PM" title="Daily stand..." />
          </div>
          <div className="flex-1 border-r border-border/50 p-1 flex flex-col z-10 bg-background/50">
            <span className="self-end text-foreground/70 mb-1 pr-0.5">12</span>
            <EventItem type="alert" time="4:03 PM" title="Daily stand..." />
          </div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col last:border-r-0"><span className="self-end text-foreground/70">13</span></div>
        </div>

        {/* Row 3 */}
        <div className="flex-[1.5] sm:flex-[2] flex border-b border-border">
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">14</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">15</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">16</span></div>
          <div className="flex-1 border-r border-border/50 p-1 flex flex-col">
            <span className="self-end text-foreground/70 mb-1 pr-0.5">17</span>
            <EventItem type="poll" time="4:03 PM" title="Weekly sta..." />
            <EventItem type="poll" time="4:03 PM" title="Sprint retro..." />
            <EventItem type="poll" time="4:50 PM" title="What is yo..." />
          </div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">18</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">19</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col last:border-r-0"><span className="self-end text-foreground/70">20</span></div>
        </div>

         {/* Row 4 */}
         <div className="flex-[1.5] sm:flex-[2] flex">
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">21</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">22</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">23</span></div>
          <div className="flex-1 border-r border-border/50 p-1 flex flex-col">
            <span className="self-end text-foreground/70 mb-1 pr-0.5">24</span>
            <EventItem type="poll" time="4:03 PM" title="Weekly sta..." />
            <EventItem type="poll" time="4:03 PM" title="Sprint retro..." />
            <EventItem type="poll" time="4:50 PM" title="What is yo..." />
          </div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">25</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col"><span className="self-end text-foreground/70">26</span></div>
          <div className="flex-1 border-r border-border/50 p-1.5 flex flex-col last:border-r-0"><span className="self-end text-foreground/70">27</span></div>
        </div>
      </div>
    </div>
  );
}
