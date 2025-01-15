"use client"
import {faceOfCompanyInfo, PRINCIPLESINFO} from "@/constants";
import {LeaveRequestLink} from "@/components/Buttons";
import {Reviews} from "@/components/aboutus/Reviews";
import React from "react"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

interface Principle {
    title: string;
    desc: string;
}

export const Principles = () => {
    return (
        <div className="max-container-width  pt-150 lg:pt-50 relative overflow-hidden">
            <div className="w-200 h-400  mt-[150px] absolute bg-blue5  rounded-full  neon-shadow-box blur-100 -right-20  ">
            </div>
            <div className="max-container">
                <h4 className="lg:hidden" >Наши принципы</h4>

                {/* Carousel for mobile */}
                {/*<div className="md:hidden">*/}
                {/*    <Carousel showArrows={true} infiniteLoop={true} useKeyboardArrows>*/}
                {/*        {PRINCIPLESINFO.map((item: Principle, key: number) => (*/}
                {/*            <div key={key} className=" p-4 rounded shadow">*/}
                {/*                <h6>#{key + 1}</h6>*/}
                {/*                <h6 className="font-bold">{item.title}</h6>*/}
                {/*                <p>{item.desc}</p>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </Carousel>*/}
                {/*</div>*/}

                <ul className="grid  grid-cols-3  gap-12 pt-50 lg:hidden">
                    {PRINCIPLESINFO.map((item: Principle, key: number) => (
                        <li key={key} className="bold-600 w-[330px]">
                            <h6 className="blue-main">#{key + 1}</h6>
                            <h6 className="text-2xl">{item.title}</h6>
                            <p className="bold-400 text-base">{item.desc}</p>
                        </li>
                    ))}
                </ul>

                <Carousel className="w-full mx-auto max-w-[300px] hidden lg:block">
                    <CarouselContent className=" ">
                        {PRINCIPLESINFO.map((item: Principle, index: number) => (
                            <CarouselItem key={index} className="">
                                <Card className="shadow-none">
                                    <CardContent className="text-center ">
                                        <h6 className="text-blue-main bold-600 lg:text-base">#{index + 1}</h6>
                                        <h6 className=" bold-600 mt-2.5 lg:text-base ">
                                            {item.title}
                                        </h6>
                                        <p className="text-base mt-2.5 lg:text-xs">{item.desc}</p>

                                    </CardContent>
                                </Card>

                            </CarouselItem>

                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>



                <div className="pt-100 w-400 md:w-full">
                    <h4 className="bold-600 lg:text-base">Клиенты о нас</h4>
                    <p className="text-base pt-2.5 lg:text-xs ">Создаем стильные и функциональные веб-сайты, которые привлекают внимание и удобны в использовании. </p>
                    <div className="pt-7 lg:pt-4">
                        <LeaveRequestLink/>
                    </div>

                </div>

            </div>
            <Reviews/>

        </div>


    );
};


