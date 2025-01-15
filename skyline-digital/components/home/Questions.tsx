"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { QUESTIONSANSWERSINFO } from "@/constants";
import React from "react";
import Image from "next/image";
import questionBg from "@/app/assets/images/questionbg.svg"
export function Questions() {
    return (
        <div className=" max-container-width pt-200 lg:pt-100 relative">
            <div className="absolute -z-10 top-14 ">
                <Image src={questionBg} alt="question"/>
            </div>
            <div className="max-container ">
                <h4 className="lg:text-lg">Вопросы и ответы</h4>

                <Accordion type="single" collapsible className="w-full mt-50 lg:mt-4">
                    {QUESTIONSANSWERSINFO.map((item, index) => (
                        <AccordionItem
                            value={`value-${index + 1}`}
                            key={index}
                            className="border-t     "
                        >
                            <AccordionTrigger className="pt-[30px] pb-[25px] lg:pt-5 lg:pb-3">
                                <h6 className="pl-5 lg:pl-0 lg:text-base">
                                    {item.question}
                                </h6>

                            </AccordionTrigger>
                            <AccordionContent className="opacity-60 pl-5 lg:pl-0 lg:text-xs">
                                {item.answer}
                            </AccordionContent>


                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </div>

    );
}
