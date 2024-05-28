import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className={" bg-section  bg-center min-h-[40vh] relative bg-fixed"}>
            <div className={"page-header flex items-center   "}>
                <div className={"max-container padding-container"}>
                    <div className={""}>
                        <h2 className={"text-[34px] text-gray-6"}>Contact Us</h2>
                        <p className={"text-[15px] text-gray-6"}>We're always happy to hear from you!</p>
                    </div>

                </div>
                <div className={"w-full bg-green-10 "}>
                    <div className={"max-container padding-container"}>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/about"} className={"before:"}>Case</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Page;