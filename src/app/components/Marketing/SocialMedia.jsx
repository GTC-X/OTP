import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaSnapchatGhost, FaYoutube, FaMedium } from 'react-icons/fa';

// Social media data
const socialMedia = [
  { name: 'LinkedIn', icon: FaLinkedin, link: 'https://www.linkedin.com' },
  { name: 'Facebook', icon: FaFacebook, link: 'https://www.facebook.com' },
  { name: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com' },
  { name: 'TikTok', icon: FaTiktok, link: 'https://www.tiktok.com' },
  { name: 'Snapchat', icon: FaSnapchatGhost, link: 'https://www.snapchat.com' },
  { name: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com' },
  { name: 'Medium', icon: FaMedium, link: 'https://www.medium.com' },
];

const SocialMediaSection = ({ setActive, active }) => {
  return (
    <section className="max-w-[1135px] mx-auto flex justify-between items-center bg-gradient-to-r from-[#e4e4ec] to-[#f9e8eb]">
      <div className="flex flex-row flex-wrap justify-between w-full">
        {/* Loop through social media array */}
        {socialMedia.map((social, index) => {
          const IconComponent = social.icon; // Dynamically use the correct icon
          return (
            <div key={index} className=' cursor-pointer'
              onMouseOver={() => {
                setActive(index + 1)
              }}
            >
              <div className="relative p-4 group transition duration-500">
                <div className={`absolute inset-0 w-full h-full ${active == index + 1 ? "bg-gradient-to-r from-[#080a62] to-[#dc3d52]" : ""} group-hover:opacity-100 transition duration-300`}></div>
                <IconComponent className={` ${active == index + 1 ? "text-white" : "text-[#080a62]"} text-3xl md:text-8xl z-10 relative transition duration-300 md:px-5`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SocialMediaSection;
