'use client';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

function ContactForm() {
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm({
        mode: "onChange"
    });
    const [otpSent, setOtpSent] = useState(false);
    const [otpValues, setOtpValues] = useState(Array(6).fill('')); // Array to store OTP digits
    const watchAllFields = watch();
    const otpRefs = Array.from({ length: 6 }, () => useRef(null));

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

    const sendOtp = async () => {
        try {
            const response = await fetch('/api/sentOtp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber: watchAllFields?.phone }),
            });
            const data = await response.json();
            if (data?.success) {
                setOtpSent(true);
                toast.success("OTP sent Successfully")
            }
        } catch (error) {
            toast.error('Error sending OTP:', error);
        }
    };

    const verifyOtp = async () => {
        const otp = otpValues.join(''); // Combine OTP values into a single string
        try {
            const response = await fetch('/api/verifyOtp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber: watchAllFields?.phone, otp }),
            });
            const data = await response.json();
            if (data.success) {
                toast.success("OTP Verified!");
                setOtpSent(false);
            } else {
                toast.error("Invalid OTP!");
            }
        } catch (error) {
            toast.error('Error verifying OTP:', error);
        }
    };

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (/^\d$/.test(value) || value === '') { // Ensure only digits are entered
            const newOtpValues = [...otpValues];
            newOtpValues[index] = value;
            setOtpValues(newOtpValues);

            // Move focus to the next input if the current one is filled
            if (value && index < otpRefs.length - 1) {
                otpRefs[index + 1].current.focus();
            }
        }
    };

    return (
        <div className="bg-white relative text-gray-700 rounded-3xl shadow-lg p-8 max-w-3xl mx-auto mb-10 md:mb-14 xl:mb-20 border border-gray-300">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="relative">
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
                <div className="relative flex items-baseline gap-4">
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
                        onClick={() => sendOtp()}
                        className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-medium py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
                    >
                        {otpSent ? "OTP Sent" : "Send OTP"}
                    </button>
                </div>

                {/* OTP Verification Fields */}
                {otpSent && (
                    <div className="flex flex-row justify-between items-baseline space-y-4">
                        <div className="flex gap-2">
                            {otpValues.map((_, index) => (
                                <input
                                    key={index}
                                    ref={otpRefs[index]}
                                    type="text"
                                    maxLength="1"
                                    className="w-20 h-12 text-center border rounded-md text-gray-700 focus:outline-none"
                                    placeholder="-"
                                    value={otpValues[index]}
                                    onChange={(e) => handleOtpChange(e, index)}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => verifyOtp()}
                            className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-medium py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 mt-0"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}

                {/* Message */}
                <div className="relative">
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
