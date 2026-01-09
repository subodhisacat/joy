import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, Globe, Heart, Shield, Users, Award, MapPin } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import guide1 from "@/assets/guide-1.jpg";
import guide2 from "@/assets/guide-2.jpg";
import guide3 from "@/assets/guide-3.jpg";
import guide4 from "@/assets/guide-4.jpg";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We believe travel transforms lives. Every trip we help plan is a chance to create lasting memories.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your safety is our priority. We vet every guide, verify every stay, and stand behind every booking.",
  },
  {
    icon: Users,
    title: "Local Connections",
    description: "We connect you with locals who share their authentic culture, hidden gems, and insider knowledge.",
  },
  {
    icon: Globe,
    title: "Sustainable Travel",
    description: "We're committed to responsible tourism that respects communities and protects our planet.",
  },
];

const milestones = [
  { year: "2018", title: "Founded", description: "Joy Travel and Tours was born from a passion for authentic travel experiences." },
  { year: "2019", title: "1K Travelers", description: "Reached our first thousand happy adventurers worldwide." },
  { year: "2021", title: "50+ Destinations", description: "Expanded our network across Asia, Europe, and the Americas." },
  { year: "2023", title: "500K+ Trips", description: "Celebrated half a million successful journeys planned." },
  { year: "2024", title: "Global Expansion", description: "Launched in Africa and Oceania with 120+ destinations." },
];

const team = [
  { name: "Carlos Mendes", role: "Founder & CEO", image: guide1 },
  { name: "Sofia Petrova", role: "Head of Operations", image: guide2 },
  { name: "Amir Haddad", role: "Chief Experience Officer", image: guide3 },
  { name: "Leo Martinez", role: "Head of Partnerships", image: guide4 },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-cream/80 text-sm font-medium uppercase tracking-wider mb-4 block">
              About Joy Travel and Tours
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              We Turn Dreams Into <span className="italic">Adventures</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Since 2018, we've been connecting curious travelers with extraordinary destinations, 
              local experts, and unforgettable experiences around the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Making <span className="italic">Authentic</span> Travel Accessible to Everyone
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We started Joy Travel and Tours with a simple belief: the best travel experiences come from 
                genuine connections. Not tourist traps. Not cookie-cutter itineraries. Real people, 
                real places, real adventures.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Today, we've helped over 500,000 travelers discover the world's most incredible 
                destinations through our network of verified local guides and curated experiences.
              </p>
              <Button variant="hero" size="xl">
                Start Your Journey
                <ArrowDownRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden">
                  <img src={destination1} alt="Travel" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img src={destination2} alt="Travel" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img src={guide1} alt="Guide" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden">
                  <img src={guide2} alt="Guide" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              What We <span className="italic">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              The Joy Travel and Tours <span className="italic">Story</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 -translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="font-display text-3xl font-bold text-golden">{milestone.year}</span>
                    <h3 className="font-display text-xl font-semibold mt-2">{milestone.title}</h3>
                    <p className="text-primary-foreground/70 mt-2">{milestone.description}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-golden rounded-full -translate-x-1/2 border-4 border-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Leadership Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              Meet the <span className="italic">Visionaries</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-5 border-4 border-secondary">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, value: "120+", label: "Destinations" },
              { icon: Users, value: "500K+", label: "Happy Travelers" },
              { icon: Award, value: "4.9", label: "Average Rating" },
              { icon: Globe, value: "50+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-display text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Start Your <span className="italic">Adventure</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Join 500,000+ travelers who trust Joy Travel and Tours to plan their perfect getaway.
            </p>
            <Button variant="heroLight" size="xl">
              Plan Your Trip Now
              <ArrowDownRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
