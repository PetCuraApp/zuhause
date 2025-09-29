'use client';

import { motion } from 'framer-motion';

export default function HomeSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-background overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/zuhause1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center"
      >
        
       
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 px-6 py-3 bg-accent hover:bg-primary rounded-full text-lg font-semibold transition duration-300"
        >
          <a href="#cabanas">Ver Cabañas</a>
        </motion.button>
      </motion.div>
    </section>
  );
}