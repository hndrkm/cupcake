import Image from "next/image"
import { TBusinessBranch } from "@/types"

export function BusinessBranch ( props:TBusinessBranch )
{
  return(

    <div className="flex flex-col py-10">
      <div className="shadow-lg hover:shadow-lg hover:shadow-primary group duration-700 hover:scale-105  ">

        <h2 className="text-2xl font-bold tracking-tight text-text-primary py-10">{props.title}</h2>

        <div className="w-full  mb-4 bg-background  ">
          <div className="flex items-center bg-white ">

            <div className="relative flex flex-row justify-center  items-center w-3/6 h-96 m-5">
              <Image
                src={props.src_img}
                alt="Imagen de fondo"
                fill={true}
                quality={100}
                className="z-0 rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="relative flex flex-row justify-center  items-center w-3/6 h-96 m-5">
              <div className="w-full h-full max-w-4xl mx-auto my-8">
                <iframe
                  src={props.src_map}
                  width="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg h-96 border-none  "
                />
              </div>
            </div>

          </div>
        </div>

        <div className="p-10 flex items-center justify-center ">
          <div className="text-left">
            <h2 className="text-3xl mb-4 font-semibold text-text-primary py-8">{props.description_title}</h2>
            <p className="text-gray-700 pb-8">{props.description_text}</p>
          </div>
        </div>

      </div>
    </div>
      )
}
