/* eslint-disable */
'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-orange-50 to-rose-100 dark:from-neutral-900 dark:to-neutral-950 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cook Like a Pro with Our Curated Recipes
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover, Watch, and Share the Joy of Cooking
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-6 py-3 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition-all">
            Explore Recipes
          </button>
          <button className="px-6 py-3 bg-neutral-200 text-gray-900 rounded-full font-semibold hover:bg-neutral-300 transition-all dark:bg-white dark:text-black">
            Watch Video
          </button>
          <button className="px-6 py-3 border border-rose-600 text-rose-600 rounded-full font-semibold hover:bg-rose-50 dark:hover:bg-rose-900 transition-all">
            Submit Your Recipe
          </button>
        </motion.div>
      </div>
    </section>
  );
}