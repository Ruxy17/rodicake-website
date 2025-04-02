import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  
  // Find current language or default to Portuguese
  const currentLanguage = languages.find(lang => lang.code === router.locale) || languages[0];
  
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-pink-800 hover:text-pink-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="mr-1">{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          {languages.map((language) => (
            <Link
              key={language.code}
              href={{ pathname, query }}
              as={asPath}
              locale={language.code}
              className={`block px-4 py-2 text-sm ${
                currentLanguage.code === language.code
                  ? 'bg-pink-50 text-pink-800 font-medium'
                  : 'text-gray-700 hover:bg-pink-50 hover:text-pink-800'
              }`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              <span className="mr-2">{language.flag}</span>
              {language.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
