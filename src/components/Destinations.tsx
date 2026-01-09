import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";
import destination4 from "@/assets/destination-4.jpg";
import destination5 from "@/assets/destination-5.jpg";
import destination6 from "@/assets/destination-6.jpg";

const destinations = [
  {
    name: "Santorini, Greece",
    description: "Cliffside views, blue domes, and golden sunsets.",
    image: destination1,
  },
  {
    name: "Kyoto, Japan",
    description: "Temples, teahouses, and timeless streets.",
    image: destination2,
  },
  {
    name: "Bali, Indonesia",
    description: "Rice terraces, beaches, and serene retreats.",
    image: destination3,
  },
  {
    name: "Amalfi Coast, Italy",
    description: "Dramatic coastlines and lemon-scented lanes.",
    image: destination4,
  },
  {
    name: "Iceland",
    description: "Waterfalls, glaciers, and the northern lights.",
    image: destination5,
  },
  {
    name: "Paris, France",
    description: "Cafés, culture, and moonlit river walks.",
    image: destination6,
  },
];

export const Destinations = () => {
  return (
    <>
      <Navbar />
      <section id="destinations" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground max-w-xl"
            >
              Discover the World's Most <span className="italic">Loved</span> Travel Destinations
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" size="lg">
                Explore Destination
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-2xl text-white font-medium mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-white/80 text-sm">{dest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
