import { Search, ChevronDown, User, Activity, ArrowUp, ArrowUpDown } from 'lucide-react';

export function HierarchyMockup() {
  const users = [
    { initials: '61', name: '6 19 Meetingroom', email: '6.19.meetingroom@pragmaticplay.com', location: 'Unassigned', role: 'No role', level: '0' },
    { initials: 'AY', name: 'A Yar', email: 'a.yar@arrise.com', location: 'UAE', role: 'Audio Visual Technician', level: '0' },
    { initials: 'A', name: 'A2office', email: 'A2Office@arrise.com', location: 'Unassigned', role: 'No role', level: '0' },
    { initials: 'AJ', name: 'Aadesh Jotrao', email: 'aadesh.jotrao@arrise.com', location: 'Noida IN', role: 'Admin Head - India', level: '0' },
    { initials: 'AS', name: 'Aaditya Saxena', email: 'aaditya.saxena@arrise.com', location: 'Hyderabad IN', role: 'Product Manager', level: '0' },
    { initials: 'AC', name: 'Aakansha Chauhan', email: 'aakansha.chauhan@arrise.com', location: 'Noida IN', role: 'Marketing Artist', level: '0' },
  ];

  return (
    <div className="w-full h-full rounded-[24px] bg-background border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col text-left select-none text-xs">
      <div className="p-5 flex-1 flex flex-col bg-card">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-foreground">Hierarchy</h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                2277 users
              </span>
            </div>
            <p className="text-muted text-[11px]">View users and assign hierarchy levels where allowed.</p>
          </div>
          <div className="flex bg-background border border-border rounded-lg overflow-hidden shadow-sm">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-card text-[11px] font-medium text-emerald-700 dark:text-emerald-400 border-r border-border">
              <User className="w-3.5 h-3.5" />
              Publishers
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-muted/10 text-[11px] font-medium text-muted">
              <Activity className="w-3.5 h-3.5" />
              Signal view
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full pl-9 pr-8 py-2 rounded-lg border border-border bg-background text-xs focus:outline-none focus:border-[#34D399]"
              readOnly
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded bg-muted/20 flex items-center justify-center text-[10px] text-muted font-mono">/</div>
          </div>
          <button className="flex items-center justify-between w-32 px-3 py-2 rounded-lg border border-border bg-background text-xs font-medium hover:bg-muted/10 text-foreground">
            <span>All locations</span> <ChevronDown className="w-3 h-3 text-muted" />
          </button>
          <button className="flex items-center justify-between w-32 px-3 py-2 rounded-lg border border-border bg-background text-xs font-medium hover:bg-muted/10 text-foreground">
            <span>All roles</span> <ChevronDown className="w-3 h-3 text-muted" />
          </button>
        </div>

        {/* Table */}
        <div className="flex-[1] overflow-hidden flex flex-col border border-border rounded-lg bg-background">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 p-3 bg-emerald-50/50 dark:bg-emerald-900/10 border-b border-border items-center">
            <div className="col-span-5 flex items-center gap-1 text-[10px] font-bold text-muted uppercase tracking-wider">
              USER <ArrowUp className="w-3 h-3" />
            </div>
            <div className="col-span-2 flex items-center gap-1 text-[10px] font-bold text-muted uppercase tracking-wider justify-center">
              LOCATION <ArrowUpDown className="w-3 h-3 opacity-50" />
            </div>
            <div className="col-span-3 flex items-center gap-1 text-[10px] font-bold text-muted uppercase tracking-wider justify-center">
              ROLE <ArrowUpDown className="w-3 h-3 opacity-50" />
            </div>
            <div className="col-span-1 flex items-center gap-1 text-[10px] font-bold text-muted uppercase tracking-wider justify-center">
              LEVEL <ArrowUpDown className="w-3 h-3 opacity-50" />
            </div>
            <div className="col-span-1 flex items-center text-[10px] font-bold text-muted uppercase tracking-wider justify-end pr-2">
              ACTION
            </div>
          </div>

          {/* Table Body */}
          <div className="flex-1 overflow-hidden flex flex-col divide-y divide-border">
            {users.map((user, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-muted/5 transition-colors">
                {/* User Column */}
                <div className="col-span-5 flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-400 font-bold text-[10px] flex items-center justify-center uppercase">
                    {user.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground truncate">{user.name}</div>
                    <div className="text-[10px] text-muted truncate">{user.email}</div>
                  </div>
                </div>

                {/* Location Column */}
                <div className="col-span-2 flex justify-center">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                    user.location === 'Unassigned' 
                      ? 'bg-transparent border-dashed border-muted text-muted' 
                      : 'bg-emerald-50 dark:bg-emerald-900/20 border-transparent text-emerald-700 dark:text-emerald-400'
                  }`}>
                    {user.location}
                  </span>
                </div>

                {/* Role Column */}
                <div className="col-span-3 flex justify-center">
                  <span className={`px-2 text-center py-0.5 rounded-full text-[10px] font-medium border truncate max-w-[120px] ${
                    user.role === 'No role' 
                      ? 'bg-transparent border-dashed border-muted text-muted' 
                      : 'bg-emerald-50 dark:bg-emerald-900/20 border-transparent text-emerald-700 dark:text-emerald-400'
                  }`}>
                    {user.role}
                  </span>
                </div>

                {/* Level Column */}
                <div className="col-span-1 flex justify-center">
                  <span className="w-5 h-5 flex items-center justify-center rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-400 font-bold text-[10px]">
                    {user.level}
                  </span>
                </div>

                {/* Action Column */}
                <div className="col-span-1 flex justify-end">
                  <button className="px-3 py-1 rounded bg-emerald-700 hover:bg-emerald-800 text-white font-medium shadow-sm transition-colors text-[10px]">
                    Assign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
