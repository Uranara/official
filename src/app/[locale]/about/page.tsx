import React from 'react';
import Link from "next/link";
import About from "../../../components/About";
import Idea from "../../../components/Idea";
import PageHeader from "../../../components/PageHeader";



const Page = () => {
    return (
            <>
                <PageHeader title={"About Us"}
                            subtitle={"We are Passionate About Helping Businesses Thrive with Technology"}
                            href={"about"}/>

                <About></About>
                <Idea></Idea>
            </>

    );
};

export default Page;