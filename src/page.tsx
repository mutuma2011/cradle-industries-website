import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CradleIndustriesLanding() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-20 px-6 text-center">
        <motion.img 
          src="/images/Cradle Logo.png"
          alt="Cradle Industries Logo"
          className="mx-auto h-20 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cradle Industries Limited
        </motion.h1>
        <p className="text-xl md:text-2xl mb-6">
          Transforming homes and communities through world-class hygiene and beverage products
        </p>
        <Button className="text-white bg-yellow-700 hover:bg-yellow-800">
          Discover Our Products
        </Button>
      </section>

      {/* Product Sections */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">Personal Hygiene</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            name: "Velvia Baby Diapers",
            description: "Gentle care for comfort and protection.",
            image: "/images/Baby Diapers.png"
          }, {
            name: "Velvia Sanitary Pads",
            description: "Soft, breathable, and secure.",
            image: "/images/Sanitary pads.png"
          }, {
            name: "Velvia Wet Wipes",
            description: "Flushable wipes with aloe and chamomile.",
            image: "/images/Wet wipes.png"
          }].map(product => (
            <Card key={product.name}>
              <CardContent className="p-4 text-center">
                <img src={product.image} alt={product.name} className="mx-auto h-48 object-contain mb-4" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Food & Beverages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            name: "Turbo Charge",
            description: "Energy drink for ambition. Cheza na nguvu!",
            image: "/images/Final image_Turbo charge.png"
          }, {
            name: "Lime Lite",
            description: "Stay fresh with our lemon flavored carbonated drink.",
            image: "/images/Limelite Image.png"
          }, {
            name: "Oasis Drops",
            description: "Purified water for perfect hydration.",
            image: "/images/Oasis drops.png"
          }].map(product => (
            <Card key={product.name}>
              <CardContent className="p-4 text-center">
                <img src={product.image} alt={product.name} className="mx-auto h-48 object-contain mb-4" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Sustainability Commitment</h2>
          <p className="text-lg">
            Cradle Industries is proudly plastic-neutral. Through a local youth-driven plastic collection and recycling initiative, we are closing the loop on waste while creating jobs in underserved communities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
          <form className="grid grid-cols-1 gap-4">
            <input className="border p-3 rounded" type="text" placeholder="Your Name" required />
            <input className="border p-3 rounded" type="email" placeholder="Your Email" required />
            <textarea className="border p-3 rounded" placeholder="Your Message" rows="4" required></textarea>
            <Button className="bg-yellow-700 text-white hover:bg-yellow-800">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-700 text-white py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Cradle Industries Limited. All rights reserved.</p>
        <p>Email: info@crandleindustries.co.ke | Phone: +254 727 329204 / +254 741 253100</p>
        <p>P.O. Box 2144-60200, Meru, Kenya</p>
      </footer>
    </div>
  );
}