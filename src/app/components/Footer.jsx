'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname(); // Get current path

  // Logos shown on all pages
  const commonLogos = [
    { src: '/logos/logos-26.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-27.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-28.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-29.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-30.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-33.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-34.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-35.svg', alt: 'Panda Trading' }, 
    { src: '/logos/logos-36.svg', alt: 'Panda Trading' },
  ];

  // Extra logos shown only on the specific page (e.g., marketing consultancy)
  const extraLogos = [
    { src: '/logos/logos-25.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-26.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-27.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-28.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-29.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-30.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-31.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-32.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-33.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-34.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-35.svg', alt: 'Panda Trading' }, 
    { src: '/logos/logos-36.svg', alt: 'Panda Trading' },
  ];

  // Combine logos based on the page
  const isMarketingPage = pathname === '/marketing-consultancy';
  const logosToShow = isMarketingPage ? [...extraLogos] : commonLogos;


  const socialIcons = [
    { component: FaFacebookF, href: '#' },

    { component: FaLinkedinIn, href: '#' },
    { component: FaYoutube, href: '#' },
    { component: FaInstagram, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-l from-[#080a62] via-[#2a125f] to-[#dc3d52] text-white pt-10 md:pt-14 2xl:pt-20">
      <div className="container mx-auto px-4">
        {/* Partners Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-bold capitalize pb-8">Tried, tested, trusted expertise!</h2>
          <div
            className={`flex flex-row flex-wrap justify-center gap-6`}
          >
            {logosToShow.map((logo, index) => (
              <div className='relative w-28 h-14'>
                <Image key={index} src={logo.src} alt={logo.alt} fill className='object-contain' />
              </div>

            ))}
          </div>
        </div>



        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row gap-x-2 items-center justify-between pt-10 pb-5">
          <p className="text-xs text-center md:text-left md:text-sm pb-3 md:pb-0">
                Copyright @ 2024. All right Reserved
          </p>
          <div className="flex space-x-2">
            {socialIcons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <a key={index} href={icon.href}>
                  <IconComponent
                    size={28}
                    className=" bg-white rounded-full text-primary hover:bg-secondary hover:text-white p-2"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
