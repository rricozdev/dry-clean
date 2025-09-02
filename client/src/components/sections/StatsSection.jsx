import { Star } from "lucide-react";
import CountUp from "react-countup";

export const StatsSection = () => {
  const stats = [
    {
      number: 15613,
      label: "Servicios realizados",
    },
    {
      number: 4.58,
      label: "Calificación promedio",
      icon: (
        <Star className="h-8 w-8 fill-yellow-400 text-yellow-400 inline ml-2" />
      ),
      decimals: 2,
    },
    {
      number: 7657,
      label: "Clientes",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-5xl font-bold text-gray-900 flex items-center justify-center">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  decimals={stat.decimals || 0}
                  separator="."
                />
                {stat.icon}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
