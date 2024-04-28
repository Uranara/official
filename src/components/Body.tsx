import React from 'react';

const Body = () => {
    return (
        <section className={"bg-forest h-screen w-screen bg-center bg-cover  "}>
            <div className={"max-container  font-bold flex flex-col"}>
                <h1 className={"text-white text-8xl pt-36 leading-[120%]  whitespace-pre-line after:content-['_↗']"}><span className={"bg-gradient-to-r from-green-50 to-green-700 bg-clip-text text-transparent"}>Creates </span> an indoor living environment that
                    <span className={"bg-gradient-to-r from-green-50 to-green-400 bg-clip-text text-transparent"}> fosters </span>
                    comfort and life span</h1>
                <p className={"text-gray-10 text-4xl leading-[120%] pt-14 "}>
                    Freena drives the development of the whole industrial chain
                </p>
            </div>
        </section>
    );
};

export default Body;