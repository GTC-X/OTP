'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
        mode: "onChange"
    });
    const [otpSent, setOtpSent] = useState(false);

    const onSubmit = (data) => {
        const payload = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        };
        console.log("Form submitted:", payload);
        reset();
        setOtpSent(false);
    };

    const handleSendOtp = () => {
        alert("OTP has been sent to your phone number.");
        setOtpSent(true);
    };

    const handleVerifyOtp = () => {
        alert("OTP Verified!");
        setOtpSent(false); // Reset OTP state after verification
    };

    return (
        <div className="bg-white relative text-gray-700 rounded-3xl shadow-lg p-8 max-w-3xl mx-auto mb-10 md:mb-14 xl:mb-20 border border-gray-300">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="relative">
                        <p className="text-red-500 text-xs mb-1 min-h-[20px]">{errors.first_name?.message}</p>
                        <input
                            {...register('first_name', { required: 'First name is required' })}
                            type="text"
                            className="w-full px-4 py-3 pl-3 border rounded-lg text-gray-700 focus:outline-none"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="relative">
                        <p className="text-red-500 text-xs mb-1 min-h-[20px]">{errors.last_name?.message}</p>
                        <input
                            {...register('last_name', { required: 'Last name is required' })}
                            type="text"
                            className="w-full px-4 py-3 pl-3 border rounded-lg text-gray-700 focus:outline-none"
                            placeholder="Last Name"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="relative mb-2">
                    <p className="text-red-500 text-xs mb-1 min-h-[20px]">{errors.email?.message}</p>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        type="email"
                        className="w-full px-4 py-3 pl-3 border rounded-lg text-gray-700 focus:outline-none"
                        placeholder="Email"
                    />
                </div>

                {/* Phone with Send OTP Button */}
                <div className="relative mb-2 flex items-baseline gap-4">
                    <div className="relative flex-grow">
                        <p className="text-red-500 text-xs mb-1 min-h-[20px]">{errors.phone?.message}</p>
                        <input
                            type="tel"
                            {...register('phone', { required: 'Phone number is required' })}
                            className="w-full px-4 py-3 pl-3 border rounded-lg text-gray-700 focus:outline-none"
                            placeholder="Phone"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSendOtp}
                        className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-medium py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
                    >
                        {otpSent ? "OTP Sent" : "Send OTP"}
                    </button>
                </div>

                {/* OTP Verification Fields */}
                {otpSent && (
                    <div className="flex flex-row justify-between items-center space-y-4">
                        <div className="flex gap-2">
                            {[...Array(6)].map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="w-20 h-12 text-center border rounded-md text-gray-700 focus:outline-none"
                                    placeholder="-"
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={handleVerifyOtp}
                            className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-medium py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 mt-0"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}

                {/* Message */}
                <div className="relative mb-6">
                    <p className="text-red-500 text-xs mb-1 min-h-[20px]">{errors.message?.message}</p>
                    <textarea
                        {...register('message', { required: 'Message is required' })}
                        className="w-full px-4 py-3 pl-3 border rounded-lg text-gray-700 focus:outline-none"
                        rows="4"
                        placeholder="Message"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 ${isValid ? 'bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
