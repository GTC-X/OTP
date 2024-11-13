import Image from 'next/image';
import Link from 'next/link';
import blogData from '../../../../public/blogs.json'; // Adjust this path according to your structure

const BlogCard = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#080a62] mb-10">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData?.map((blog, index) => (
            <div key={index} className="main-card bg-gradient-to-b from-[#090b63] to-[#100933] rounded-[35px]">
              <div className="relative w-full h-[250px]">
                <Image
                  src={blog.imageSrc}
                  alt={blog.title}
                  fill
                  className="rounded-t-xl w-full h-64 object-cover mb-4"
                />
              </div>
              <div className="text-white p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-5">{blog.title}</h3>
                {/* Create dynamic link using blog slug */}
                <Link href={`/blogs/${blog.slug}`} className="text-sm bg-white text-[#080a62] py-2 px-4 rounded-full hover:bg-[#080a62] hover:text-white">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
