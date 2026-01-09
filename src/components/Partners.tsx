import { motion } from "framer-motion";

const partners = [
  { name: "Airbnb", logo: "Airbnb" },
  { name: "Booking", logo: "Booking.com" },
  { name: "Expedia", logo: "Expedia" },
  { name: "TripAdvisor", logo: "TripAdvisor" },
  { name: "Kayak", logo: "Kayak" },
  { name: "Hotels", logo: "Hotels.com" },
];

export const Partners = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-center mb-12 text-foreground"
        >
          Our <span className="italic">Trusted</span> Travel Partners
        </motion.h2>
      </div>

      {/* Scrolling Partners */}
      <div className="relative">
        <div className="flex scroll-partners">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-semibold text-muted-foreground/60 whitespace-nowrap">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
