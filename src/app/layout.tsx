import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Freena Official Website",
    description: "Creates an indoor living environment that fosters comfort and life span",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh">
        <body className={inter.className}>
        <Navbar></Navbar>
        <main className={"relative overflow-hidden"}>
            {children}
        </main>
        <Footer></Footer>
        </body>
        </html>
    );
}
