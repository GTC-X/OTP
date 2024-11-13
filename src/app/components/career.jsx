'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // For arrow icons
import UploadResume from '../components/uploadResume'

const CareerList = ({ data, isOpen, setIsOpen }) => {
    const [show, setShow] = useState(false)
    const toggleAccordion = () => {
        setIsOpen(isOpen == data?.id ? "" : data?.id);
    };
    return (
        <div className="px-6">
            {/* Accordion Section */}
            <div className="max-w-4xl mx-auto border border-primary bg-white rounded-xl shadow-lg p-8">
                <div className="">
                    {/* Accordion Header */}
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleAccordion()}
                    >
                        <div>
                            <h2 className="text-xl font-semibold text-primary">
                                {data?.jobTitle || ""}
                            </h2>
                            <p className="text-gray-500">Location: {data?.location || ""}</p>
                        </div>
                        {/* Arrow Icon */}
                        <div>
                            {isOpen == data?.id ? (
                                <FiChevronUp className="text-primary w-6 h-6" />
                            ) : (
                                <FiChevronDown className="text-primary w-6 h-6" />
                            )}
                        </div>
                    </div>

                    {/* Accordion Content (Job Details) */}
                    <div
                        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen == data?.id ? 'max-h-full' : 'max-h-0'}`}
                    >
                        {isOpen === data?.id && (
                            <div className="mt-4">
                                {/* Company Overview */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4">
                                        Company Overview:
                                    </h3>
                                    <p className="text-gray-600">
                                        {data?.companyOverview || ""}
                                    </p>
                                </div>

                                {/* Position Overview */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4">
                                        Position Overview:
                                    </h3>
                                    <p className="text-gray-600">
                                        {data?.positionOverview || ""}
                                    </p>
                                </div>

                                {/* Other sections (Key Responsibilities, Requirements, etc.) */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4">
                                        Key Responsibilities:
                                    </h3>
                                    <ul className="list-disc ml-6 text-gray-600">
                                        {data?.keyResponsibilities?.map((item, i) =>
                                            <li key={i}>{item || ""}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4">
                                        Day-to-Day Tasks:
                                    </h3>
                                    <ul className="list-disc ml-6 text-gray-600">
                                        {data?.dayToDayTasks?.map((item, i) =>
                                            <li key={i}>{item || ""}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4">
                                        Requirements:
                                    </h3>
                                    <ul className="list-disc ml-6 text-gray-600">
                                        {data?.requirements?.experience &&
                                            <li><b>Experience:</b> {data?.requirements?.experience || ""}</li>
                                        }
                                        {data?.requirements?.writingSkills &&
                                            <li><b>Writing Skills:</b> {data?.requirements?.writingSkills || ""}</li>
                                        }
                                        {data?.requirements?.seoKnowledge &&
                                            <li><b>SEO Knowledge:</b> {data?.requirements?.seoKnowledge || ""}</li>
                                        }
                                        {data?.requirements?.researchSkills &&
                                            <li><b>Research Skills:</b> {data?.requirements?.researchSkills || ""}</li>
                                        }
                                        {data?.requirements?.creativity &&
                                            <li><b>Creativity:</b> {data?.requirements?.creativity || ""}</li>
                                        }
                                        {data?.requirements?.timeManagement &&
                                            <li><b>Time Management:</b> {data?.requirements?.timeManagement || ""}</li>
                                        }
                                        {data?.requirements?.communication &&
                                            <li><b>Communication:</b> {data?.requirements?.communication || ""}</li>
                                        }
                                        {data?.requirements?.creativityStorytelling &&
                                            <li><b>Creativity & Storytelling:</b> {data?.requirements?.creativityStorytelling || ""}</li>
                                        }
                                        {data?.requirements?.attentionToDetail &&
                                            <li><b>Attention to Detail:</b> {data?.requirements?.attentionToDetail || ""}</li>
                                        }
                                        {data?.requirements?.portfolio &&
                                            <li><b>Portfolio:</b> {data?.requirements?.portfolio || ""}</li>
                                        }
                                        {data?.requirements?.adaptability &&
                                            <li><b>Adaptability:</b> {data?.requirements?.adaptability || ""}</li>
                                        }
                                        {data?.requirements?.creativeProblemSolving &&
                                            <li><b>Creative Problem-Solving:</b> {data?.requirements?.creativeProblemSolving || ""}</li>
                                        }
                                        {data?.requirements?.techSavvy &&
                                            <li><b>Tech-Savvy:</b> {data?.requirements?.techSavvy || ""}</li>
                                        }
                                        {data?.requirements?.goGetterAttitude &&
                                            <li><b>Go-Getter Attitude:</b> {data?.requirements?.goGetterAttitude || ""}</li>
                                        }
                                        {data?.requirements?.relationshipBuilding &&
                                            <li><b>Relationship Building:</b> {data?.requirements?.relationshipBuilding || ""}</li>
                                        }
                                        {data?.requirements?.problemSolvingSkills &&
                                            <li><b>Problem-Solving Skills:</b> {data?.requirements?.problemSolvingSkills || ""}</li>
                                        }
                                        {data?.requirements?.salesSkills &&
                                            <li><b>Sales Skills:</b> {data?.requirements?.salesSkills || ""}</li>
                                        }
                                        {data?.requirements?.analyticalSkills &&
                                            <li><b>Analytical Skills:</b> {data?.requirements?.analyticalSkills || ""}</li>
                                        }
                                        {data?.requirements?.knowledgeOfAlgorithms &&
                                            <li><b>Knowledge of Algorithms:</b> {data?.requirements?.knowledgeOfAlgorithms || ""}</li>
                                        }
                                        {data?.requirements?.contentOptimization &&
                                            <li><b>Content Optimization:</b> {data?.requirements?.contentOptimization || ""}</li>
                                        }
                                        {data?.requirements?.creativeStrategicThinking &&
                                            <li><b>Creative & Strategic Thinking:</b> {data?.requirements?.creativeStrategicThinking || ""}</li>
                                        }
                                        {data?.requirements?.technicalSkills?.length > 0 &&
                                            <li><b>Technical Skills:</b>
                                                <ul className="list-disc ml-6 text-gray-600">
                                                    {data?.requirements?.technicalSkills?.map(single =>
                                                        <li> {single || ""}</li>
                                                    )}
                                                </ul>
                                            </li>
                                        }
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4">
                                        Nice-to-Have:
                                    </h3>
                                    <ul className="list-disc ml-6 text-gray-600">
                                        {data?.niceToHave?.map((item, i) =>
                                            <li key={i}>{item || ""}</li>
                                        )}
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4">
                                        Benefits:
                                    </h3>
                                    <ul className="list-disc ml-6 text-gray-600">
                                        {data?.benefits?.map((item, i) =>
                                            <li key={i}>{item || ""}</li>
                                        )}
                                    </ul>
                                </div>
                                {/* Apply Button */}
                                <div className="text-center mt-8">
                                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-all duration-300"
                                        onClick={() => { setShow(true) }}
                                    >
                                        Apply Now
                                    </button>
                                    <UploadResume isOpen={show} setIsOpen={setShow} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerList