
import Image from "next/image"
import TelephonLogo from "../../public/svg_icons/telephone.svg"
export function TelephonIcon(){
  return(
    <Image
      priority
      src={TelephonLogo}
      alt="logo"
    />
  )
}

