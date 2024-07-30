import Image from "next/image";
import { TPromotion } from "@/types";


export function Promotion( props:TPromotion) {
    return (
        <div className="max-w-min p-4">
            <div className="max-w-min bg-background border rounded-lg shadow hover:shadow-lg hover:shadow-primary group">
                <div className="relative h-72 w-96 flex justify-center">
                    <Image
                        className="rounded-2xl"
                        src={props.src_img}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="p-4">
                    <h5 className="text-xl font-semibold tracking-tight text-text-primary group-hover:text-destructive">{props.title}</h5>
                    <p className="p-2 text-justify">{props.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-text-primary group-hover:text-destructive">{props.price}</span>
                        <a href="#" className="text-white bg-button hover:bg-button-hover focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center">Al Pedido</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
