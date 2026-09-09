import { Trophy, Users, Award } from "lucide-react";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const icons = [Trophy, Users, Award];
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="text-center p-6 border border-gray-900 hover:border-[#e63030] transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-900 group-hover:bg-[#e63030] transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-bebas)" }}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}