import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";
import destination4 from "@/assets/destination-4.jpg";
import destination5 from "@/assets/destination-5.jpg";
import destination6 from "@/assets/destination-6.jpg";

const circleImages = [
  destination1, destination2, destination3, destination4, destination5, destination6,
  destination1, destination2, destination3, destination4,
];

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full border-2 border-primary-foreground/20" />
        <div className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full border-2 border-primary-foreground/20" />
        
        {/* Small floating circles with images */}
        {circleImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-primary-foreground/30"
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${15 + (i * 13) % 70}%`,
            }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            Your Next Great Adventure Starts with <span className="italic">Joy Travel and Tours</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg mb-10"
          >
            Discover destinations, build your journey, and go
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="heroLight" size="xl">
              Plan Your Trip
              <ArrowDownRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
