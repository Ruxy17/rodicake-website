import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/3.svg" alt="Rodicake" className="h-12" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-pink-800 hover:text-pink-600 transition-colors">
              {router.locale === 'pt' ? 'Início' : 
               router.locale === 'ro' ? 'Acasă' : 'Home'}
            </Link>
            <Link href="/cakes" className="text-pink-800 hover:text-pink-600 transition-colors">
              {router.locale === 'pt' ? 'Bolos' : 
               router.locale === 'ro' ? 'Prăjituri' : 'Cakes'}
            </Link>
            <Link href="/about" className="text-pink-800 hover:text-pink-600 transition-colors">
              {router.locale === 'pt' ? 'Sobre' : 
               router.locale === 'ro' ? 'Despre' : 'About'}
            </Link>
            <Link href="/pricing" className="text-pink-800 hover:text-pink-600 transition-colors">
              {router.locale === 'pt' ? 'Preços' : 
               router.locale === 'ro' ? 'Prețuri' : 'Pricing'}
            </Link>
            <Link href="/testimonials" className="text-pink-800 hover:text-pink-600 transition-colors">
              {router.locale === 'pt' ? 'Testemunhos' : 
               router.locale === 'ro' ? 'Testimoniale' : 'Testimonials'}
            </Link>
            <Link href="/contact" className="text-pink-800 hover:text-pink-600 transition-colors">
              {router.locale === 'pt' ? 'Contacto' : 
               router.locale === 'ro' ? 'Contact' : 'Contact'}
            </Link>
            <Link href="/faq" className="text-pink-800 hover:text-pink-600 transition-colors">
              {router.locale === 'pt' ? 'FAQ' : 
               router.locale === 'ro' ? 'Întrebări Frecvente' : 'FAQ'}
            </Link>
            
            <LanguageSelector />
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-pink-800 hover:text-pink-600 focus:outline-none focus:text-pink-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu (hidden by default) */}
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:text-pink-600 hover:bg-pink-50">
              {router.locale === 'pt' ? 'Início' : 
               router.locale === 'ro' ? 'Acasă' : 'Home'}
            </Link>
            <Link href="/cakes" className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:text-pink-600 hover:bg-pink-50">
              {router.locale === 'pt' ? 'Bolos' : 
               router.locale === 'ro' ? 'Prăjituri' : 'Cakes'}
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:text-pink-600 hover:bg-pink-50">
              {router.locale === 'pt' ? 'Sobre' : 
               router.locale === 'ro' ? 'Despre' : 'About'}
            </Link>
            <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:text-pink-600 hover:bg-pink-50">
              {router.locale === 'pt' ? 'Preços' : 
               router.locale === 'ro' ? 'Prețuri' : 'Pricing'}
            </Link>
            <Link href="/testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:text-pink-600 hover:bg-pink-50">
              {router.locale === 'pt' ? 'Testemunhos' : 
               router.locale === 'ro' ? 'Testimoniale' : 'Testimonials'}
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:text-pink-600 hover:bg-pink-50">
              {router.locale === 'pt' ? 'Contacto' : 
               router.locale === 'ro' ? 'Contact' : 'Contact'}
            </Link>
            <Link href="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-pink-800 hover:text-pink-600 hover:bg-pink-50">
              {router.locale === 'pt' ? 'FAQ' : 
               router.locale === 'ro' ? 'Întrebări Frecvente' : 'FAQ'}
            </Link>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
