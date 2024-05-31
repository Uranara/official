import React from 'react';
import Link from "next/link";
import PageHeader from "../../../components/PageHeader";

const Page = () => {
    return (
       <>
        <PageHeader title={"Contact Us"} subtitle={"We're always happy to hear from you!"} href={"contact"}/>
       </>
    );
};

export default Page;