import React from 'react';
import Image from "next/image";

const Reward = () => {
    return (
        <div className={"max-container mt-16"}>
            <div className={""}>
                <div className={"text-center"}>
                    <h1 className={"text-[32px] text-green-10"}>记得打赏一下！</h1>
                    <p className={"text-[15px] leading-10 mb-14 text-blue-75"}>感谢各位朋友的鼎力相助！我想这也是对我们最好的鼓励和奖赏，请各位不要客气。</p>
                </div>
                <div className={"flex justify-center "}>
                    <Image className={"rounded-t-2xl"} src={"/Alipay.jpg"} alt={"alipay"} width={480} height={640}/>
                </div>

                <div className={"flex justify-center mt-16"}>
                    <Image className={""} src={"/duckpins.gif"} alt={"duck"} width={280} height={340}/>
                </div>

            </div>
        </div>
    );
};

export default Reward;