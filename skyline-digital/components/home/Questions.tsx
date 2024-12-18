"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { QUESTIONSANSWERSINFO } from "@/constants";
import {Button} from "@/components/ui/button";
import React from "react";
import { toast } from "sonner"

export function Questions() {
    return (
        <div className="max-container pt-200 lg:pt-100">
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
    );
}
