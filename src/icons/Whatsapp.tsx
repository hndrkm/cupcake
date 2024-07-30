import Image from "next/image"
import WhatsappLogo from "../../public/svg_icons/whatsapp-svgrepo-com.svg"
export function WhatsappIcon(){
  return(
    <Image
      priority
      src={WhatsappLogo}
      alt="logo"
    />
  )
}
