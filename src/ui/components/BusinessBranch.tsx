import Image from "next/image"
import { TBusinessBranch } from "@/types"
import { CardTitle , CardDescription, CardBackground} from "../components/Cards";

export function BusinessBranch ( props:TBusinessBranch )
{
  return(

    <div className="flex flex-col py-10">
      <CardBackground className="shadow-lg hover:shadow-lg hover:shadow-primary group duration-700 hover:scale-105  ">
        <CardTitle name={props.title} className="!text-2xl !font-bold pt-10 "/>
        <div className="w-full  mb-4 ">
          <div className="flex items-center">

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
            <CardTitle name={props.description_title}/>
            <CardDescription description={props.description_text}/>
          </div>
        </div>

      </CardBackground>
    </div>
      )
}
