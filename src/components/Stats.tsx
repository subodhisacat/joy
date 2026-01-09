import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "K", label: "Trips Booked" },
  { value: 120, suffix: "+", label: "Destinations Covered" },
  { value: 850, suffix: "+", label: "Verified Stays" },
  { value: 4.9, suffix: "", label: "Customer Rating" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate(latest) {
        setDisplayValue(Math.round(latest * 10) / 10);
      },
    });

    return controls.stop;
  }, [value]);

  return (
    <span>
      {value < 10 ? displayValue.toFixed(1) : Math.round(displayValue)}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16"
        >
          Rated <span className="italic">Excellent</span> by Over 500K Happy Global Travelers
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-5xl md:text-6xl lg:text-7xl font-medium mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-primary-foreground/80 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
