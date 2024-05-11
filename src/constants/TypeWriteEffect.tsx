"use client"
import React, {useEffect, useRef} from 'react';
import Typed from "typed.js"

type  PropsType ={
    text : string[];
    callback?: ()=>void;
    seed?: number;
}

const TypeWriteEffect = ({text = [""], callback, seed = 100}: PropsType) => {
    const el = useRef(null)
    useEffect(() => {
        const  typed = new Typed(el.current,{
            strings:text,
            typeSpeed:seed,
            backSpeed:100,
            showCursor:true,
            loop:true,
            onComplete(self){
                callback?.();
                self.cursor.style.display = "";
            },
        });
        return () =>{
            typed.destroy()
        }
    },[])
    return (
        <div className={"inline"} ref={el}></div>
    );
};

export default TypeWriteEffect;