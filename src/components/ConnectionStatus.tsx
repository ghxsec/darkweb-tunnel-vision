
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Shield, ShieldOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConnectionStatusProps {
  initialConnected?: boolean;
  onToggle?: (connected: boolean) => void;
  className?: string;
}

export function ConnectionStatus({ initialConnected = false, onToggle, className }: ConnectionStatusProps) {
  const [connected, setConnected] = useState(initialConnected);
  
  const handleToggle = (checked: boolean) => {
    setConnected(checked);
    if (onToggle) onToggle(checked);
  };
  
  return (
    <div className={cn("glass-card p-6 rounded-xl", className)}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-white">Connection Status</h2>
          <p className={cn(
            "text-sm",
            connected ? "text-green-400" : "text-red-400"
          )}>
            {connected ? "Protected" : "Not Protected"}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Switch 
            checked={connected}
            onCheckedChange={handleToggle}
            className="data-[state=checked]:bg-vpn-cyan data-[state=checked]:border-vpn-cyan/50"
          />
          <div className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full",
            connected ? "bg-vpn-cyan/10 text-vpn-cyan" : "bg-red-400/10 text-red-400"
          )}>
            {connected ? 
              <Shield className="w-5 h-5" /> : 
              <ShieldOff className="w-5 h-5" />
            }
          </div>
        </div>
      </div>
      
      <div className={cn(
        "mt-4 p-3 rounded-lg transition-all duration-500",
        connected ? "bg-green-400/10" : "bg-red-400/10"
      )}>
        <p className="text-sm">
          {connected 
            ? "Your connection is secure. All traffic is encrypted and routed through your VPN tunnel." 
            : "Your connection is not protected. Your internet traffic is visible to your ISP and potentially others."}
        </p>
      </div>
    </div>
  );
}
