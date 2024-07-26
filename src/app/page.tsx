import Image from "next/image";
import { Promotion } from "../ui/components/Promotion"
import Services from "@/ui/Services";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <section className="h-screen bg-background">
        <div className="w-full">
          <Image
            src="/PasteleriaA1.jpg"
            alt="Imagen de fondo"

            fill={true}
            quality={100}
            style={{ width: "100%", display: "block", maxHeight: "100vh", objectFit: "cover" }}
          />
        </div>

        <div className="relative z-10 text-white  h-full flex  items-end justify-between p-36 px-48">
          <div className="">
            <h1 className="text-4xl font-bold mb-4 text-accent bg-white/20 backdrop-blur-sm rounded-md py-2">Los más deliciosos sabores frescos y naturales en tus pasteles favoritos.</h1>
            <p className="text-lg text-white text-justify font-bold max-w-xl bg-black/40 backdrop-blur-2xl rounded-md p-2">
            "Disfruta de nuestros deliciosos pasteles y postres, elaborados con ingredientes frescos y naturales, perfectos para cada día y para esos momentos especiales. Déjanos endulzar tu vida con nuestros exquisitos sabores." </p>
          </div>
          <div className="items-center justify-center p-8">
            <button className="px-6 py-3 bg-text-secondary hover:bg-popover text-white hover:text-selected rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Saber mas
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-10 bg-background">
        <div className="w-full text-5xl text-center font-bold tracking-tight text-text-primary p-8">PROMOCIONES</div>
        <div className="container grid grid-cols-2 gap-10 place-items-center h-full max-w-fit" >
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
        </div>
      </section>

      <Services/>

      <section className="relative h-[300px] bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/PasteleriaA1.jpg"
            alt="Imagen de fondo"
            fill={true}
            quality={100}
            className="z-0"
            style={{ width: "100%", display: "block", maxHeight: "100vh", objectFit: "cover" }}
          />
        </div>

        <div className="relative z-10 p-8 text-white  h-full flex flex-col justify-end ml-24">
          <div className="">
            <h1 className="text-4xl font-bold mb-4">No te quedes sin el tuyo!</h1>
            <p className="text-lg">Este es un ejemplo de texto </p>
          </div>
          <div className="flex justify-end p-8">
            <button className="px-6 py-3 bg-primary hover:bg-button-hover text-white rounded-lg transition-transform duration-300 hover:scale-105">
              Mira nuestros PRODUCTOS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

