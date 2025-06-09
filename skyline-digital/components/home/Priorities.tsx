"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LeaveRequestLink } from "@/components/Buttons";
import { Card, CardContent } from "@/components/ui/card";
import priorityimage from "@/app/assets/images/priorityImage1.svg"
export const Priorities = ({ priorityKey,imageTitle,mainImage,secTitle, label,desc }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % label.length);
    };


    return (
        <div className="max-container-width  pt-150 lg:pt-100 relative">

            <div className="max-container flexBetween relative overflow-hidden">
                <div className=" hidden md:flex w-[200px] h-[200px] absolute right-0 bg-blue7 blur-100 rounded-full  neon-shadow-box-light translate-x-52">
                </div>

                <div className="max-w-[300px] lg:w-100">
                    <span className="text-5xl blue-main bold-700 lg:text-xl">{priorityKey}#</span>
                    <h2 className="bold-700 lg:text-xl">{imageTitle}</h2>

                    <Image
                        src={mainImage}
                        alt={`${imageTitle} Main Image`}
                        className="pt-[75px] mx-auto lg:pt-7 lg:w-[62px] lg:h-[177px] "
                    />

                </div>

                <div className=" hidden lg:flex w-full sm:w-[246px] gap-4 mx-auto  pt-[87px]">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-600"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {label.map((labelItem, index) => (
                                <div key={index} className="flex-shrink-0 w-full">
                                    <Card className="p-0 ">
                                        <CardContent className=" p-0">
                                            <h6 className="bold-600 text-lg">{labelItem}</h6>
                                            <p className="text-xs mt-4">{desc[index]}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            className="text-blue-main"
                            onClick={handleNext}
                            aria-label="Next"
                        >
                            →
                        </button>
                    </div>
                </div>
                <div className="w-700 lg:hidden">
                    <h6 className="bold-600">{secTitle}</h6>
                    <div className="pt-7">
                        <div className="grid grid-cols-2 gap-y-[50px] gap-x-6">
                            {label.map((labelItem, index) => (
                                <div key={index}>
                                    <h6 className="bold-600">{labelItem}</h6>
                                    <p className="text-base pt-2.5">{desc[index]}</p>
                                </div>
                            ))}
                            <LeaveRequestLink />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
