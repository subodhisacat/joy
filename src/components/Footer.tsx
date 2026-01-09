import { Plane, Facebook, Twitter } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display text-2xl font-bold">
                  Joy Travel and Tours
                </span>
              </a>
            </div>

            {/* Gallery Counter */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-4xl">1</span>
              <span className="text-primary-foreground/60">/</span>
              <span className="text-primary-foreground/60 text-xl">8</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Pinterest
              </a>
            </div>
          </div>

          {/* Right Side - Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Joy Travel and Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
