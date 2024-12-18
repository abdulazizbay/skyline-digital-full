"use client"
import Image from "next/image";
import bannerImage from "../../app/assets/images/bannerImage.svg";
import { ButtonCircle, ScrollDownRoundedShape } from "@/components/Buttons";
import React from "react";

export const Banner = () => {
    return (
        <div className="max-container  pt-24 ">
            <div className="flex gap-[136px]  lg:gap-6">
                <div className=" ">
                    <Image
                        // width={400}
                        // height={415}
                        src={bannerImage}
                        alt="banner image"
                        className=" w-400  "
                    />
                </div>
                <div className="justify-center my-auto">
                    <h1 className="text-4xl bold-700 lg:text-base">
                        <span className="text-blue-400">SKYLINE</span> - это исключительна уникальная кампания
                    </h1>
                    <div className="text-xl pt-5 lg:text-xs lg:pt-1.5">
                        Lorem ipsum dolor sit amet consectetur.
                        Faucibus euismod eget tortor maecenas.
                        Erat nisi purus a aliquet habitant placerat.
                    </div>
                </div>

            </div>

            <div className="flex justify-between items-center">
                {/* ScrollDownRoundedShape on the left */}
                <div className="pt-[217px] flex-shrink-0">
                    <ScrollDownRoundedShape
                        RoundedtextColor="#0DA4F5"
                        imageType="scrollDownOvalShape"
                    />
                </div>

                {/* ButtonCircle on the right */}
                <div className="flex justify-end mt-7 lg:pt-16 flex-grow">
                    <ButtonCircle />
                </div>
            </div>

        </div>
    );
};
