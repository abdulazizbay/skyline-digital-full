import { LeaveRequestLink } from "@/components/Buttons";
import { historyCompanyInfo, HOMECOMPANYINFO} from "../constants";
import React from "react"
export const BannerPost = (props) => {
    const infoArray = props.pageName === "home" ? HOMECOMPANYINFO : historyCompanyInfo;

    return (
        <div className="mx-auto pt-100 lg:pt-15 max-container-width overflow-hidden relative">
            <div className="w-[200px] h-[200px]   absolute right-0 bg-blue7 blur-100 rounded-full  neon-shadow-box-light translate-x-52">
            </div>
            <div className=" mx-auto items-center flexBetween lg:flexCol  lg:gap-11 " style={{ maxWidth: props.contMaxW }}>
                <div className="w-[577px] sm:w-[363px]">
                    <h3 className="text-38 bold-700 lg:text-xl">
                        <span className="blue-main">{props.highlightTitle}</span> {props.desc}
                    </h3>
                    <p className="pt-5 bold-500 lg:text-sm lg:pt-4">
                        Lorem ipsum dolor sit amet consectetur. Faucibus euismod eget tortor maecenas.
                        Erat nisi purus a aliquet habitant placerat. Porttitor fermentum laoreet libero
                        quisque urna porta augue nunc et.
                    </p>
                    <div className="pt-50 lg:pt-0 lg:float-right  overflow-visible ">
                        <LeaveRequestLink />
                    </div>
                </div>
                <ul className="flex gap-14 lg:gap-7 sm:w-[363px]">
                    {infoArray.map((item, key) => (
                        <li key={key} className="w-[140px] lg:w-full text-center">
                            <h1 className="blue-main bold-600 lg:text-2xl ">{item.num}</h1>
                            <p className="bold-600 lg:text-xs ">{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};