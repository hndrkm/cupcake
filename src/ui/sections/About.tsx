import Image from "next/image";
import { CardTitle , CardDescription, CardBackground} from "../components/Cards";

export default function About()
{
  return(
    <div className="w-5/6 mx-auto text-center ">
      <h2 className="text-5xl font-bold tracking-tight text-text-primary pb-10">NOSOTROS</h2>
      <div className="flex flex-col">
        <CardBackground className="flex items-center">
            <div className="relative flex flex-row justify-center rounded-full items-center w-3/6 h-96 ">
              <Image
                src="/PasteleriaA1.jpg"
                alt="Imagen de fondo"
                fill={true}
                quality={100}
                className="z-0 rounded-l-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex-1 pl-6 px-6">
              <CardTitle name="Pasteles para Cada Ocasión"/>
              <CardDescription description="Descubre nuestra exquisita selección de pasteles, perfectos para cualquier celebración o para darte un gusto personal. Desde clásicos pasteles de chocolate y vainilla hasta creaciones innovadoras como tarta de limón con merengue y pastel de red velvet, cada uno de nuestros productos está hecho con ingredientes de alta calidad y una atención meticulosa a los detalles. Ya sea que estés buscando el pastel perfecto para un cumpleaños, una boda o simplemente una merienda especial, nuestro surtido promete endulzar tu día con sabores irresistibles y presentaciones elegantes. ¡Haz tu pedido hoy y déjate llevar por el sabor!"/>
            </div>
        </CardBackground>

        <CardBackground className="flex items-center">

          <div className="flex-1 pl-6 px-10">
              <CardTitle name="Pasteles para Cada Ocasión"/>
              <CardDescription description="Descubre nuestra exquisita selección de pasteles, perfectos para cualquier celebración o para darte un gusto personal. Desde clásicos pasteles de chocolate y vainilla hasta creaciones innovadoras como tarta de limón con merengue y pastel de red velvet, cada uno de nuestros productos está hecho con ingredientes de alta calidad y una atención meticulosa a los detalles. Ya sea que estés buscando el pastel perfecto para un cumpleaños, una boda o simplemente una merienda especial, nuestro surtido promete endulzar tu día con sabores irresistibles y presentaciones elegantes. ¡Haz tu pedido hoy y déjate llevar por el sabor!"/>
          </div>

          <div className="relative flex flex-row justify-center rounded-full items-center w-3/6 h-96 ">
              <Image
                src="/PasteleriaA1.jpg"
                alt="Imagen de fondo"
                fill={true}
                quality={100}
                className="z-0 rounded-r-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
          </div>

        </CardBackground>

      </div>
    </div>
  )
}
