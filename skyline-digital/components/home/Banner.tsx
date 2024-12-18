"use client"
import { ButtonCircle, ScrollDownRoundedShape } from "@/components/Buttons";
import skylineBg from "@/app/assets/images/skylinebg.svg"
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <div className="mt-200 w-full max-w-[1192px] mx-auto lg:mt-12 ">
            <div
                className="neon-shadow-white text-center "
                style={{ transform: "rotate(1.6deg)" }}
            >
                <div className="inline-block ">

                    <h1 className="text-[91px] font-bold pl-[90px] lg:pl-8 lg:text-3xl">SKYLINE DIGITAL</h1>
                    <h2 className="text-[52px] font-semibold mt-4 float-left lg:text-lg">YOUR DIGITAL FUTURE</h2>
                </div>
            </div>
            <div className="flexBetween">
                <div className="mt-[309px] lg:mt-[65px]">
                    <ScrollDownRoundedShape
                        RoundedtextColor = "#0DA4F5"
                        imageType = "scrollDownOvalShape"
                    />
                </div>
                <div className="mt-[120px] lg:mt-10">
                    <ButtonCircle />
                </div>
            </div>
        </div>
    );
};
