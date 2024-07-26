import Image from "next/image";

export function Promotion ()
{
    return(
            <div className="flex  justify-center p-10 ">
            <div className=" max-w-sm bg-background border mx-10 border-primary rounded-lg shadow ">
                <div className="relative h-72 w-96 bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-cover bg-center flex justify-center">
                    <Image
                        className=""
                        src="/PasteleriaA1.jpg"
                        layout="fill"
                        quality={100}
                        alt="Picture of the author"
                    />
                    </div>
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-text-primary">Porción de pastel de nuez</h5>
                    <p className="p-2">Porción cuadrada de pastel de nuez de castilla, hecho con nueces molidas autenticas, Relleno con manjar de dulce de leche cubierta en crema batida.</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-text-primary">Bs.12,00</span>
                        <a href="#" className="text-white bg-button hover:bg-button-hover focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center">Al Pedido</a>
                    </div>
                </div>
            </div>
            </div>
    )
}
