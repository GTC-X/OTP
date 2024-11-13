import Image from "next/image";

const CompanyPolicyHero = () => {
    return (
        <section className="relative px-6 bg-gradient-to-r from-[#0a0747] via-[#0c0d4c] to-[#340e38] py-12 lg:py-16 2xl:py-28">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-16">

                {/* Text Content */}
                <div className="md:w-1/2">
                    <h1 className="text-white text-2xl md:text-4xl xl:text-5xl font-bold my-10">
                        Company Policy
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg">
                        At Market Mavens, we believe in fostering a productive, innovative, and flexible work environment. As a hybrid model company, we support both in-office and remote work to ensure our team operates at its best, while also delivering top-tier services to our clients. This policy outlines our workplace standards, communication guidelines, and expectations to maintain a thriving and professional work environment.
                    </p>
                </div>
                {/* Image */}
                <div className="relative w-full md:w-1/2  mt-10 md:mt-0">

                </div>
            </div>
        </section>
    );
};

export default CompanyPolicyHero;
