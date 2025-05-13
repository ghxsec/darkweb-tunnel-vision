
import React from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Network, Server, Settings, Shield, Globe, Wifi } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface SidebarProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarProps) {
  return (
    <Sidebar className="bg-vpn-darkGray/50 backdrop-blur-lg border-r border-white/5">
      <SidebarHeader className="border-b border-white/5 py-6">
        <div className="flex items-center px-6">
          <div className="relative h-8 w-8 mr-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vpn-cyan via-vpn-purple to-vpn-cyan animate-pulse-glow"></div>
            <div className="absolute inset-0.5 rounded-full bg-vpn-darkGray flex items-center justify-center">
              <Shield className="h-5 w-5 text-vpn-cyan" />
            </div>
          </div>
          <div className="font-bold text-white text-xl">NetShield</div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full text-left">
              <div className="flex items-center">
                <Network className="h-5 w-5 mr-2 text-vpn-cyan" />
                <span>Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full text-left">
              <div className="flex items-center">
                <Server className="h-5 w-5 mr-2" />
                <span>Servers</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full text-left">
              <div className="flex items-center">
                <Wifi className="h-5 w-5 mr-2" />
                <span>Network</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full text-left">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                <span>IP Control</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full text-left">
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                <span>Settings</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-white/5 p-4">
        <div className="glass-card p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <div className="text-sm text-white/80">Connected • 2h 34m</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
