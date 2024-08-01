'use client'
import ContactForm from "../components/ContactForm";
import {WhatsappIcon, FacebookIcon, InstagramIcon} from "@/icons";

export default function ContactUs(){
  return(

    <div className="w-3/6 mx-auto text-center ">
      <h2 className="text-5xl font-bold tracking-tight text-text-primary pb-10">CONTACTENOS</h2>
      <div className="flex flex-col shadow-lg hover:shadow-lg hover:shadow-primary group duration-700 hover:scale-105  ">
          <ContactForm/>
          <div className="flex items-center justify-center  py-8 ">
            <div className="text-button hover:text-button-hover w-14 h-14 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out"><FacebookIcon/></div>
            <div className="text-button hover:text-button-hover w-14 h-14 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out"><WhatsappIcon/></div>
            <div className="text-button hover:text-button-hover w-14 h-14 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out"><InstagramIcon/></div>
          </div>

      </div>
    </div>
  )
}
