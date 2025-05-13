
import React from "react";
import { SidebarNav } from "@/components/SidebarNav";
import { Header } from "@/components/Header";
import { ConnectionStatus } from "@/components/ConnectionStatus";
import { ServerSelector } from "@/components/ServerSelector";
import { ConnectionMetrics } from "@/components/ConnectionMetrics";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <SidebarNav />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ConnectionStatus initialConnected={false} />
                <ServerSelector />
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <ConnectionMetrics />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
