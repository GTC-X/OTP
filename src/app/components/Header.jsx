"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparentPage =
    pathname === "/" ||
    pathname === "/marketing-consultancy" ||
    pathname === "/contact" ||
    pathname === "/privacy-cookie-policy" ||
    pathname === "/growth-expand";

  // Scroll to Contact Us section
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contactus");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparentPage
          ? isScrolled
            ? "bg-gradient-to-l from-[#0a0747] to-[#aa165e]"
            : "bg-transparent"
          : "bg-gradient-to-b from-[#0a0747] to-[#aa165e]"
      }`}
    >
      <div className="container mx-auto flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="relative w-48 h-20 items-center">
          <a href="/">
            <h2 className="text-white text-2xl pt-5 font-black italic">Best Solution</h2>
          </a>
        </div>

        <div className="hidden lg:block lg:justify-end">
          <button
            onClick={handleScrollToContact}
            className="bg-secondary rounded-full py-3 px-7 text-white shadow-2xl hover:bg-white hover:text-primary transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
