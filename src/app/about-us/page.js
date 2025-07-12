/* eslint-disable */
'use client';

import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white dark:bg-neutral-950 text-gray-900 dark:text-white">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
          We are passionate about bringing people together through food, stories, and shared experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/globe.svg" alt="Our Mission" width={500} height={300} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">To inspire culinary creativity and foster a global cooking community.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/window.svg" alt="Our History" width={500} height={300} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">Our History</h3>
              <p className="text-gray-700 dark:text-gray-300">From humble beginnings to a worldwide platform for food lovers everywhere.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/file.svg" alt="Our Team" width={500} height={300} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">Our Team</h3>
              <p className="text-gray-700 dark:text-gray-300">A diverse group of chefs, developers, and designers passionate about food and tech.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}