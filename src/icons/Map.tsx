import Image from "next/image"
import MapLogo from "../../public/svg_icons/map-tag-svgrepo-com.svg"
export function MapIcon(){
  return(
    <Image
      priority
      src={MapLogo}
      alt="logo"
    />
  )
}

