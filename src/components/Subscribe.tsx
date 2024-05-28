import React from 'react';

const Subscribe = () => {
    return (
        <section className={"bg-gray-30 mt-10 py-10 scroll-mt-[70px]"}>
            <div className={"max-container flex flex-col  items-center "}>
                <div className={"text-center text-white text-[28px] font-medium"}>
                    <h3>Don't miss to subscribe to our new feeds</h3>
                </div>
                <div className={"bg-gray-4 rounded-full w-2/3  text-center py-3.5 px-16  relative"}>
                        <form action="" className={"flex items-center overflow-hidden mx-auto "}>
                            <input className={"w-full outline-0 border-0 bg-gray-4 text-green-10 "}  type="text" placeholder="Email Address"/>
                            <button className={"bg-green-10 text-white  absolute -right-1 py-3.5 rounded-r-full px-2"}>Subscribe
                            </button>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;