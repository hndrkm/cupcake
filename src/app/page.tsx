import Image from "next/image";
import {CardService} from "../ui/CardService"
import {Promotion} from "../ui/Promotion"

export default function Home() {
  return (
    <main className="">
    <section className="relative h-screen bg-gray-800">
      <div className="absolute inset-0">
        <Image
          src="/PasteleriaA1.jpg"
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 "
        />
      </div>

       <div className="relative z-10 text-white  h-full flex  items-end justify-between p-36 px-48">
          <div className="">
            <h1 className="text-4xl font-bold mb-4 text-popover ">Simplemente Irresistible</h1>
            <p className="text-lg text-popover">Este es un ejemplo de texto </p>
          </div>
          <div className="items-center justify-center p-8">
            <button className="px-6 py-3 bg-text-secondary hover:bg-popover text-white hover:text-selected rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Saber mas
            </button>
          </div>
       </div>
    </section>


      <section className="text-center mt-36 px-64">
        <div className="text-5xl font-bold tracking-tight text-text-secondary p-4">PROMOCIONES</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 " > 
            <Promotion/>
            <Promotion/>
            <Promotion/>
        </div>
      </section>
      <section id="services" className="flex  justify-center p-10" >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <CardService name="Caffe" img="/PasteleriaA1.jpg"/>
        <CardService name="Pasteles" img="/PasteleriaA1.jpg"/>
        <CardService name="Batidos" img="/PasteleriaA1.jpg"/>
        <CardService name="Panes" img="/PasteleriaA1.jpg"/>
      </div>
      </section>

    <section className="relative h-[300px] bg-gray-800">
      <div className="absolute inset-0">
        <Image
          src="/PasteleriaA1.jpg"
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

       <div className="relative z-10 p-8 text-white  h-full flex flex-col justify-end ml-24">
          <div className="">
            <h1 className="text-4xl font-bold mb-4">No te quedes sin el tuyo!</h1>
            <p className="text-lg">Este es un ejemplo de texto </p>
          </div>
          <div className="items-center justify-center p-8">
            <button className="px-6 py-3 bg-text-secondary hover:bg-popover text-white hover:text-selected rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Mira nuestros PRODUCTOS
            </button>
          </div>
       </div>
    </section>
    </main>
  );
}

