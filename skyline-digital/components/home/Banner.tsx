"use client"
import { ButtonCircle, ScrollDownRoundedShape } from "@/components/Buttons";
import Image from "next/image";
import bannerBg from "@/app/assets/images/bannerbg.svg"

export const HomeBanner = () => {
    return (
        <div className="pt-200 w-full  mx-auto lg:mt-12 max-container-width relative overflow-hidden">
            <div className="absolute mt-[210px] lg:mt-100 lg:opacity-100 -z-10 opacity-80 blur-sm">
                <Image src={bannerBg} alt="ddd" />
            </div>
            <div className="w-[450px] h-650 lg:w-[200px] lg:h-[200px] md:mt-300 absolute bg-blue5 md:bg-blue7 blur-100 rounded-full  neon-shadow-box-light -translate-x-40">
            </div>
            <div className=" max-w-[1192px] mx-auto ">
                <div
                    className="neon-shadow-white text-center "
                    style={{ transform: "rotate(1.6deg)" }}
                >
                    <div className="inline-block ">
                        <h1 className="text-[91px] font-bold pl-[90px] lg:pl-8 lg:text-3xl italic">SKYLINE DIGITAL</h1>
                        <h2 className="text-[52px] font-semibold mt-4 float-left lg:text-lg italic ">YOUR DIGITAL FUTURE</h2>
                    </div>
                </div>
                <div className="flexBetween relative">

                    <div className="mt-[309px] lg:mt-[65px] ">
                        <ScrollDownRoundedShape
                            RoundedtextColor = "#0DA4F5"
                            imageType = "scrollDownOvalShape"
                        />
                    </div>

                </div>

            </div>
            <div className=" float-right -translate-x-[200px] -translate-y-[300px] lg:hidden">
                <ButtonCircle isHomePage={true} />

            </div>

        </div>


    );
};
