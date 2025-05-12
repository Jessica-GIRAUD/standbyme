import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';

export default function LanguageSelect() {
  const pathname = usePathname();
  const router = useRouter();

  // Déterminer la langue actuelle à partir du pathname
  const currentLocale = pathname.split('/')[1];

  // State pour gérer la visibilité du dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = `/${language}${pathnameWithoutLocale}`;

    // Naviguer vers la nouvelle URL
    router.push(newPath);

    setIsDropdownOpen(false); // Fermer le dropdown après la sélection
  };

  // Afficher la langue actuelle
  const getLanguageLabel = (code) => {
    switch (code) {
      case 'fr':
        return 'Français';
      case 'en':
        return 'English';
      default:
        return code.toUpperCase();
    }
  };

  return (
    <li className="languageSelect">
      <a
        href="#"
        className="mn-has-sub opacity-1 ps-5"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        {getLanguageLabel(currentLocale)} <i className="mi-chevron-down" />
      </a>

      {/* Dropdown menu with sliding effect */}
      <ul
        className={`mn-sub to-left ${isDropdownOpen ? 'open' : 'closed'}`}
        ref={dropdownRef}
      >
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLanguageSelect('en');
            }}
          >
            English
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLanguageSelect('fr');
            }}
          >
            Français
          </a>
        </li>
      </ul>
    </li>
  );
}
