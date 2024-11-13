import Link from 'next/link';

const GradientButton = ({
  href = '#', // Default link to #
  text = 'Contact Us', // Default text to 'Contact Us'
  gradientFrom = '#080a62', // Default gradient start color
  gradientTo = '#dc3d52', // Default gradient end color
}) => {
  return (
    <Link 
      href={href} 
      className={`inline-block bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] hover:bg-gradient-to-l text-white font-semibold py-3 px-8 rounded-full text-lg`}
    >
      {text}
    </Link>
  );
};

export default GradientButton;
