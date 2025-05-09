
import { getTranslations } from "next-intl/server"
import Image from "next/image"

import Link from "next/link"

export default async function Booking(){

  const t = await getTranslations("Booking")
  const f = await getTranslations("Facilities")

    return(
        <div id="Booking" className="flex flex-col items-center space-y-2 bg-forestgreen opacity-85 text-white p-3 md:p-8 lg:p-10">
            <h1 className="font-bold text-xl">{t("Title")}</h1>
           

            <div >

                <div className="flex flex-col md:flex-row lg:flex-row w-full p-8 z-5 bg-white text-forestgreen rounded-md">
                    <div className="flex flex-col gap-2 w-1/1 lg:w-3/5">   
                        <p>{t("P1")}</p>
                        <p>{t("P2")}</p>
                        <p>{t("P3")}</p>
                        <p>{t("P4")}</p>
                        <p>{t("P5")}</p>
                    </div> 
                    <div  className="flex flex-col w-1/1 lg:w-2/5 justify-center md:justify-center items-center md:items-center" >
                        <h1 className="pb-10 font-bold text-lg">{t("Link_Para")}</h1>
                        <div className="flex gap-5 font-bold">
                            <div >
                                <Link href='gite/foxcottage'>
                                    <p className="text-center">Fox Cottage</p>
                                    <Image 
                                        src='/logo-artwork/Orange/GDBR_Logo-05.png'
                                        alt='Fox Cottage logo'
                                        width={128}
                                        height={128}

                                    />
                                </Link>
                            </div>
                            <div> 
                                <Link href='gite/castorslodge'>
                                    <p className="text-center">Castors Lodge</p>
                                    <Image 
                                            src='/logo-artwork/Forest Green/GDBR_Logo-10.png'
                                            alt='Castors Lodge logo'
                                            width={128}
                                            height={128}

                                        />
                                    
                                </Link>

                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <h1 className="pt-3 md:pt-8 lg:pt-10 font-bold text-xl">{f("Title")}</h1>
            <div className="flex flex-col gap-2 w-full p-8 z-5 bg-white text-forestgreen rounded-md">
                <p>{f("P1")} {f("P2")}</p>
                <p>{f("P3")}</p>

            </div>
        </div>


    )


}