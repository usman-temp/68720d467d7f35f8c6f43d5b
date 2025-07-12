/* eslint-disable */
'use client';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>

        <form className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input id="name" name="name" type="text" required className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-700 text-black dark:text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-700 text-black dark:text-white" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-700 text-black dark:text-white"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-rose-600 text-white rounded-md font-semibold hover:bg-rose-700 transition-all">
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center space-y-2">
          <p>123 Foodie Lane, Flavor Town, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: hello@cookingsite.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-2xl hover:text-rose-600"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="text-2xl hover:text-rose-600"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="text-2xl hover:text-rose-600"><FaInstagram /></a>
          </div>
        </div>
      </section>
    </main>
  );
}