"use client";

import { useState } from "react";
import Image from "next/image";
import BracketsIcon from "@/app/assets/images/brackets.svg";
import React from "react";
import {AGENCYSERVICESCHOICES as choices } from "@/constants/index"


const iconPositions = [
    { position: "top-0 left-0", index: 0 },
    { position: "top-0 right-0", index: 1 },
    { position: "bottom-0 left-0", index: 2 },
    { position: "bottom-0 right-0", index: 3 },
];

export const AgencyServices = () => {
    const [centerIndex, setCenterIndex] = useState<number>(4);

    const handleClick = (index: number) => {
        setCenterIndex(index);
    };

    return (
        <div className="max-container pt-150 lg:pt-50">
                <div className="text-2xl font-bold lg:text-xs inline-block">
                    Услуги агентства
                    <div className="mt-2  h-[2px] bg-white w-2/5"></div>
                </div>



        <div className="relative w-full mt-100 lg:mt-8">
                    {iconPositions.map(({ position, index }) => (
                        <div
                            key={index}
                            className={`absolute ${position} cursor-pointer flexCenter w-[70px] h-[70px] bg-gray2 blur-[1px] lg:w-6 lg:h-6`}
                            onClick={() => handleClick(index)}
                            style={{ borderRadius: '25%' }}
                        >
                            <Image src={choices[index].image} alt={choices[index].label} width={42} height={42}
                                className="lg:w-[14px] lg:h-[14px]"
                            />
                        </div>
                    ))}

                    <div className="flexCol items-center text-center ">
                        <div className="flex space-x-1">
                            <Image src={BracketsIcon} alt="Brackets Icon" className="lg:w-[6px] lg:h-2.5"/>
                            <Image src={BracketsIcon} alt="Brackets Icon"  className="lg:w-[6px] lg:h-2.5"/>
                        </div>
                        <div className="mt-5 w-[550px]   md:w-200">
                            <p className="bold-700  lg:text-xs">{choices[centerIndex].text}</p>
                        </div>

                        <div className="w-[100px] h-[100px] bg-gray2  flexCenter mt-6 lg:w-[34px] lg:h-[34px]" style={{ borderRadius: '25%' }}>
                            <Image src={choices[centerIndex].image} alt={choices[centerIndex].label} width={42} height={42}
                                   className="lg:w-[14px] lg:h-[14px]"
                            />
                        </div>
                        <p className="bold-700 mt-5 lg:text-xs">{choices[centerIndex].label}</p>
                        <p className="bold-700 mt-2.5 lg:text-xs">{choices[centerIndex].label2}</p>
                        <div className="flex space-x-2 mt-8">
                            {choices.map((_, index) => (
                                <span
                                    key={index}
                                    className={`h-2.5 w-2.5 rounded-full border-[1px] cursor-pointer border-blue-main lg:w-1  lg:h-1 ${index === centerIndex ? "bg-blue-600" : ""}`}
                                    onClick={() => handleClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

    );
};
