import Image from "next/image";
import { TService } from "@/types";

export default function OurService(props:TService){
  return(
    <div className="flex my-6 shadow hover:shadow-lg hover:shadow-primary group duration-700 hover:scale-105 ">
      
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
          <h2 className="text-3xl mb-4 font-semibold text-text-primary py-8">{props.title}</h2>
          <p className="text-gray-700 pb-8">{props.description}</p>
        </div>
      </div>

    </div>
  )
}
