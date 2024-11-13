// import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import { useState } from 'react'
// import { UserIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';
// import { CiMail } from 'react-icons/ci';
// import { BsGrid } from "react-icons/bs";
// import { FiPhoneCall } from "react-icons/fi";
// import { GiWorld } from "react-icons/gi";
// import { TiMessages } from "react-icons/ti";
// import { AiOutlineMessage } from "react-icons/ai";
// import { CgClose } from 'react-icons/cg';

// function Example({ isOpen, setIsOpen }) {
//     const [fileName, setFileName] = useState('');

//     const handleFileChange = (e) => {
//         if (e.target.files.length > 0) {
//             setFileName(e.target.files[0].name);
//         }
//     };

//     return (
//         <>
//             <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//                 <div className="fixed inset-0 bg-[#141212d6] w-screen overflow-y-auto p-4">
//                     <div className="flex min-h-full items-center justify-center">
//                         <DialogPanel className="max-w-lg">
//                             <div className=' relative'>
//                                 <div className='bg-gradient-to-r cursor-pointer flex justify-center items-center from-[#080a62] to-[#dc3d52] absolute z-40 right-[-8px] top-[-8px] h-8 w-8 rounded-full'
//                                     onClick={() => { setIsOpen(false) }}
//                                 >
//                                     <CgClose className="text-white" />
//                                 </div>
//                                 <div className="bg-white relative text-gray-700 rounded-3xl shadow-lg p-8 max-w-3xl mx-auto">
//                                     {/* <form> */}
//                                     {/* First Name & Last Name */}
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                                         <div className='relative'>
//                                             <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                                             <input
//                                                 type="text"
//                                                 className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
//                                                 placeholder="First Name"
//                                             />
//                                         </div>
//                                         <div className=' relative'>
//                                             <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                                             <input
//                                                 type="text"
//                                                 className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
//                                                 placeholder="Last Name"
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Email & Phone */}
//                                     <div className="grid relative grid-cols-1 gap-6 mb-6">
//                                         <CiMail className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                                         <input
//                                             type="email"
//                                             className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
//                                             placeholder="Email"
//                                         />
//                                     </div>
//                                     {/* Country & Query */}
//                                     <div className="grid grid-cols-1 gap-6 mb-6">
//                                         <div className='relative'>
//                                             <GiWorld className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                                             <input
//                                                 type="text"
//                                                 className="w-full px-4 pl-9 py-3 border rounded-lg text-gray-700 focus:outline-none"
//                                                 placeholder="Portfolio link"
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Message */}
//                                     <div className="mb-6 relative">
//                                         <AiOutlineMessage className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
//                                         <textarea
//                                             className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
//                                             rows="4"
//                                             placeholder="Message"
//                                         ></textarea>
//                                     </div>
//                                     <div className=" flex gap-4 items-center">
//                                         {/* Hidden file input */}
//                                         <input
//                                             type="file"
//                                             id="file-upload"
//                                             className="hidden"
//                                             onChange={handleFileChange}
//                                         />

//                                         {/* Custom label as button */}
//                                         <label
//                                             htmlFor="file-upload"
//                                             className="cursor-pointer w-fit bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-secondary transition-all duration-300"
//                                         >
//                                             Resume
//                                         </label>

//                                         {/* Display selected file name */}
//                                         {fileName && (
//                                             <p className="text-sm text-gray-600">
//                                                <span className="font-semibold">{fileName}</span>
//                                             </p>
//                                         )}
//                                     </div>

//                                     {/* Submit Button */}
//                                     <div className="text-center mt-4">
//                                         <button
//                                             // onClick={() => { sendEmail() }}
//                                             type="submit"
//                                             className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg"
//                                         >
//                                             Submit
//                                         </button>
//                                     </div>
//                                     {/* </form> */}
//                                 </div>
//                             </div>
//                         </DialogPanel>
//                     </div>
//                 </div>
//             </Dialog>
//         </>
//     )
// }

// export default Example


import { Dialog, DialogPanel } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { UserIcon } from '@heroicons/react/24/outline';
import { CiMail } from 'react-icons/ci';
import { GiWorld } from 'react-icons/gi';
import { AiOutlineMessage } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "emailjs-com";

function Example({ isOpen, setIsOpen }) {
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState(false)

    const { register, handleSubmit, reset, setValue, watch, formState: { errors }, trigger } = useForm();
    // Function to convert file to Base64
    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file?.name);
            const base64File = await toBase64(file);
            setValue('resume', base64File, {
                shouldValidate: true,
                shouldDirty: true
            });
            setError(false)
        }
    };

    const watchAllFields = watch()

    const onSubmit = (data) => {
        if (!watchAllFields?.resume) {
            return setError(true)
        }
        const payload = {
            first_name: data?.first_name,
            last_name: data?.last_name,
            email: data?.email,
            phone: data?.phone,
            message: data?.message,
            portfolio: data?.portfolioLink,
            resume: data?.resume
        }
        // emailjs
        //     .send(
        //         "service_k1ljime",    // Replace with your Service ID
        //         "template_yuqhf7i",   // Replace with your Template ID
        //         { ...payload },
        //         "I2BWxdeGqnYXk0FDi"        // Replace with your User ID
        //     )
        //     .then(
        //         (result) => {
        //             alert("Email sent successfully!");
        //         },
        //         (error) => {
        //             alert("Failed to send email. Try again later.");
        //         }
        //     );
        setIsOpen(false);
        setFileName("")
        reset()
    };

    return (
        <Dialog open={isOpen} onClose={() => {
            setIsOpen(false)
            reset()
            setFileName("")
        }} className="relative z-50">
            <div className="fixed inset-0 bg-[#141212d6] w-screen overflow-y-auto p-4">
                <div className="flex min-h-full items-center justify-center">
                    <DialogPanel className="max-w-xl">
                        <div className="relative">
                            <div className="bg-gradient-to-r cursor-pointer flex justify-center items-center from-[#080a62] to-[#dc3d52] absolute z-40 right-[-8px] top-[-8px] h-8 w-8 rounded-full"
                                onClick={() => {
                                    setIsOpen(false)
                                    reset()
                                    setFileName("")
                                }}>
                                <CgClose className="text-white" />
                            </div>
                            <div className="bg-white relative text-gray-700 rounded-3xl shadow-lg p-8 max-w-3xl mx-auto">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* First Name & Last Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="relative">
                                            <UserIcon className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                            <input
                                                {...register('first_name', { required: 'First name is required' })}
                                                type="text"
                                                className="w-full px-4 py-3 pl-9 outline- border rounded-lg text-gray-700 focus:outline-none"
                                                placeholder="First Name"
                                            />
                                            {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
                                        </div>
                                        <div className="relative">
                                            <UserIcon className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                            <input
                                                {...register('last_name', { required: 'Last name is required' })}
                                                type="text"
                                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
                                                placeholder="Last Name"
                                            />
                                            {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="relative grid-cols-1 gap-6 mb-6">
                                        <CiMail className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                        <input
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                            type="email"
                                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
                                            placeholder="Email"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 mb-6">
                                        <div className='relative'>
                                            <FiPhoneCall className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                                            <input
                                                type="number"
                                                {...register('phone', { required: 'Phone number is required' })}
                                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
                                                placeholder="Phone"
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                    </div>

                                    {/* Portfolio Link */}
                                    <div className="relative grid-cols-1 gap-6 mb-6">
                                        <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                        <input
                                            {...register('portfolioLink', {
                                                required: 'Portfolio link is required',
                                                pattern: {
                                                    value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*\/?$/,
                                                    message: 'Please enter a valid URL'
                                                }
                                            })} type="text"
                                            className="w-full px-4 pl-9 py-3 border rounded-lg text-gray-700 focus:outline-none"
                                            placeholder="Portfolio Link"
                                        />
                                        {errors.portfolioLink && <p className="text-red-500 text-xs mt-1">{errors.portfolioLink.message}</p>}
                                    </div>

                                    {/* Message */}
                                    <div className="relative mb-6">
                                        <AiOutlineMessage className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                        <textarea
                                            {...register('message')}
                                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none"
                                            rows="4"
                                            placeholder="Message"
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                    </div>

                                    {/* File Upload */}
                                    <div className="flex gap-4 items-center">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer w-fit bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-secondary transition-all duration-300"
                                        >
                                            Resume
                                        </label>
                                        {fileName && <p className="text-xs text-gray-600"><span className="font-semibold">{fileName}</span></p>}
                                        {error && <p className="text-red-500 text-xs mt-1">Please upload resume to proceed!</p>}

                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center mt-4">
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}

export default Example;
