
import React from "react";
import { cn } from "@/lib/utils";

interface ServerLocation {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  ping: number;
  active?: boolean;
}

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {
  locations: ServerLocation[];
  onSelectLocation?: (location: ServerLocation) => void;
  selectedLocation?: string;
}

export function Map({ 
  locations, 
  onSelectLocation, 
  selectedLocation,
  className,
  ...props 
}: MapProps) {
  // Map is simplified with dots representing server locations
  return (
    <div className={cn("relative w-full h-64 bg-vpn-darkGray rounded-lg overflow-hidden", className)} {...props}>
      <div className="absolute inset-0 bg-network-grid opacity-50"></div>
      {locations.map((location) => (
        <button
          key={location.id}
          onClick={() => onSelectLocation && onSelectLocation(location)}
          className={cn(
            "absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all",
            selectedLocation === location.id 
              ? "bg-vpn-cyan shadow-[0_0_8px_rgba(10,255,255,0.8)] scale-125" 
              : "bg-vpn-purple hover:scale-110"
          )}
          style={{
            left: `${((location.lng + 180) / 360) * 100}%`,
            top: `${((90 - location.lat) / 180) * 100}%`,
          }}
          aria-label={location.name}
        />
      ))}
      <div className="absolute bottom-3 left-3 glass-card px-3 py-1.5 rounded-md text-xs text-white/80">
        {selectedLocation ? 
          locations.find(loc => loc.id === selectedLocation)?.name :
          'Select a server location'}
      </div>
    </div>
  );
}
