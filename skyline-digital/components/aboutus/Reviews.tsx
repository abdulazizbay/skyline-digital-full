import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { REVIEWSINFO } from "@/constants";
import Autoplay from "embla-carousel-autoplay"
import {SkyLineLogoButton} from "@/components/Buttons";
export function Reviews() {
    return (
        <Carousel
            className="pt-100 lg:pt-50"
            plugins={[
                Autoplay({
                    delay: 2000,

                }),
            ]}
        >
            <CarouselContent className="flex gap-50 lg:px-6">
                {REVIEWSINFO.map((item, index) => (
                    <CarouselItem key={index} className="flex-none w-[396px] h-[238px] lg:basis-full ">
                        <div>
                            <Card>
                                <CardContent className="p-5 bg-black1 rounded-[24px] ">
                                    <div>
                                        <div className="flex justify-between">
                                            <SkyLineLogoButton
                                                wCircle="small"
                                                hCircle="small"
                                                borCircle="small"
                                                wRectangle="small"
                                                hRectangle="small"
                                                borRectangle="thin"
                                                hLine="short"
                                                gapText="small"
                                                sizeTitle="sm"
                                                sizeDesc="xs"
                                                gapAll="small"
                                                role="aboutus"
                                            />
                                            <div className="flex items-center gap-3.5 ">
                                                <span className="text-base text-xs">{item.stars}.0</span>
                                                <Rating rating={item.stars} />
                                            </div>
                                        </div>
                                        <p className="text-base pt-2.5 h-[95px] leading-5 overflow-hidden text-ellipsis lg:text-xs lg:pt-5">
                                            {item.content}
                                        </p>
                                        <div className="pt-10 flex justify-between relative lg:pt-5 ">
                                            <div>
                                                <h3 className="text-base lg:text-xs">{item.author}</h3>
                                                <p className="text-xs text-gray-500 lg:text-[10px]">{item.company}</p>
                                            </div>
                                            <p className="text-xs absolute bottom-0 right-0 lg:text-[10px]">{item.dateOfPost}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

interface RatingProps {
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    const maxStars = 5;

    return (
        <div className="flex">
            {Array.from({ length: maxStars }, (_, index) => {
                const isFilled = index < rating;

                return (
                    <div key={index} className="relative w-5 h-5 lg:w-4 lg:h-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={isFilled ? "currentColor" : "none"}
                            stroke="currentColor"
                            className="absolute inset-0 w-full h-full blue-main"
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </div>
                );
            })}
        </div>
    );
};

export default Rating;
