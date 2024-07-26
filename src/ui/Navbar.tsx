'use client'
import { FC } from "react"
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";

interface Props {
    locale: string
}
export const Navbar: FC<Props> = ({ locale }) => {
    return (
        <div className="flex flex-row flex-nowrap justify-around backdrop-blur-sm bg-white/20 clear-end fixed w-full z-20 ">
            <div className="flex items-center justify-end py-2 hover:translate-y-[5px] transition duration-300 ease-in-out">
                
                <Image
                    className="w-30 h-24 rounded-full"
                    src="/PasteleriaA1.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />

            </div>

            <div className="hidden w-full md:block md:w-auto py-8" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                <li>
                  <a href="/" className="block md:py-2 md:px-3 text-button rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0  hover:translate-y-[-5px] transition duration-300 ease-in-out " aria-current="page">Inicio</a>
                </li>
                <li>
                  <a href="#" className="block md:py-2 md:px-3 text-button rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0  hover:translate-y-[-5px] transition duration-300 ease-in-out">Productos</a>
                </li>
                <li>
                  <a href="#" className="block md:py-2 md:px-3 text-button rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0  hover:translate-y-[-5px] transition duration-300 ease-in-out">Nosotros</a>
                </li>
                <li>
                  <a href="/contact" className="block md:py-2 md:px-3 text-button rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0  hover:translate-y-[-5px] transition duration-300 ease-in-out">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-start pl-12 pt-8">
                    <FaFacebookSquare  className="text-button hover:text-button-hover w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
                    <RiWhatsappFill   className="text-button hover:text-button-hover w-7 h-7 m-2 hover:translate-y-[-5px]   transition duration-300 ease-in-out" />
                    <FaInstagram    className="text-button hover:text-button-hover w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
            </div>
        </div>

    )
} 
