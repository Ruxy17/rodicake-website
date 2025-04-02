'use client';
import React from "react";

export default function Cakes() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">Our Cake Collection</h1>
          <p className="text-lg text-pink-700 max-w-3xl mx-auto">
            Discover our handcrafted cakes made with premium ingredients and lots of love. 
            From birthday celebrations to cocktail-inspired creations and personalized designs, 
            we have the perfect cake for your special occasion.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white py-8 border-b border-pink-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#birthday" className="px-6 py-3 bg-pink-50 hover:bg-pink-100 text-pink-800 rounded-full transition-colors">
              Birthday Cakes
            </a>
            <a href="#cocktail" className="px-6 py-3 bg-pink-50 hover:bg-pink-100 text-pink-800 rounded-full transition-colors">
              Cocktail-Inspired Cakes
            </a>
            <a href="#personalized" className="px-6 py-3 bg-pink-50 hover:bg-pink-100 text-pink-800 rounded-full transition-colors">
              Personalized Cakes
            </a>
          </div>
        </div>
      </section>

      {/* Birthday Cakes Section */}
      <section id="birthday" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-800 mb-4">Birthday Cakes</h2>
          <p className="text-lg text-pink-700 mb-12 max-w-4xl">
            Celebrate another trip around the sun with our delicious birthday cakes. 
            Each cake is customized to make your special day even more memorable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Birthday Cake 1 */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Classic Birthday Cake</h3>
                <p className="text-pink-700 mb-4">
                  Our classic vanilla cake with buttercream frosting, decorated with colorful sprinkles and personalized message.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $45</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  Order Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Birthday Cake 2 */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Chocolate Delight</h3>
                <p className="text-pink-700 mb-4">
                  Rich chocolate cake with chocolate ganache, decorated with chocolate shavings and fresh berries.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $50</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  Order Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Birthday Cake 3 */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Funfetti Celebration</h3>
                <p className="text-pink-700 mb-4">
                  Colorful funfetti cake with vanilla buttercream, rainbow sprinkles, and festive decorations.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $55</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  Order Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cocktail-Inspired Cakes Section */}
      <section id="cocktail" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-800 mb-4">Cocktail-Inspired Cakes</h2>
          <p className="text-lg text-pink-700 mb-12 max-w-4xl">
            Experience the fusion of your favorite cocktails in cake form. 
            Our cocktail-inspired cakes offer sophisticated flavors perfect for adult celebrations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cocktail Cake 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Mojito Magic</h3>
                <p className="text-pink-700 mb-4">
                  Lime-infused cake with mint buttercream, rum syrup, and candied lime zest for a refreshing twist.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $60</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  Order Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Cocktail Cake 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Piña Colada Paradise</h3>
                <p className="text-pink-700 mb-4">
                  Coconut cake with pineapple filling, rum-infused frosting, and toasted coconut flakes.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $65</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  Order Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Cocktail Cake 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Strawberry Daiquiri Delight</h3>
                <p className="text-pink-700 mb-4">
                  Strawberry cake with lime-infused cream, rum syrup, and fresh strawberry garnish.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $60</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  Order Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Cakes Section */}
      <section id="personalized" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-800 mb-4">Personalized Cakes</h2>
          <p className="text-lg text-pink-700 mb-12 max-w-4xl">
            Tell us your vision and we'll bring it to life. Our custom designs are tailored to your unique celebration, 
            ensuring a one-of-a-kind cake that perfectly matches your theme and preferences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personalized Cake 1 */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M12,14L13.5,17H10.5L12,14Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Theme Cakes</h3>
                <p className="text-pink-700 mb-4">
                  Custom cakes designed around your favorite theme, character, or hobby. Perfect for birthdays and special events.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $70</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  Order Now
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Personalized Cake 2 */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M12,14L13.5,17H10.5L12,14Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Photo Cakes</h3>
                <p className="text-pink-700 mb-4">
                  Cakes featuring edible printed photos of your choice. A wonderful way to celebrate milestones and memories.
                </p>
                <p className="text-pink-800 font-semibold mb-4">Starting at $75</p>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800 
(Content truncated due to size limit. Use line ranges to read in chunks)