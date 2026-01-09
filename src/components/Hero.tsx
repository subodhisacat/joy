import { motion } from "framer-motion";
import { ArrowDownRight, ArrowDown, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/hero-bg.jpg";
import bubble1 from "@/assets/bubble-1.jpg";
import bubble2 from "@/assets/bubble-2.jpg";
import bubble3 from "@/assets/bubble-3.jpg";
import bubble4 from "@/assets/bubble-4.jpg";
import bubble5 from "@/assets/bubble-5.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const floatingBubbles = [
  { img: bubble1, position: "top-24 left-[15%]", size: "w-20 h-20", delay: 0 },
  { img: bubble2, position: "top-48 left-[8%]", size: "w-24 h-24", delay: 0.2 },
  { img: bubble3, position: "bottom-48 left-[12%]", size: "w-28 h-28", delay: 0.4 },
  { img: bubble4, position: "top-24 right-[15%]", size: "w-20 h-20", delay: 0.1 },
  { img: bubble5, position: "top-48 right-[8%]", size: "w-24 h-24", delay: 0.3 },
  { img: bubble1, position: "bottom-48 right-[12%]", size: "w-28 h-28", delay: 0.5 },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        {floatingBubbles.map((bubble, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: bubble.delay, duration: 0.6 }}
            className={`absolute ${bubble.position} ${bubble.size} rounded-full overflow-hidden border-4 border-white/30 shadow-2xl floating-bubble`}
            style={{ animationDelay: `${bubble.delay * 2}s` }}
          >
            <img
              src={bubble.img}
              alt="Destination"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16 lg:pt-24">
        {/* Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {[client1, client2, client3].map((client, i) => (
              <img
                key={i}
                src={client}
                alt={`Client ${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="text-white/90 text-sm">497K+ traveler reviews</span>
          <span className="text-white/90 text-sm">• 4.7/5 rating</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-tight">
            Discover Your Next
            <br />
            <span className="italic">Great Adventure</span>
          </h1>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button variant="heroLight" size="xl">
            Plan Your Trip
            <ArrowDownRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Explore Now
            <ArrowDownRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-16"
        >
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center animate-bounce">
            <ArrowDown className="w-5 h-5 text-white" />
          </div>
        </motion.div>

        {/* Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 mb-8"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="flex items-center gap-3 p-3 border-b md:border-b-0 md:border-r border-border">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Check In</p>
                  <p className="text-sm font-medium">dd/mm/yy</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border-b md:border-b-0 md:border-r border-border">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Check Out</p>
                  <p className="text-sm font-medium">dd/mm/yy</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border-b md:border-b-0 md:border-r border-border">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Enter your Location</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border-b md:border-b-0 md:border-r border-border">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Person</p>
                  <p className="text-sm font-medium">Select Person</p>
                </div>
              </div>
              <div className="p-3">
                <Button variant="hero" size="lg" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
