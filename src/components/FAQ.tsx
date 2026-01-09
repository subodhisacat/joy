import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I plan a trip with Joy Travel and Tours?",
    answer: "Simply choose your destination, customize your experience, and confirm your booking - all from one smooth, guided interface.",
  },
  {
    question: "Can I make changes to my trip after booking?",
    answer: "Yes! Most bookings allow flexible changes. You can adjust dates, preferences, or add services - just contact our support team.",
  },
  {
    question: "Are your guides verified?",
    answer: "Absolutely. Every Joy Travel and Tours guide is vetted for experience, local knowledge, and traveler feedback to ensure safe and enriching experiences.",
  },
  {
    question: "Do you offer group or solo travel options?",
    answer: "Both! Whether you're planning a solo escape or a group adventure, we offer options and support tailored to your travel style.",
  },
  {
    question: "What if I need help during my trip?",
    answer: "We offer 24/7 support before, during, and after your journey. Chat with our team anytime - we're always here to help.",
  },
  {
    question: "Is Joy Travel and Tours available worldwide?",
    answer: "Yes! We cover top destinations across Asia, Europe, Africa, and the Americas - and we're expanding every month.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-foreground"
        >
          Answers for the <span className="italic">Curious</span> Traveler
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="font-display text-lg font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
