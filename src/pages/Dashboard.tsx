import { Droplets, Wind, Thermometer, Activity, AlertTriangle, Leaf } from "lucide-react";
import AQICard from "@/components/AQICard";
import PollutionHeatmap from "@/components/PollutionHeatmap";
import PollutantChart from "@/components/PollutantChart";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Globe Background */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Air Quality Dashboard
          </h1>
          <p className="text-muted-foreground">
            Real-time monitoring for Faridabad, India
          </p>
        </motion.div>

        {/* AQI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AQICard
            title="Air Quality Index"
            value="156"
            icon={Activity}
            level="unhealthy"
            delay={0}
          />
          <AQICard
            title="PM2.5 Concentration"
            value="65"
            unit="μg/m³"
            icon={Droplets}
            level="moderate"
            delay={0.1}
          />
          <AQICard
            title="PM10 Concentration"
            value="142"
            unit="μg/m³"
            icon={AlertTriangle}
            level="unhealthy"
            delay={0.2}
          />
          <AQICard
            title="Temperature"
            value="28"
            unit="°C"
            icon={Thermometer}
            level="good"
            delay={0.3}
          />
          <AQICard
            title="Humidity"
            value="62"
            unit="%"
            icon={Droplets}
            level="good"
            delay={0.4}
          />
          <AQICard
            title="Wind Speed"
            value="12"
            unit="km/h"
            icon={Wind}
            level="good"
            delay={0.5}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PollutantChart />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">Health Impact</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Current air quality effects on health
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Sensitive Groups at Risk</h3>
                  <p className="text-sm text-muted-foreground">
                    People with respiratory conditions should limit outdoor activities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Indoor Air Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Consider using air purifiers and keeping windows closed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Forecast Improving</h3>
                  <p className="text-sm text-muted-foreground">
                    Air quality expected to improve by evening due to wind patterns
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Heatmap Section */}
        <PollutionHeatmap />
      </div>
    </div>
  );
};

export default Dashboard;
