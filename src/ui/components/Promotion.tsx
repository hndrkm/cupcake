import Image from "next/image";
import { TPromotion } from "@/types";
import { CardBackground, CardTitle, CardDescription} from "./Cards";

export function Promotion( props:TPromotion) {
    return (
        <div className="max-w-min p-4">
            <CardBackground>
                <div className="relative h-72 w-96 flex justify-center">
                    <Image
                        className="rounded-t-lg"
                        src={props.src_img}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="p-4">
                    <CardTitle name={props.title} className="!text-xl font-semibold tracking-tight"/>
                    <CardDescription description={props.description} className="!p-2 text-justify"/>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-text-primary group-hover:text-card-title-hover">{props.price}</span>
                        <div className="flex flex-col rounded bg-button text-white group-hover:bg-white group-hover:text-primary ">
                          <div className=" rounded hover:bg-button-hover hover:text-white py-2.5">
                            <a href="" className="  font-semibold text-sm  text-center focus:ring-4 focus:outline-none focus:ring-card-title-hover  px-5 py-2.5">Al Pedido</a>
                          </div>
                        </div>
                    </div>
                </div>
            </CardBackground>
        </div>
    )
}
