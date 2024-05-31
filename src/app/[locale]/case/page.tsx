import React from 'react';
import Link from "next/link";
import PageHeader from "../../../components/PageHeader";
import Blogs from "../../../components/Blogs";

const Page = () => {
    return (
       <>
       <PageHeader title={"Our Case"}
                   subtitle={"Showcases a variety of projects that we have completed for our clients"}
                   href={"case"}/>

           <Blogs></Blogs>
       </>
    );
};

export default Page;