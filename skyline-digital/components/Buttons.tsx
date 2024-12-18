"use client"
import Link from "next/link";

import Image from "next/image";
import React from "react";
import arrowDownIcon from "@/app/assets/images/arrowScroll.svg"
import scrollDownIcon from "@/app/assets/images/bannerScrollIcon.svg";

export const ButtonCircle = () => {
    return (
        <button
            className=" neon-shadow-box-light lg:w-10 lg:h-10 lg:text-[8px]  w-100 h-100 lg:leading-2 border-[1px] border-blue-main rounded-full text-center flex items-center justify-center "
        >
            <span className="shadow-white-text">
                  Оставить
            <br/>
            заявку
            </span>

        </button>
    );
};

export const LeaveRequestLink = () => {
    return (
        <Link href="/" className="underline  ">
            <p className="text-white font-bold lg:text-xs">Оставить заявку</p>
            {/* <Image src={leaveRequestIcon} alt="request image" /> */}
        </Link>
    );
};

export const ScrollDownRoundedShape = (props) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center lg:hidden">
            <div className="absolute flex items-center justify-center">
                <Image
                    src={
                        props.imageType === "scrollDownOvalShape"
                            ? scrollDownIcon
                            : arrowDownIcon
                    }
                    alt="Scroll down icon"
                    className="w-10 h-10"
                />
            </div>

            <div
                className="circle-text"
                style={{ color: props.RoundedtextColor }}
            >
                {Array.from(
                    "LoremipsumdolorsitametconsecteturadipiscingelitLoremIpsumnerasitfauleapeslinbanannokkorochinmayoshiznibilmadimuzurhappybierthdaytoyou"
                ).map((char, index) => (
                    <span
                        key={index}
                        style={{
                            transform: `rotate(${-index * 3}deg)`,
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
};


interface SkyLineLogoButtonProps {
    wCircle: 'small' | 'medium' | 'large';
    hCircle: 'small' | 'medium' | 'large';
    borCircle: 'thin' | 'medium' | 'thick';
    wRectangle: 'small' | 'medium' | 'large';
    hRectangle: 'small' | 'medium' | 'large';
    borRectangle: 'thin' | 'medium' | 'thick';
    hLine: 'short' | 'medium' | 'tall';
    gapText: 'small' | 'medium' | 'large';
    sizeTitle: 'sm' | 'md' | 'lg';
    sizeDesc: 'xs' | 'sm' | 'md';
    gapAll: 'small' | 'medium' | 'large';
    role: "navbar" | "review";
}


interface SkyLineLogoButtonProps {
    wCircle: "small" | "medium";
    hCircle: "small" | "medium";
    borCircle: "thin" | "medium";
    wRectangle: "small" | "medium";
    hRectangle: "small" | "medium";
    borRectangle: "thin" | "medium";
    hLine: "short" | "medium";
    gapText: "small" | "medium";
    sizeTitle: "sm" | "md";
    sizeDesc: "xs" | "sm";
    gapAll: "small" | "medium";
    role?: "navbar" | "default";
}

export const SkyLineLogoButton: React.FC<SkyLineLogoButtonProps> = ({
    wCircle,
    hCircle,
    borCircle,
    wRectangle,
    hRectangle,
    borRectangle,
    hLine,
    gapText,
    sizeTitle,
    sizeDesc,
    gapAll,
    role = "default",
                                                                    }) => {
    // Utility variants
    const circleWidthVariants = {
        small: "w-[18px]  lg:w-[14px]",
        medium: "w-[50px] lg:w-[30px] ",
    };

    const circleHeightVariants = {
        small: "h-[18px] lg:h-[14px]",
        medium: "h-[50px] lg:h-[30px]",
    };

    const borderCircleVariants = {
        thin: "border-[1px]",
        medium: "border-[3px]",
    };

    const rectangleWidthVariants = {
        small: "w-[7.2px] lg:w-[5.7px]",
        medium: "w-[20px] lg:w-[12px]",
    };

    const rectangleHeightVariants = {
        small: "h-[7.2px] lg:h-[5.7px]",
        medium: "h-[20px] lg:h-[12px]",
    };

    const borderRectangleVariants = {
        thin: "border-[1px]",
        medium: "border-[3px]",
    };

    const lineHeightVariants = {
        short: "h-[calc(100%-5px)]",
        medium: "h-[60px]",
    };

    const gapTextVariants = {
        small: "gap-1",
        medium: "gap-2.5",
    };

    const titleSizeVariants = {
        sm: "text-[5px] lg:text-[4px] ",
        md: "text-sm",
    };

    const descSizeVariants = {
        xs: "text-[3px]",
        sm: "text-[8px]",
    };

    const gapAllVariants = {
        small: "gap-[5px] lg:gap-1",
        medium: "gap-6",
    };

    const roleClass = role === "navbar" ? "flex lg:hidden" : "flex";

    return (
        <div className={`flex ${gapAllVariants[gapAll]}`}>
            <div
                className={`my-auto rounded-full flex items-center justify-center neon-shadow-box blur-[0.5px] border-blue-main ${circleWidthVariants[wCircle]} ${circleHeightVariants[hCircle]} ${borderCircleVariants[borCircle]}`}
            >
                <div
                    className={`rotate-45 neon-shadow-box border-blue-main ${rectangleWidthVariants[wRectangle]} ${rectangleHeightVariants[hRectangle]} ${borderRectangleVariants[borRectangle]}`}
                ></div>
            </div>

            <div
                className={`${roleClass} bg-blue-main neon-shadow-box ${lineHeightVariants[hLine]} w-[1px] my-auto`}
            ></div>

            <div className={`${roleClass} flexCol ${gapTextVariants[gapText]} my-auto`}>
                <h1 className={`neon-shadow bold-500 text-center ${titleSizeVariants[sizeTitle]}`}>
                    SKYLINE DIGITAL
                </h1>
                <p className={`text-blue-main bold-600 neon-shadow text-left ${descSizeVariants[sizeDesc]}`}>
                    YOUR DIGITAL FUTURE
                </p>
            </div>
        </div>
    );



};