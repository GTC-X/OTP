"use client";
import React, { useState } from "react";
import CareerList from "../components/career";
import careerData from "../../../public/career.json";

const CareerPage = () => {
    const [isOpen, setIsOpen] = useState("");
    return (
        <div className="py-10">
            <section className="bg-gradient-to-r from-[#080a62] from-30%  to-secondary to-90% pt-28 3xl:pt-36 xl:pt-32 md:px-4 text-white relative">
                <div className="max-w-6xl mx-auto text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-center md:leading-normal">
                        Join Our Team
                    </h1>
                </div>
                <div className="relative mt-10 lg:mt-0 flex justify-center">
                    <div className="relative w-full md:h-[300px]">
                        <img
                            src="/images/contact-us/banner.webp"
                            alt="Trading Summary"
                            fill
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            <div className="text-center max-w-4xl mx-auto my-12">
                <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">
                    Current Positions
                </h2>
                <p className="text-lg mt-4 text-gray-600">
                    We are looking for talented individuals to help shape the future of
                    fintech.
                </p>
            </div>
            <div className="mt-12 flex flex-col gap-6">
                {careerData?.map((single, index) => (
                    <CareerList data={single} key={index} isOpen={isOpen}
                        setIsOpen={setIsOpen} />
                ))}
            </div>
        </div>
    );
};

export default CareerPage;
