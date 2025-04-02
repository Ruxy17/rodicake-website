import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-pink-700 max-w-3xl mx-auto">
            Find answers to common questions about our cakes, ordering process, and services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Ordering Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-pink-800 mb-6">Ordering Process</h2>
              
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">How far in advance should I place my order?</h3>
                  <p className="text-pink-700">
                    We recommend placing your order at least 7 days in advance for standard cakes. For custom designs, themed cakes, or large orders, we suggest 2-3 weeks notice to ensure we can accommodate your request and have adequate preparation time.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">How do I place an order?</h3>
                  <p className="text-pink-700">
                    You can place an order by filling out our contact form, calling us directly, or sending an email. We'll discuss your requirements, provide a quote, and confirm availability for your desired date. Once details are finalized, a 50% deposit is required to secure your order.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Do you require a deposit?</h3>
                  <p className="text-pink-700">
                    Yes, we require a 50% deposit to secure your order. The remaining balance is due upon pickup or delivery. For orders under $50, full payment is required at the time of ordering.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">What payment methods do you accept?</h3>
                  <p className="text-pink-700">
                    We accept cash, credit/debit cards, and bank transfers. For online orders, we use a secure payment gateway to process credit card payments.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cake Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-pink-800 mb-6">Cake Information</h2>
              
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">What flavors do you offer?</h3>
                  <p className="text-pink-700">
                    We offer a variety of flavors including vanilla, chocolate, red velvet, lemon, carrot, and more. For our cocktail-inspired cakes, we have unique flavors like Mojito, Piña Colada, Strawberry Daiquiri, and others. Custom flavors are also available upon request.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Are your cakes suitable for people with allergies?</h3>
                  <p className="text-pink-700">
                    We can accommodate certain dietary restrictions and allergies. Please inform us of any allergies when placing your order. While we take precautions, our kitchen does handle common allergens such as nuts, dairy, and gluten, so we cannot guarantee that cross-contamination won't occur.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">How should I store my cake?</h3>
                  <p className="text-pink-700">
                    Our cakes are best enjoyed at room temperature. If you need to store it, keep it in a cool, dry place away from direct sunlight. For longer storage, refrigerate the cake in an airtight container and bring it to room temperature 1-2 hours before serving for the best flavor and texture.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Do your cocktail-inspired cakes contain alcohol?</h3>
                  <p className="text-pink-700">
                    Yes, our cocktail-inspired cakes do contain small amounts of alcohol to capture authentic flavors. The alcohol content is minimal as most of it evaporates during baking. We can also create non-alcoholic versions upon request. Please specify if you need an alcohol-free cake when ordering.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Delivery and Pickup */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-pink-800 mb-6">Delivery and Pickup</h2>
              
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Do you offer delivery?</h3>
                  <p className="text-pink-700">
                    Yes, we offer delivery within a 25-mile radius of our location. Delivery fees vary based on distance. For deliveries beyond our standard range or for special arrangements, please contact us for a custom quote.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">When can I pick up my cake?</h3>
                  <p className="text-pink-700">
                    Pickup is available during our business hours: Monday to Friday from 9am to 6pm, and Saturday from 10am to 4pm. We'll arrange a specific pickup time when you place your order to ensure your cake is fresh and ready when you arrive.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">How should I transport my cake?</h3>
                  <p className="text-pink-700">
                    We recommend transporting cakes on a flat surface, such as the floor of your car or trunk. Avoid placing the cake on seats as they can tilt. Keep the car cool and drive carefully to prevent the cake from shifting. For tiered cakes, we provide special transportation instructions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Custom Orders */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-pink-800 mb-6">Custom Orders</h2>
              
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Can you recreate a cake from a photo?</h3>
                  <p className="text-pink-700">
                    Yes, we can recreate cakes based on photos or inspiration images. While we may not be able to create an exact replica due to differences in techniques and materials, we'll work closely with you to create a cake that captures the essence of your inspiration.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Can you make themed or character cakes?</h3>
                  <p className="text-pink-700">
                    Absolutely! We specialize in creating themed and character cakes for all occasions. Please provide us with details and reference images when placing your order so we can discuss design possibilities and pricing.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Do you offer cake tastings?</h3>
                  <p className="text-pink-700">
                    Yes, we offer cake tastings by appointment for wedding cakes and large special event orders. Tastings include samples of our most popular flavors and fillings. There is a small fee for tastings, which is credited toward your order if you book with us.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cancellations and Changes */}
            <div>
              <h2 className="text-2xl font-bold text-pink-800 mb-6">Cancellations and Changes</h2>
              
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">What is your cancellation policy?</h3>
                  <p className="text-pink-700">
                    Cancellations made 7 or more days before the pickup/delivery date are eligible for a full refund of the deposit. Cancellations made 3-6 days before are eligible for a 50% refund of the deposit. Cancellations with less than 3 days' notice are not eligible for a refund as ingredients and preparation have already been allocated.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Can I make changes to my order after it's been placed?</h3>
                  <p className="text-pink-700">
                    Minor changes can usually be accommodated if requested at least 5 days before your pickup/delivery date. Significant changes to design, size, or flavor may not be possible with short notice and could incur additional charges. Please contact us as soon as possible if you need to make changes.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">What if I'm not satisfied with my cake?</h3>
                  <p className="text-pink-700">
                    Customer satisfaction is our priority. If you have any concerns about your cake, please contact us immediately. We address all issues on a case-by-case basis and strive to ensure you're completely happy with your Rodicake experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pink-800 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-pink-700 mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, please don't hesitate to contact us directly. We're here to help!
          </p>
          <Link href="/contact" className="inline-block bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
