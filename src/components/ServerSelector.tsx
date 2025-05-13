
import { useState } from "react";
import { Map } from "@/components/ui/map";
import { cn } from "@/lib/utils";

const SAMPLE_LOCATIONS = [
  { id: "us-west", name: "US West (San Francisco)", country: "USA", lat: 37.7749, lng: -122.4194, ping: 25 },
  { id: "us-east", name: "US East (New York)", country: "USA", lat: 40.7128, lng: -74.0060, ping: 45 },
  { id: "uk", name: "United Kingdom (London)", country: "UK", lat: 51.5074, lng: -0.1278, ping: 80 },
  { id: "de", name: "Germany (Frankfurt)", country: "Germany", lat: 50.1109, lng: 8.6821, ping: 63 },
  { id: "sg", name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, ping: 120 },
  { id: "jp", name: "Japan (Tokyo)", country: "Japan", lat: 35.6762, lng: 139.6503, ping: 130 },
  { id: "au", name: "Australia (Sydney)", country: "Australia", lat: -33.8688, lng: 151.2093, ping: 180 },
];

interface ServerSelectorProps {
  className?: string;
  onServerChange?: (serverId: string) => void;
}

export function ServerSelector({ className, onServerChange }: ServerSelectorProps) {
  const [selectedServer, setSelectedServer] = useState<string>("us-west");
  
  const handleServerSelect = (location: any) => {
    setSelectedServer(location.id);
    if (onServerChange) onServerChange(location.id);
  };
  
  return (
    <div className={cn("glass-card p-6 rounded-xl", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Server Location</h2>
        <div className="text-xs text-vpn-cyan px-2 py-1 rounded bg-vpn-cyan/10">
          {SAMPLE_LOCATIONS.find(l => l.id === selectedServer)?.ping}ms
        </div>
      </div>
      
      <Map 
        locations={SAMPLE_LOCATIONS} 
        selectedLocation={selectedServer}
        onSelectLocation={handleServerSelect}
        className="mb-4"
      />
      
      <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-vpn-purple/20 scrollbar-track-transparent pr-1">
        {SAMPLE_LOCATIONS.map((location) => (
          <button
            key={location.id}
            onClick={() => handleServerSelect(location)}
            className={cn(
              "flex items-center justify-between p-2 rounded text-left text-sm transition-all hover:bg-white/5",
              selectedServer === location.id ? "bg-white/10 border border-vpn-cyan/30" : "border border-transparent"
            )}
          >
            <div>
              <div>{location.country}</div>
              <div className="text-xs text-white/60">{location.name}</div>
            </div>
            <div className="text-xs text-white/80">{location.ping}ms</div>
          </button>
        ))}
      </div>
    </div>
  );
}
