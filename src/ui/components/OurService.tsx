import Image from "next/image";
import { TService } from "@/types";
import { CardTitle , CardDescription, CardBackground} from "../components/Cards";

export default function OurService(props:TService){
  return(
    <CardBackground className="flex items-center">
      <div className="w-1/3 p-4 flex justify-center items-center">
      
        <div className="relative flex flex-row justify-end items-end rounded-full w-64 h-64 ">
              <Image
                src="/PasteleriaA1.jpg"
                alt="Imagen de fondo"
                fill={true}
                quality={100}
                className="z-0 rounded-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
        </div>

      </div>

      <div className="w-2/3 p-4 flex items-center justify-center ">
        <div className="text-left pr-20 ">
          <CardTitle name={props.title}/>
          <CardDescription description={props.description}/>
        </div>
      </div>

    </CardBackground>
  )
}
