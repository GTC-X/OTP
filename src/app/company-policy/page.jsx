import React from 'react'
import CompanyPolicySection from '../components/CompanyPolicy/heroSection'
import { policyData } from './policyData'

export const metadata = {
    title: 'Company Policy - Market Mavens',
    description:
        'At Market Mavens, we believe in fostering a productive, innovative, and flexible work environment. As a hybrid model company, we support both in-office and remote work to ensure our team operates at its best, while also delivering top-tier services to our clients. This policy outlines our workplace standards, communication guidelines, and expectations to maintain a thriving and professional work environment.'
};

const CompanyPage = () => {
    return (
        <>
            <CompanyPolicySection />
            <div className='px-6 py-16'>
                <div className="max-w-6xl mx-auto ">
                    {policyData?.map((single, index) =>
                        <>
                            <div key={index} className=' mb-8'>
                                <h2 className="text-2xl md:text-2xl font-semibold text-[#080a62]">{single?.title}</h2>
                                <p className="text-lg text-[#4A4A68] mt-4" dangerouslySetInnerHTML={{ __html: single?.desc }}>
                                </p>
                                <ul className="my-4 space-y-3 pl-7 text-lg text-[#4A4A68]">
                                    {single?.listItem?.map((row, i) =>
                                        <li className="items-start" key={i}>
                                            <span className="text-green-600 mr-2">✔</span>
                                            {row?.title}
                                            <ul typeof='disc' className="my-4 list-disc space-y-3 pl-10 text-lg text-[#4A4A68]">
                                                {row?.children?.map((item, itemRow) => {
                                                    return (
                                                        <li className="items-start" key={itemRow}>
                                                            {item?.title}
                                                        </li>
                                                    )
                                                }
                                                )}
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default CompanyPage