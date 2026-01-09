import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Joy Travel and Tours is a game-changer! The ease of use and the personalized recommendations have made my travel planning so much easier. I can't recommend it enough.",
    name: "John Doe",
    location: "United Kingdom",
  },
  {
    rating: 5,
    text: "Joy Travel and Tours made our anniversary trip completely stress-free. From planning the itinerary to booking unique stays, everything was smooth and personal.",
    name: "Devon Lane",
    location: "Canada",
  },
  {
    rating: 5,
    text: "We planned a two-week trip through Asia with Joy Travel and Tours and it was amazing. The tools were easy to use, and the support team helped us with custom routes.",
    name: "Mei Lin & Andrew",
    location: "Singapore",
  },
  {
    rating: 5,
    text: "As a solo traveler, I always look for platforms I can trust. Joy Travel and Tours gave me more than just destinations - it offered insights and real local connections.",
    name: "David Kane",
    location: "Australia",
  },
  {
    rating: 5,
    text: "Joy Travel and Tours exceeded my expectations. The platform is user-friendly, and the customer service is top-notch. Highly recommend for stress-free travel.",
    name: "Sarah Thompson",
    location: "United States",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-foreground"
        >
          Rated <span className="italic">Excellent</span> by Over 500K Happy Global Travelers
        </motion.h2>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80 md:w-96 snap-center"
            >
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
