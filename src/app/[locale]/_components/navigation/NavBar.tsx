import {useEffect, useState} from 'react';

import Image from "next/image";

import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from "./LanguageSwitcher";

import NavItemsResponsive from './NavItemsResponsive';

import { NavList } from '../../_lib/types';

export default async function NavBar({locale, route}: {locale: string, route?: string|undefined}){

    const t = await getTranslations("Nav.Navlist")
    
    const navList: NavList[] = [{title: t("About"), id: 'About'}, {title: t("Contact"), id: 'Contact'}, {title: t("Booking"), id: 'Booking'}, {title: t("Activities"), id: 'Activities'},  {title: t("Gallery"), id: 'Gallery'}];

    return (
   
    <div className="flex justify-start md:justify-center w-[99vw]">
       
        <div className="flex w-[100%] justify-start align-start items-start md:justify-end lg:justify-center  " >
           <NavItemsResponsive navList={navList} route={route} />
        </div>
        <div className="flex w-[5vw] justify-start m-1">
          <LanguageSwitcher locale={locale} />

        </div>


    </div>
   
    )
}