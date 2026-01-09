import { motion } from "framer-motion";
import { MapPin, Sliders, Plane } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MapPin,
    title: "Choose Destination",
    description: "Pick a place that excites you - from cities to urban area's hidden gems.",
  },
  {
    number: "2",
    icon: Sliders,
    title: "Customize Your Experience",
    description: "Select activities, stays, and add-ons to match your own style.",
  },
  {
    number: "3",
    icon: Plane,
    title: "Book & Go",
    description: "Confirm your trip in minutes and start the countdown.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-foreground"
        >
          Plan Your Trip in <span className="italic">3 Steps</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border text-center">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 mt-4 bg-secondary rounded-full flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
