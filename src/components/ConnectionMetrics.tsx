
import { cn } from "@/lib/utils";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "@/components/ui/chart"; 

interface ConnectionMetricsProps {
  className?: string;
}

export function ConnectionMetrics({ className }: ConnectionMetricsProps) {
  // Sample data for the bandwidth chart
  const chartData = [
    { time: "14:00", value: 12 },
    { time: "14:05", value: 18 },
    { time: "14:10", value: 15 },
    { time: "14:15", value: 25 },
    { time: "14:20", value: 32 },
    { time: "14:25", value: 22 },
    { time: "14:30", value: 28 },
    { time: "14:35", value: 30 },
    { time: "14:40", value: 42 },
    { time: "14:45", value: 35 },
  ];
  
  return (
    <div className={cn("glass-card p-6 rounded-xl", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Connection Metrics</h2>
        <div className="text-xs bg-vpn-purple/10 text-vpn-purple px-2 py-1 rounded">Live</div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="glass-card p-3 rounded-lg">
          <div className="text-xs text-white/60">Download</div>
          <div className="text-xl font-medium text-vpn-cyan">8.2 Mbps</div>
        </div>
        <div className="glass-card p-3 rounded-lg">
          <div className="text-xs text-white/60">Upload</div>
          <div className="text-xl font-medium text-vpn-purple">3.5 Mbps</div>
        </div>
        <div className="glass-card p-3 rounded-lg">
          <div className="text-xs text-white/60">Ping</div>
          <div className="text-xl font-medium text-white">42 ms</div>
        </div>
      </div>
      
      <div className="glass-card p-3 rounded-lg">
        <div className="text-sm mb-2 text-white/80">Bandwidth Usage</div>
        <ChartContainer 
          className="h-32 text-vpn-cyan"
          config={{
            value: { color: "#0AFFFF" }
          }}
        >
          {(props) => (
            <RechartsPrimitive.AreaChart data={chartData} {...props}>
              <RechartsPrimitive.defs>
                <RechartsPrimitive.linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <RechartsPrimitive.stop offset="5%" stopColor="#0AFFFF" stopOpacity={0.4} />
                  <RechartsPrimitive.stop offset="95%" stopColor="#0AFFFF" stopOpacity={0} />
                </RechartsPrimitive.linearGradient>
              </RechartsPrimitive.defs>
              <RechartsPrimitive.CartesianGrid stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" vertical={false} />
              <RechartsPrimitive.XAxis 
                dataKey="time" 
                stroke="rgba(255,255,255,0.2)" 
                tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 10 }} 
              />
              <RechartsPrimitive.YAxis 
                stroke="rgba(255,255,255,0.2)" 
                tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 10 }}
                tickFormatter={(value) => `${value} Mbps`}
              />
              <RechartsPrimitive.Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background/90 border border-border p-2 rounded shadow-md">
                        <p className="text-xs text-white">{`${label}: ${payload[0].value} Mbps`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <RechartsPrimitive.Area 
                type="monotone" 
                dataKey="value" 
                stroke="#0AFFFF" 
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </RechartsPrimitive.AreaChart>
          )}
        </ChartContainer>
      </div>
    </div>
  );
}
