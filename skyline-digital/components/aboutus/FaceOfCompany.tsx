"use client";
import { faceOfCompanyInfo } from "../../constants";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

export const FaceOfCompany = () => {
    return (
        <div className="max-container-width pt-150 lg:pt-50">
            <div className="max-container">
                <h4 className="bold-700 lg:hidden">
                    Лица компании <span className="blue-main">SKYLINE DIGITAL</span>
                </h4>
            </div>
            <Carousel
                className="w-full pt-100 lg:pt-0"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className="flex gap-4 lg:gap-3">
                    {faceOfCompanyInfo.map((item, index) => (
                        <CarouselItem key={index} className="flex-none">
                            <Card className="shadow-none">
                                <CardContent className="flex-col text-center ">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={300}
                                        height={350}
                                        className="lg:w-[120px] lg:h-[140px]   transition duration-1000 ease-in-out grayscale hover:grayscale-0 "
                                    />
                                    <h4 className="pt-5 lg:text-sm lg:pt-2">{item.name}</h4>
                                    <h6 className="text-gray1 text-sm lg:text-[9px]">{item.role}</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};
