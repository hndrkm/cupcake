import Image from "next/image";
export default function Home() {
  return (
    <main >
    <div className="h-screen" >
      <div className="absolute inset-0  h-5/6">
           <Image
               className=""
               src="/PasteleriaA1.jpg"
               layout="fill"
               objectFit="cover"
               quality={100}
               alt="Picture of the author"
           />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className=" z-10 flex flex-col justify-center items-center h-full text-center">
        <div className="absolute  bottom-80 left-1/4 transform -translate-x-20 -translate-y-50 w-max  text-center text-white p-2">
            <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
            <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
        </div>
      <a href="#" className="absolute bottom-60 right-32 bg-button text-white hover:bg-button-hover py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Saber mas</a>

      </div>
    </div>

      <div className="text-center">
        <div className="text-5xl font-semibold tracking-tight text-text-primary p-4">Promociones</div>
        <div className="grid  grid-cols-1 md:grid-cols-2 content-normal p-10"> 
            <Promotion/>
            <Promotion/>
            <Promotion/>
            <Promotion/>
            <Promotion/>
            <Promotion/>
        </div>
      </div>
    </main>
  );
}

function Promotion ()
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
