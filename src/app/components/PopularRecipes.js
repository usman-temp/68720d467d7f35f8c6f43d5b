/* eslint-disable */
'use client';

export default function PopularRecipes() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Popular Recipes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-rose-50 dark:bg-neutral-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-rose-600 dark:text-rose-400 mb-2">Recipe Title {item}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A short description of the recipe goes here. It's tasty, easy, and perfect for any occasion.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}