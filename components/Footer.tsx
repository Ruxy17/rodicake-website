import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Footer() {
  const router = useRouter();
  
  // Translations for footer content
  const translations = {
    quickLinks: {
      pt: 'Links Rápidos',
      en: 'Quick Links',
      ro: 'Linkuri Rapide'
    },
    contactUs: {
      pt: 'Contacte-nos',
      en: 'Contact Us',
      ro: 'Contactați-ne'
    },
    email: {
      pt: 'Email',
      en: 'Email',
      ro: 'Email'
    },
    phone: {
      pt: 'Telefone',
      en: 'Phone',
      ro: 'Telefon'
    },
    address: {
      pt: 'Morada',
      en: 'Address',
      ro: 'Adresă'
    },
    followUs: {
      pt: 'Siga-nos',
      en: 'Follow Us',
      ro: 'Urmăriți-ne'
    },
    copyright: {
      pt: '© 2025 Rodicake Confections. Todos os direitos reservados.',
      en: '© 2025 Rodicake Confections. All rights reserved.',
      ro: '© 2025 Rodicake Confections. Toate drepturile rezervate.'
    }
  };
  
  // Get current language or default to Portuguese
  const locale = router.locale || 'pt';
  
  return (
    <footer className="bg-pink-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <img src="/4.svg" alt="Rodicake" className="h-12 mb-4" />
            <p className="text-pink-100 mt-4">
              {locale === 'pt' ? 'Bolos artesanais deliciosos para todas as ocasiões.' : 
               locale === 'ro' ? 'Prăjituri artizanale delicioase pentru toate ocaziile.' : 
               'Delicious handmade cakes for all occasions.'}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{translations.quickLinks[locale]}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-pink-100 hover:text-white transition-colors">
                  {locale === 'pt' ? 'Início' : locale === 'ro' ? 'Acasă' : 'Home'}
                </Link>
              </li>
              <li>
                <Link href="/cakes" className="text-pink-100 hover:text-white transition-colors">
                  {locale === 'pt' ? 'Bolos' : locale === 'ro' ? 'Prăjituri' : 'Cakes'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-pink-100 hover:text-white transition-colors">
                  {locale === 'pt' ? 'Sobre' : locale === 'ro' ? 'Despre' : 'About'}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-pink-100 hover:text-white transition-colors">
                  {locale === 'pt' ? 'Preços' : locale === 'ro' ? 'Prețuri' : 'Pricing'}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-pink-100 hover:text-white transition-colors">
                  {locale === 'pt' ? 'FAQ' : locale === 'ro' ? 'Întrebări Frecvente' : 'FAQ'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{translations.contactUs[locale]}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-300 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-pink-300">{translations.email[locale]}</p>
                  <a href="mailto:info@rodicake.com" className="text-pink-100 hover:text-white transition-colors">info@rodicake.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-300 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-pink-300">{translations.phone[locale]}</p>
                  <a href="tel:+1234567890" className="text-pink-100 hover:text-white transition-colors">(123) 456-7890</a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-300 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-pink-300">{translations.address[locale]}</p>
                  <p className="text-pink-100">123 Cake Street, Bakery District, Sweet City</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{translations.followUs[locale]}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-pink-700 text-center">
          <p className="text-pink-100">{translations.copyright[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
