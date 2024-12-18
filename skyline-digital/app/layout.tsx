"use client";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <html lang="en">
            <body>
            <Navbar />
            <main className="relative-overflow-hidden">{children}</main>
            <Toaster />
            </body>
            </html>
        </Provider>
    );
}
