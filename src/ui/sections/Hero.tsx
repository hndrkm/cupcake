import Image from "next/image"
export default function Hero(){
  return (
      <section className="relative h-screen bg-gray-800">
        <div className="absolute inset-0">
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
  )
}
