'use client'
import { FC } from "react"
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
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
        <div className="flex items-center justify-end py-2 hover:translate-y-[5px] transition duration-300 ease-in-out">
          <Image
            src="/Plogot2.png"
            width={400}
            height={100}
            alt="Pasteleria Alarcon"
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
          <FaFacebookSquare className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
          <RiWhatsappFill className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px]   transition duration-300 ease-in-out" />
          <FaInstagram className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
        </div>
      </div>
    </header>
  )
} 
