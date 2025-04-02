import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">Our Pricing</h1>
          <p className="text-lg text-pink-700 max-w-3xl mx-auto">
            Transparent pricing for our handcrafted cakes. Each cake is custom-made with premium ingredients and designed to make your special occasion memorable.
          </p>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-800 mb-8">Cake Pricing Guide</h2>
            <p className="text-lg text-pink-700 mb-12">
              Our cakes are priced based on size, design complexity, and special requirements. Below is a general pricing guide to help you budget for your special occasion cake.
            </p>

            {/* Birthday Cakes */}
            <div className="mb-12 bg-pink-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Birthday Cakes</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-pink-200">
                      <th className="py-3 px-4 text-left text-pink-800">Size</th>
                      <th className="py-3 px-4 text-left text-pink-800">Serves</th>
                      <th className="py-3 px-4 text-left text-pink-800">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-pink-100">
                      <td className="py-3 px-4 text-pink-700">6" Round</td>
                      <td className="py-3 px-4 text-pink-700">8-10 people</td>
                      <td className="py-3 px-4 text-pink-700">$45</td>
                    </tr>
                    <tr className="border-b border-pink-100">
                      <td className="py-3 px-4 text-pink-700">8" Round</td>
                      <td className="py-3 px-4 text-pink-700">12-16 people</td>
                      <td className="py-3 px-4 text-pink-700">$60</td>
                    </tr>
                    <tr className="border-b border-pink-100">
                      <td className="py-3 px-4 text-pink-700">10" Round</td>
                      <td className="py-3 px-4 text-pink-700">20-25 people</td>
                      <td className="py-3 px-4 text-pink-700">$80</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-pink-700">Sheet Cake</td>
                      <td className="py-3 px-4 text-pink-700">30-40 people</td>
                      <td className="py-3 px-4 text-pink-700">$100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-pink-700">
                * Prices may vary based on design complexity, special decorations, and flavor choices.
              </p>
            </div>

            {/* Cocktail-Inspired Cakes */}
            <div className="mb-12 bg-pink-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Cocktail-Inspired Cakes</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-pink-200">
                      <th className="py-3 px-4 text-left text-pink-800">Size</th>
                      <th className="py-3 px-4 text-left text-pink-800">Serves</th>
                      <th className="py-3 px-4 text-left text-pink-800">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-pink-100">
                      <td className="py-3 px-4 text-pink-700">6" Round</td>
                      <td className="py-3 px-4 text-pink-700">8-10 people</td>
                      <td className="py-3 px-4 text-pink-700">$60</td>
                    </tr>
                    <tr className="border-b border-pink-100">
                      <td className="py-3 px-4 text-pink-700">8" Round</td>
                      <td className="py-3 px-4 text-pink-700">12-16 people</td>
                      <td className="py-3 px-4 text-pink-700">$75</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-pink-700">10" Round</td>
                      <td className="py-3 px-4 text-pink-700">20-25 people</td>
                      <td className="py-3 px-4 text-pink-700">$95</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-pink-700">
                * Cocktail-inspired cakes include premium ingredients and special infusions to capture authentic cocktail flavors.
              </p>
            </div>

            {/* Personalized Cakes */}
            <div className="mb-12 bg-pink-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Personalized Cakes</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-pink-200">
                      <th className="py-3 px-4 text-left text-pink-800">Type</th>
                      <th className="py-3 px-4 text-left text-pink-800">Description</th>
                      <th className="py-3 px-4 text-left text-pink-800">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-pink-100">
                      <td className="py-3 px-4 text-pink-700">Theme Cakes</td>
                      <td className="py-3 px-4 text-pink-700">Custom designs based on themes, characters, or hobbies</td>
                      <td className="py-3 px-4 text-pink-700">$70</td>
                    </tr>
                    <tr className="border-b border-pink-100">
                      <td className="py-3 px-4 text-pink-700">Photo Cakes</td>
                      <td className="py-3 px-4 text-pink-700">Cakes featuring edible printed photos</td>
                      <td className="py-3 px-4 text-pink-700">$75</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-pink-700">Sculpted Cakes</td>
                      <td className="py-3 px-4 text-pink-700">Custom-shaped cakes designed to match your vision</td>
                      <td className="py-3 px-4 text-pink-700">$90+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-pink-700">
                * Personalized cake prices vary significantly based on design complexity, size, and special requirements. Contact us for a custom quote.
              </p>
            </div>

            {/* Additional Options */}
            <div className="mb-12 bg-pink-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Additional Options</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-pink-100 pb-3">
                  <span className="text-pink-700">Premium Fillings (fruit, ganache, etc.)</span>
                  <span className="text-pink-700 font-semibold">+$10</span>
                </li>
                <li className="flex justify-between items-center border-b border-pink-100 pb-3">
                  <span className="text-pink-700">Fondant Covering</span>
                  <span className="text-pink-700 font-semibold">+$15</span>
                </li>
                <li className="flex justify-between items-center border-b border-pink-100 pb-3">
                  <span className="text-pink-700">Edible Gold/Silver Accents</span>
                  <span className="text-pink-700 font-semibold">+$20</span>
                </li>
                <li className="flex justify-between items-center border-b border-pink-100 pb-3">
                  <span className="text-pink-700">Handcrafted Sugar Flowers</span>
                  <span className="text-pink-700 font-semibold">+$25+</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-pink-700">Cake Toppers</span>
                  <span className="text-pink-700 font-semibold">$15-$30</span>
                </li>
              </ul>
            </div>

            {/* Ordering Information */}
            <div className="bg-pink-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Ordering Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
                  </svg>
                  <div className="text-pink-700">
                    <strong className="font-semibold">Deposit:</strong> A 50% deposit is required to secure your order, with the remaining balance due upon pickup or delivery.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                  </svg>
                  <div className="text-pink-700">
                    <strong className="font-semibold">Lead Time:</strong> Please place your order at least 7 days in advance. For complex designs or large orders, 2-3 weeks notice is recommended.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C7.59,2 4,5.59 4,10C4,14.41 7.59,18 12,18C16.41,18 20,14.41 20,10C20,5.59 16.41,2 12,2M12,4A6,6 0 0,1 18,10A6,6 0 0,1 12,16A6,6 0 0,1 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8M21,16V15L20,14V17H3V14L2,15V16L3,17V21H21V17L22,16V15L21,14V17H20V21H4V17H21Z" />
                  </svg>
                  <div className="text-pink-700">
                    <strong className="font-semibold">Delivery:</strong> Local delivery is available for a fee based on distance. Pickup is available at our location at no additional cost.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
                  </svg>
                  <div className="text-pink-700">
                    <strong className="font-semibold">Customization:</strong> All prices are starting points. Final pricing will be provided after consultation based on your specific requirements.
                  </div>
                </li>
              </ul>
            </div>
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
