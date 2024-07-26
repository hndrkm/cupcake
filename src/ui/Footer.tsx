import { SiGooglemaps } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";

export default function Footer ()
{
    return(
      <footer>
        <section className="flex flex-row py-9 justify-stretch">
          <div className="flex-1  text-white flex items-center justify-center text-center mx-20">
            <div>
              <h1 className="text-2xl font-bold mb-4 text-text-secondary">Pastelería Alarcón </h1>
              <div className="text-gray-900 px-20 text-left"> 
                <p>    Muy pronto con nuevos sabores y productos en postres, tortas de tendencia, panadería y mucho más</p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-white flex items-center justify-center text-center mx-20">
            <div>
              <h1 className="text-2xl font-bold mb-4 text-text-secondary">Dirección</h1>
              <div className="text-gray-900 px-20 flex">
                <SiGooglemaps className="w-20"/>
                <p className="text-left">Av. Antofagasta Calle 6 y 7, La Paz, Bolivia</p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-white flex items-center justify-center text-center mx-20">
            <div>
              <h1 className="text-2xl font-bold mb-4 text-text-secondary pt-5">Atendemos</h1>
              <p className="text-gray-900 px-20 text-left">Lunes a domingo: De 08:00 a 21:30</p>
              <h1 className="text-2xl font-bold mb-4 text-text-secondary pt-10">Contactos</h1>
              <div className="text-gray-900 px-20 flex">
                <BsTelephoneFill className="w-20" />
                <p className="">63190136</p>
              </div>
            </div>
          </div>
        </section>
        <div className="py-10 flex justify-center items-center"> © 2024 Pastelería Alarcon - La Paz, Bolivia </div>
      </footer>
    )
}
