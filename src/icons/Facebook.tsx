import Image from "next/image"
import FacebookLogo from "../../public/svg_icons/facebook.svg"
export function FacebookIcon(){
  return(
    <Image
      priority
      src={FacebookLogo}
      alt="logo"
    />
  )
}
