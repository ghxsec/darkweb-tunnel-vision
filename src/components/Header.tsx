
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Settings, Shield } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      "flex items-center justify-between py-4 px-6 border-b border-white/5",
      className
    )}>
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-white/80 hover:text-white" />
        <h1 className="text-xl font-medium text-white">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-white/5 rounded-full">
          <Settings className="h-5 w-5 text-white/80" />
        </button>
        
        <div className="glass-card px-3 py-1.5 rounded-full flex items-center gap-2 text-xs">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <span>Premium Plan</span>
        </div>
        
        <div className="h-9 w-9 rounded-full flex items-center justify-center bg-gradient-to-br from-vpn-cyan to-vpn-purple text-white">
          <Shield className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
