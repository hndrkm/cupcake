import { SiGooglemaps } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <section className="flex justify-center py-4">
        <div className="flex flex-col justify-center p-8">
          <h1 className="text-2xl font-bold mb-4 text-text-primary">Pastelería Alarcón </h1>
          <div className="text-text-secondary font-semibold px-10 max-w-md">
            <p>Muy pronto con nuevos sabores y productos en postres, tortas de tendencia, panadería y mucho más.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-8">
          <h1 className="text-2xl font-bold mb-4 text-text-primary">Direcciónes</h1>
          <div className="flex flex-col justify-stretch">
            <div className="flex text-text-secondary font-semibold px-10 pt-2">
              <SiGooglemaps className="w-5 mr-2" />
              <p className="text-left">Villa Dolores: Av. Antofagasta Calle 6 y 7 Nro 1165.</p>
            </div>
            <div className="flex text-text-secondary font-semibold px-10 pt-2">
              <SiGooglemaps className="w-5 mr-2" />
              <p className="text-left">Villa Esperanza: Av. Sucre y Jose Arzabe Nro 606.</p>
            </div>
            <div className="flex text-text-secondary font-semibold px-10 pt-2">
              <SiGooglemaps className="w-5 mr-2" />
              <p className="text-left">Satelite: Av. Satelite frente al Hospital Holandes, lado pizzas Elis.</p>
            </div>
            <div className="flex text-text-secondary font-semibold px-10 pt-2">
              <SiGooglemaps className="w-5 mr-2" />
              <p className="text-left">16 de Julio: Estacion Mi Teleferico linea Roja lado boleteria.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-8">
          <h1 className="text-2xl font-bold mb-2 text-text-primary pt-5">Atendemos</h1>
          <p className="text-text-secondary px-10 font-semibold">Lunes a domingo: De 08:00 a 21:30</p>
          <h1 className="text-2xl font-bold mb-2 text-text-primary pt-10">Contactos</h1>
          <div className="flex text-text-secondary px-10 font-semibold">
            <BsTelephoneFill className="w-20" />
            <p className="">63190136</p>
          </div>
        </div>
      </section>
      <div className="pt-2 flex justify-center"> © 2024 Pastelería Alarcon - La Paz, Bolivia </div>
    </footer>
  )
}
