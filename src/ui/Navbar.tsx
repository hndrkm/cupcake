'use client'
import { FC } from "react"
import { FacebookIcon, WhatsappIcon, InstagramIcon} from "@/icons";
import Image from "next/image";
import { NavItem } from "./components/NavItem";

interface Props {
  locale: string
}
const navigation =
  [
    {
      'name': "INICIO",
      'href': "/"
    },
    {
      'name': "PRODUCTOS",
      'href': "/products"
    },
    {
      'name': "NOSOTROS",
      'href': "/about"
    },
    {
      'name': "CONTACTO",
      'href': "/contact"
    }
  ]
export const Navbar: FC<Props> = ({ locale }) => {
  return (
    <header className="fixed z-30 w-full bg-white/60">
      <div className="mx-auto flex flex-row items-center justify-around backdrop-blur-sm">
        <div className="max-w-72 flex items-center justify-end py-2 hover:translate-y-[5px] transition duration-300 ease-in-out">
          <Image
            className="w-auto h-auto"
            src="/Plogot2.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className=" py-8">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            {navigation.map((item) =>
              <li key={item.name}>
                <NavItem  name={item.name} href={item.href}></NavItem>
              </li>)
            }
          </ul>
        </div>

        <div className="flex items-center justify-start  pt-8">
            <div className="text-button hover:text-button-hover w-10 h-10 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out"><FacebookIcon/></div>
            <div className="text-button hover:text-button-hover w-10 h-10 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out"><WhatsappIcon/></div>
            <div className="text-button hover:text-button-hover w-10 h-10 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out"><InstagramIcon/></div>
        </div>
      </div>
    </header>
  )
} 
