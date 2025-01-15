"use client"
import Image from "next/image";
import bannerImage from "../../app/assets/images/bannerImage.svg";
import { ButtonCircle, ScrollDownRoundedShape } from "@/components/Buttons";
import React from "react";

export const Banner = () => {
    return (
        <div className="max-container-width pt-24 relative overflow-hidden">
            <div className="w-[600px] h-[450px] -translate-x-[300px] mt-[120px] absolute bg-blue5  rounded-full  neon-shadow-bg blur-100   ">
            </div>
            <div className="max-container ">
                {/*<div className="w-[250px] h-[215px]   absolute bg-blue5  rounded-full  neon-shadow-bg blur-[40px]   ">*/}
                {/*</div>*/}

                <div className="flex gap-[136px]  lg:gap-6">
                    <div className=" ">
                        <Image
                            // width={400}
                            // height={415}
                            src={bannerImage}
                            alt="banner image"
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
                    <div className="pt-[217px] flex-shrink-0">
                        <ScrollDownRoundedShape
                            RoundedtextColor="#0DA4F5"
                            imageType="scrollDownOvalShape"
                        />
                    </div>
                </div>

            </div>
            <div className=" float-right -translate-x-[200px] -translate-y-[200px]">
                <ButtonCircle isHomePage={false} />

            </div>
        </div>

    );
};
