"use client";
import { KNOWINGLANGINFO } from "@/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollDownRoundedShape } from "@/components/Buttons";
import arrowScroll from "@/app/assets/images/arrowScroll.svg";

export const KnowingLang = () => {
    return (
        <div className="pt-150 lg:pt-100 max-container-width relative">
            <div className="w-200 h-[200px] bg-blue9 absolute -z-10 right-28 mt-300 blur-150 lg:hidden">

            </div>
            <div className="max-container ">
                <div className="flexCol gap-[50px] font-Inter lg:overflow-x-auto  ">
                    {KNOWINGLANGINFO.map((item, index) => (
                        <div key={index} className="flex gap-6 min-w-[250px]">
                            <div className="w-[250px] lg:hidden">
                                <h6 className="bold-700">{item.label}</h6>
                                <p className="text-base pt-6">{item.desc}</p>
                            </div>
                            <div className="flex gap-6 ">
                                {item.icons.map((icon, i) => (
                                    <Image key={i} src={icon} alt="single icon" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flexBetween pt-[110px]">
                    <div className="flexBetween w-full ">
                        <div>
                            <p className="opacity-70 text-base">Портфолио компании</p>
                            <h6 className="bold-600 pt-2.5 text-lg">
                                Более <span className="blue-main">100+</span> проектов<br /> за 3 года работы
                            </h6>
                        </div>

                        <div className="flex justify-end mt-auto ">
                            <Button
                                asChild
                                className="w-[232px] h-[54px] lg:w-[141px] lg:h-[39px] rounded-[100px] bg-gradient-to-r from-[#0DA4F5] via-[#075EFF] to-[#075EFF] hover:opacity-90 flex items-center justify-center"
                            >
                                <p>
                                    <Link href="/">
                                        Все проекты
                                    </Link>
                                </p>

                            </Button>
                        </div>
                    </div>

                    <div className="ml-[70px] lg:hidden">
                        <ScrollDownRoundedShape selectedIcon={arrowScroll} imageType="arrowDown" />
                    </div>
                </div>

            </div>
        </div>

    );
};
