"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Summary } from "@/components/services/Summary";
import { ContactForm } from "@/components/ContactForm";
import { ScrollDownRoundedShape } from "@/components/Buttons";

const NextStepPage = () => {
    const selectedData = useSelector((state: any) => state.progress.data);
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        if (selectedData?.items) {
            setItems(selectedData.items);
        }
    }, [selectedData]);

    return (
        <div className="max-container pt-70 pb-10 lg:pt-50">
            <div className="">
                <h4 className="bold-700 lg:text-xl">
                    Ваша персональная оценка почти завершена!
                </h4>
                <p className="bold-500 mt-10 leading-6 lg:text-base lg:mt-25 max-w-[642px] sm:max-w-full">
                    Чтобы убедиться в его точности, у нас осталось всего несколько вопросов.
                    Заполните форму или
                    <span className="blue-main">
                        <Link href="/"> Запланируйте звонок </Link>
                    </span>
                    прямо сейчас, чтобы начать свой проект без промедления
                </p>
            </div>
            <div className="mt-100 gap-[58px] flex md:flex-col md:gap-10 md:mt-50 md:block">
                <div className="flex-grow">
                    <Summary />
                </div>
                <div className="flex-grow mt-50">
                    <div className="max-w-full mx-auto md:w-[376px]">
                        <ContactForm role="service" />
                    </div>

                    <div className="mt-[90px] flex float-right md:hidden">
                        <ScrollDownRoundedShape />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextStepPage;
