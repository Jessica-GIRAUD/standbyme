import { useLanguage } from '@/context/language-context';
import React, { useState, useRef } from 'react';

export default function LanguageSelect() {
  const { setLanguage, language } = useLanguage();
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selecting a language
  };

  return (
    <li className="languageSelect">
      <a
        href="#"
        className="mn-has-sub opacity-1"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        {language} <i className="mi-chevron-down" />
      </a>

      {/* Dropdown menu with sliding effect */}
      <ul
        className={`mn-sub to-left ${isDropdownOpen ? 'open' : 'closed'}`}
        ref={dropdownRef}
      >
        <li>
          <a href="#" onClick={() => handleLanguageSelect('en')}>
            English
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLanguageSelect('fr')}>
            French
          </a>
        </li>
      </ul>
    </li>
  );
}
