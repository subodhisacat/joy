import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import guide1 from "@/assets/guide-1.jpg";
import guide2 from "@/assets/guide-2.jpg";
import guide3 from "@/assets/guide-3.jpg";
import guide4 from "@/assets/guide-4.jpg";
import guide5 from "@/assets/guide-5.jpg";
import guide6 from "@/assets/guide-6.jpg";

const guides = [
  {
    name: "Carlos Mendes",
    role: "Island & Coastal Guide",
    description: "7+ years guiding travelers to tropical beaches, islands, and hidden coastal trails.",
    image: guide1,
    featured: true,
  },
  { name: "Amir Haddad", image: guide3 },
  { name: "Leo Martinez", image: guide4 },
  { name: "Luca Romano", image: guide5 },
  { name: "Diego Ramirez", image: guide6 },
  { name: "Sofia Petrova", image: guide2 },
];

export const Guides = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground"
          >
            Meet Your <span className="italic">Guides</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg">
              Plan Your Trip
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Featured Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg h-full">
              <div className="h-80 overflow-hidden">
                <img
                  src={guides[0].image}
                  alt={guides[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {guides[0].name}
                </h3>
                <p className="text-primary font-medium mb-3">{guides[0].role}</p>
                <p className="text-muted-foreground">{guides[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Other Guides */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {guides.slice(1).map((guide, index) => (
                <motion.div
                  key={guide.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-48 md:h-56 rounded-xl overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium text-sm">{guide.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
