import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-pink-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
              Delicious Homemade Cakes for Every Occasion
            </h1>
            <p className="text-lg text-pink-700 mb-8">
              Handcrafted with love and premium ingredients. From birthday celebrations to cocktail-inspired creations and personalized designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/cakes" className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-full transition-colors text-center">
                Explore Our Cakes
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-pink-100 text-pink-700 font-semibold py-3 px-6 border border-pink-500 rounded-full transition-colors text-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/4.svg" alt="Rodicake Confections" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pink-800 mb-12">Our Signature Cakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Birthday Cake */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Birthday Cakes</h3>
                <p className="text-pink-700 mb-4">
                  Celebrate another trip around the sun with our delicious birthday cakes, customized for your special day.
                </p>
                <Link href="/cakes#birthday" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  View Collection
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Cocktail-Inspired Cake */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Cocktail-Inspired Cakes</h3>
                <p className="text-pink-700 mb-4">
                  Experience the fusion of your favorite cocktails in cake form. Sophisticated flavors for adult celebrations.
                </p>
                <Link href="/cakes#cocktail" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  View Collection
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Personalized Cake */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-64 bg-pink-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M12,14L13.5,17H10.5L12,14Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">Personalized Cakes</h3>
                <p className="text-pink-700 mb-4">
                  Tell us your vision and we'll bring it to life. Custom designs tailored to your unique celebration.
                </p>
                <Link href="/cakes#personalized" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
                  View Collection
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pink-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-800 font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Sarah M.</h3>
                  <div className="flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The birthday cake Rodicake made for my daughter was absolutely stunning! Not only did it look beautiful, but it tasted amazing too. Everyone at the party was impressed!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-800 font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">James T.</h3>
                  <div className="flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "I ordered a Mojito-inspired cake for my wife's birthday and it was a hit! The flavors were spot on and the presentation was elegant. Will definitely order again!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-800 font-bold text-xl">
                  E
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Elena R.</h3>
                  <div className="flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The personalized cake for my son's graduation exceeded my expectations. The attention to detail was incredible, and it tasted as good as it looked. Thank you Rodicake!"
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="inline-block bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-full transition-colors">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order Your Dream Cake?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your cake requirements. We'll work with you to create the perfect cake for your special occasion.
          </p>
          <Link href="/contact" className="inline-block bg-white text-pink-700 hover:bg-pink-100 font-bold py-3 px-8 rounded-full transition-colors text-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
