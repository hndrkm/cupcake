import Image from "next/image"
import InstagramLogo from "../../public/svg_icons/instagram-svgrepo-com.svg"
export function InstagramIcon(){
  return(
    <Image
      priority
      src={InstagramLogo}
      alt="logo"
    />
  )
}
