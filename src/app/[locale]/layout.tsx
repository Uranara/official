import type {Metadata} from "next";
import {Inter, Comfortaa, Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import localFont from "next/font/local";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const comfortFont = localFont({
    src: "../../fonts/Comfortaa-VariableFont_wght.ttf",
    display: "swap",
    variable: "--comfort-local"

})

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
    variable: "--roboto-inter"
});


const comfort = Comfortaa({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
    variable: "--comfort-inter"

});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    variable: "--poppins-inter"

});


export const metadata: Metadata = {
    title: "Freena Official Website",
    description: "Creates an indoor living environment that fosters comfort and life span",
};

export default async function RootLayout({
                                             children,
                                             params: {locale}
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale}>
        <body className={`${comfort.variable} ${comfortFont.variable}  ${inter.variable} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
            <Navbar></Navbar>
            <main className={"relative overflow-hidden"}>
                {children}
            </main>
            <Footer></Footer>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
