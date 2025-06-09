"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import { SkyLineLogoButton } from "@/components/Buttons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
    const [isBurgerOpen, setBurgerOpen] = useState(false);

    return (
        <nav className="w-full max-w-[1240px] mx-auto flex items-center justify-between pt-[50px] px-3 whitespace-nowrap">

            <Link href="/" className="">
                <SkyLineLogoButton
                    wCircle="medium"
                    hCircle="medium"
                    borCircle="medium"
                    wRectangle="medium"
                    hRectangle="medium"
                    borRectangle="medium"
                    hLine="medium"
                    gapText="medium"
                    sizeTitle="md"
                    sizeDesc="sm"
                    gapAll="medium"
                    role="navbar"
                />
            </Link>

            <div className="hidden lg:flex relative">
                <button
                    className="text-blue-main "
                    onClick={() => setBurgerOpen((prev) => !prev)}
                >
                    ☰
                </button>
                {isBurgerOpen && (
                    <div className="absolute top-full  right-0 bg-[#636363]     p-4 z-50">
                        <ul className="flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.key}>
                                    <Link href={link.href} onClick={() => setBurgerOpen(false)}>
                                        <p>{link.label}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="flex lg:hidden items-center gap-[92px]">
                <ul className="flex gap-12">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key}>
                            {
                                link.dropDown?(
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger >
                                                    <Link href={link.href}>
                                                        <h6>{link.label}</h6>
                                                    </Link>
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent className="flex">
                                                    <ul className="">
                                                        <li>
                                                            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                                                +998(90) 777 77 77
                                                            </NavigationMenuLink>
                                                            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                                                +998(90) 777 77 77
                                                            </NavigationMenuLink>
                                                        </li>
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                ):(
                                    <Link href={link.href}>
                                        <h6>{link.label}</h6>
                                    </Link>
                                )
                            }


                        </li>
                    ))}
                </ul>

                <div className="">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="items-start">
                                    <div className="flexCol ">
                                        <h6>+998(90) 777 77 77</h6>
                                        <p className="text-[11px] flex justify-normal mt-1">SKYLINE DIGITAL</p>
                                    </div>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="flex float-right">
                                    <ul className="">
                                        <li>
                                            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                                +998(90) 777 77 77
                                            </NavigationMenuLink>
                                            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                                +998(90) 777 77 77
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent transition duration-300">
                                <h6>RU</h6>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="rounded-md mt-1">
                                <ul className="p-2">
                                    <li>
                                        <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                            UZ
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                            EN
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};
