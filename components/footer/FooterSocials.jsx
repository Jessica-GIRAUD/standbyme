import React from 'react';

export default function FooterSocials() {
  const socials = [
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      url: 'https://www.linkedin.com/company/standbyme/',
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      url: 'https://www.instagram.com/be_standbyme/',
    },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
