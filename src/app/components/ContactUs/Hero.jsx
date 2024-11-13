'use client'
import { UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import { BsGrid } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";
import emailjs from "emailjs-com";

const ContactUsHeroSection = () => {
    // const sendEmail = (e) => {
    //     // e.preventDefault();

    //     emailjs
    //         .send(
    //             "service_d17ip7e",    // Replace with your Service ID
    //             "template_fe1ff54",   // Replace with your Template ID
    //             { email: "adeelcomsats070@gmail.com" },
    //             "hBEuQsrrqkn0STWmO"        // Replace with your User ID
    //         )
    //         .then(
    //             (result) => {
    //                 alert("Email sent successfully!");
    //             },
    //             (error) => {
    //                 alert("Failed to send email. Try again later.");
    //             }
    //         );
    // };
    return (
        <div>
            <section className="bg-gradient-to-r from-[#080a62] from-30%  to-secondary to-90% pt-28 3xl:pt-36 xl:pt-32 md:px-4 text-white relative">
                <div className="max-w-6xl mx-auto text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-center md:leading-normal">
                        Contact Us
                    </h1>
                    <p className="text-sm md:ext-lg xl:text-xl text-gray-300 mb-8 text-center p-5">
                        Ready to take your brokerage to the next level?<br />
                        Fill out the form below, and one of our experts will get in touch with you shortly.
                    </p>
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
            {/* Form Section */}
            <div className=' relative -top-48'>
                <div className="bg-white relative text-gray-700 rounded-3xl shadow-lg p-8 max-w-3xl mx-auto">
                    {/* <form> */}
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className='relative'>
                            <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="First Name"
                            />
                        </div>
                        <div className=' relative'>
                            <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid relative grid-cols-1 gap-6 mb-6">
                        <CiMail className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                        <input
                            type="email"
                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Email"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className=' relative'>
                            <BsGrid className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="email"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Code"
                            />
                        </div>
                        <div className='col-span-2 relative'>
                            <FiPhoneCall className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Phone"
                            />
                        </div>
                    </div>

                    {/* Country & Query */}
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <div className='relative'>
                            <GiWorld className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 pl-9 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Country"
                            />
                        </div>
                        <div className=' relative'>
                            <TiMessages className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 pl-9 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Query"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6 relative">
                        <AiOutlineMessage className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                        <textarea
                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            rows="4"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center -mb-12">
                        <button
                            // onClick={() => { sendEmail() }}
                            type="submit"
                            className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg"
                        >
                            Submit
                        </button>
                    </div>
                    {/* </form> */}
                </div>
                <div className='my-10'>
                    <img className='w-[400px] mx-auto ' src="/social.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUsHeroSection