'use client'

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxChevronDown } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


export default function LanguageSwitcher({locale}: {locale: string}){

    const pathname = usePathname()
    const currentRoute = pathname.slice(3)

    return (
        <>
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                    <div className="flex justify-between items-center text-white w-[3vw]">
                    {locale}<RxChevronDown className="text-white"/>
                    </div>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="bg-white" >
                        
                        <Link  href={'/en'+currentRoute}><DropdownMenuItem className="hover:bg-forestgreen hover:text-emerald-50 " ><p>en</p></DropdownMenuItem></Link>
                        <Link  href={'/fr'+currentRoute}><DropdownMenuItem className="hover:bg-forestgreen hover:text-emerald-50"><p>fr</p></DropdownMenuItem></Link>
                        
                   
            </DropdownMenuContent>
        </DropdownMenu>
        
        </>


    )
}