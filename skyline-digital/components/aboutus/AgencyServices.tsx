"use client";

import { useState } from "react";
import Image from "next/image";
import BracketsIcon from "@/app/assets/images/brackets.svg";
import { AGENCYSERVICESCHOICES as choices } from "@/constants/index";

export const AgencyServices = () => {
    const totalIcons = choices.length;
    const [centerIndex, setCenterIndex] = useState<number>(4);

    const positions = [
        "top-0 left-0",
        "top-0 right-0",
        "bottom-0 right-0  mr-[125px]",
        "bottom-0 left-0 ml-[125px]",
        "center",
    ];

    const getPositionClass = (index: number): string => {
        if (index === centerIndex) return positions[4];

        const relativeIndex =
            (index - centerIndex + totalIcons) % totalIcons;

        return positions[relativeIndex] || "";
    };

    const handleClick = (clickedIndex: number) => {
        setCenterIndex(clickedIndex);
    };

    return (
        <div className="max-container-width pt-150 lg:pt-50 relative overflow-hidden">
            <div className="w-[200px] h-[300px] -translate-x-[30px] mt-[120px] absolute bg-blue5 rounded-full neon-shadow-bg blur-100"></div>
            <div className="w-[200px] h-[300px] mt-[100px] absolute bg-blue5 rounded-full neon-shadow-bg blur-100 -right-20"></div>
            <div className="max-container">
                <div className="text-2xl font-bold lg:text-xs inline-block">
                    Услуги агентства
                    <div className="mt-2 h-[2px] bg-white w-2/5"></div>
                </div>
                {/* other icons */}
                <div className="relative w-full mt-100 lg:mt-8">
                    {choices.map((choice, index) => {
                        if (index !== centerIndex) {
                            return (
                                <div
                                    key={index}
                                    className={`absolute ${getPositionClass(index)} cursor-pointer flexCenter w-[70px] h-[70px] bg-gray2 blur-[1px] lg:w-6 lg:h-6`}
                                    onClick={() => handleClick(index)}
                                    style={{ borderRadius: "25%" }}
                                >
                                    <Image
                                        src={choice.image}
                                        alt={choice.label}
                                        width={42}
                                        height={42}
                                        className="lg:w-[14px] lg:h-[14px] "
                                    />
                                </div>

                            );
                        }
                        return null;
                    })}

                    {/*center icon*/}
                    <div className="flexCol items-center text-center">
                        <div className="w-[50px] h-[50px]  absolute bg-blue5 rounded-full neon-shadow-box mt-[240px] blur-lg"></div>

                        <div className="flex space-x-1">
                            <Image
                                src={BracketsIcon}
                                alt="Brackets Icon"
                                className="lg:w-[6px] lg:h-2.5"
                            />
                            <Image
                                src={BracketsIcon}
                                alt="Brackets Icon"
                                className="lg:w-[6px] lg:h-2.5"
                            />
                        </div>
                        <div className="mt-5 w-[550px] md:w-200">
                            <p className="bold-700 lg:text-xs">
                                {choices[centerIndex].text}
                            </p>
                        </div>

                        <div
                            className="w-[100px] h-[100px] bg-gray2 flexCenter mt-6 lg:w-[34px] lg:h-[34px]"
                            style={{ borderRadius: "25%" }}
                        >
                            <Image
                                src={choices[centerIndex].image}
                                alt={choices[centerIndex].label}
                                width={42}
                                height={42}
                                className="lg:w-[14px] lg:h-[14px]"
                            />
                        </div>
                        <p className="bold-700 mt-5 lg:text-xs">
                            {choices[centerIndex].label}
                        </p>
                        <p className="bold-700 mt-2.5 lg:text-xs">
                            {choices[centerIndex].label2}
                        </p>
                        <div className="flex space-x-2 mt-8">
                            {choices.map((_, index) => (
                                <span
                                    key={index}
                                    className={`h-2.5 w-2.5 rounded-full border-[1px] cursor-pointer border-blue-main lg:w-1 lg:h-1 ${
                                        index === centerIndex ? "bg-blue-600" : ""
                                    }`}
                                    onClick={() => handleClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
