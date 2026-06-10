import { Search, User, Users, ChevronDown, LayoutGrid, List, Globe, Star, Copy } from 'lucide-react';

export function GroupsMockup() {
  const GroupCard = ({ title, num }: { title: string, num: string }) => (
    <div className="p-4 rounded-xl border border-border bg-card flex flex-col hover:border-accent/50 transition-colors cursor-pointer shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold tracking-wider">
          <Globe className="w-2.5 h-2.5" />
          PUBLIC
        </div>
        <Star className="w-4 h-4 text-muted hover:text-yellow-400 transition-colors" />
      </div>
      <h3 className="font-bold text-sm mb-1">{title}</h3>
      <div className="flex items-center gap-1.5 text-[10px] text-muted mb-4">
        <Users className="w-3 h-3" />
        <span>0 members</span>
        <span>•</span>
        <span>Updated 1d ago</span>
      </div>
      <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-[8px] font-bold text-emerald-800 dark:text-emerald-300">
            HM
          </div>
          <span className="text-[10px] text-muted">Hardika Maheshwari</span>
        </div>
        <Copy className="w-3.5 h-3.5 text-muted hover:text-foreground transition-colors" />
      </div>
    </div>
  );

  return (
    <div className="w-full h-full rounded-[24px] bg-background border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col text-left select-none text-xs">
      <div className="p-5 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-foreground">Groups</h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                64 groups
              </span>
            </div>
            <p className="text-muted text-[11px]">Manage recipient groups for signals</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-card border border-border rounded-lg overflow-hidden">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-background shadow-sm text-[11px] font-medium text-emerald-700 dark:text-emerald-400 border-r border-border">
                <Users className="w-3.5 h-3.5" />
                Groups
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-muted/10 text-[11px] font-medium text-muted">
                <User className="w-3.5 h-3.5" />
                User view
              </button>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#34D399] hover:bg-[#10B981] text-white text-[11px] font-medium transition-colors shadow-sm shadow-[#34D399]/20">
              <span className="text-sm leading-none">+</span> Create Group <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[
            { label: 'All Groups', val: '64', active: true },
            { label: 'Favorites', val: '0' },
            { label: 'My Groups', val: '0' },
            { label: 'Shared with Me', val: '64' },
          ].map((stat, i) => (
            <div key={i} className={`p-4 rounded-xl border flex flex-col items-center justify-center bg-card ${stat.active ? 'border-[#34D399] shadow-sm' : 'border-border'}`}>
              <div className={`text-2xl font-bold mb-1 ${stat.active ? 'text-[#34D399]' : 'text-foreground'}`}>{stat.val}</div>
              <div className="text-[10px] font-medium text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search groups or users..." 
              className="w-full pl-9 pr-8 py-2 rounded-lg border border-border bg-card text-xs focus:outline-none focus:border-[#34D399]"
              readOnly
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded bg-muted/20 flex items-center justify-center text-[10px] text-muted font-mono">/</div>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-xs font-medium hover:bg-muted/10">
            All Types <ChevronDown className="w-3 h-3 text-muted" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-xs font-medium hover:bg-muted/10">
            Default Sort <ChevronDown className="w-3 h-3 text-muted" />
          </button>
          <div className="flex bg-card border border-border rounded-lg p-0.5">
            <button className="p-1.5 rounded shadow-sm bg-background text-foreground"><LayoutGrid className="w-3.5 h-3.5" /></button>
            <button className="p-1.5 rounded text-muted hover:text-foreground"><List className="w-3.5 h-3.5" /></button>
          </div>
        </div>

        {/* Grid Header */}
        <div className="flex items-center gap-3 mb-4">
          <h4 className="text-[10px] font-bold text-muted uppercase tracking-wider shrink-0">All Other Groups</h4>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4 overflow-hidden flex-1 items-start">
          <GroupCard title="Test Group 13" num="13" />
          <GroupCard title="Test Group 14" num="14" />
          <GroupCard title="Test Group 16" num="16" />
          <GroupCard title="Test Group 17" num="17" />
          <GroupCard title="Test Group 19" num="19" />
          <GroupCard title="Test Group 22" num="22" />
        </div>
      </div>
    </div>
  );
}
