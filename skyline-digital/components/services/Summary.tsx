"use client";
import lockIcon from "@/app/assets/images/lockSummary.svg";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {removeItem} from "@/redux/progressSlice";
import clockRoundIcon from "@/app/assets/images/clockCirlceSummary.svg";
export const Summary = () => {
    const selectedData = useSelector((state: any) => state.progress.data);
    const [items, setItems] = useState<string[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedData?.items) {
            setItems(selectedData.items);
        }
    }, [selectedData]);
    const handleDelete = (item: string) => {
        dispatch(removeItem(item));
    };
    return (
        <div className="w-[376px] h-auto  py-50 bg-blue5 px-6 bold-500 rounded-3xl lg:py-6 lg:px-4 md:mx-auto">
            <h4 className="lg:text-2xl">Краткой содержание</h4>
            <div className=" mt-30">
                <div className="flex gap-2.5 items-center">
                    <Image src={lockIcon} alt="lock icon"  width={27} height={30}/>
                    <h6 className="text-base">${selectedData?.totalPrice || 0}</h6>
                </div>
                  <div className="flex gap-2.5 items-center mt-9">
                      <Image src={clockRoundIcon} alt="lock icon" />
                      <h6 className="text-base">{selectedData?.totalTime || 0} часов</h6>
                  </div>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 lg:mt-5 lg:gap-4 ">
                {items && items.length > 0 ? (
                    items.map((item, index) => (
                        <div
                            key={index}
                            className="w-[153px] h-[34px] bg-blue6 rounded-[12px]  gap-2.5  flex justify-center items-center "
                        >
                            <p className="text-xs bold-500">
                                {item}
                            </p>
                            <div
                                className="relative w-[11px] h-[2px] hover:cursor-pointer"
                                onClick={() => handleDelete(item)}
                            >
                                <div className="absolute inset-0 w-full h-[10%] bg-white rotate-45 shadow-white"></div>
                                <div className="absolute inset-0 w-full h-[10%] bg-white -rotate-45"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Не Выбрано</p>
                )}
            </div>
            <div className="mt-5 px-[25px] py-50 text-center bg-blue5 rounded-xl">
                <p className="text-base bold-500 ">
                    У вас уже есть<br/>
                    требования ? <span className="blue-main"><Link href="/">Закажите звонок</Link></span> для
                    подробного расчета
                </p>

            </div>

        </div>
    );
};
