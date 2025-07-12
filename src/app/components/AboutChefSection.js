/* eslint-disable */
'use client';

import { motion } from 'framer-motion';

export default function AboutChefSection() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Chef
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          With over 20 years of experience in global cuisine, Chef Amara blends tradition with innovation. From humble beginnings to award-winning creations, every dish tells a story.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            className="bg-rose-50 dark:bg-neutral-800 p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-rose-600 dark:text-rose-400 mb-2">Culinary Philosophy</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Cooking is an art of love and precision. Every ingredient matters, and every step is a journey of flavor, culture, and joy.
            </p>
          </motion.div>

          <motion.div
            className="bg-rose-50 dark:bg-neutral-800 p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-rose-600 dark:text-rose-400 mb-2">Milestones</h3>
            <ul className="text-left text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
              <li>James Beard Award Winner (2015)</li>
              <li>Opened 3 Michelin-starred restaurants</li>
              <li>Certified Organic Culinary Expert</li>
              <li>TV Guest Chef on "Global Gourmet"</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}