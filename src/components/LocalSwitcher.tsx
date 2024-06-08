"use client"
import React, { ChangeEvent,useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
const LocalSwitcher = () => {
    const [isPending,startTransition] = useTransition();
    const router = useRouter()
    const localActive = useLocale()
    const onSelectChange = (e : ChangeEvent<HTMLSelectElement>) => {
        const  nextLocale = e.target.value
        startTransition(() =>{
            router.replace(`/${nextLocale}`)
        })

    }
    return (
        <div className={""}>
            <label className={""}>
                <p className={"sr-only"}>language change</p>
                <select name="" id="" defaultValue={localActive}
                        className={"bg-transparent py-2 text-gray-20 cursor-pointer bold-16  select-no-border"}
                        onChange={onSelectChange}
                        disabled={isPending}
                >
                    <option value="en" className={"text-center"}>English</option>
                    <option value="zh" className={"text-center"}>中文</option>
                </select>
            </label>
        </div>
    );
};

export default LocalSwitcher;