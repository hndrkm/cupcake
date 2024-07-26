import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { Sucursal } from "@/ui/components/Sucursal";

export default function ContactPage() {
    return (
      <div className="pt-28 w-screen space-y-8  ">
        {/*Section Nosotros*/}
        <div className="w-3/6 mx-auto text-center ">
          <h2 className="text-5xl font-bold tracking-tight text-text-primary pb-10">CONTACTENOS</h2>
          <div className="flex flex-col">

            <div className="shadow-lg hover:shadow-lg hover:shadow-primary group duration-700 hover:scale-105  ">
              <form className="space-y-6 p-6 w-5/6 mx-auto rounded-lg ">
                {/* Nombre */}
                <div className="flex items-center space-x-4">
                  <label htmlFor="name" className="w-1/3 text-center font-semibold text-text-primary">Nombre:</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                  />
                </div>

                {/* Mensaje */}
                <div className="flex items-start space-x-4">
                  <label htmlFor="message" className="w-1/3 text-center font-semibold text-text-primary">Mensaje:</label>
                  <textarea
                    id="message"
                    placeholder="Escribe tu mensaje"
                    rows={4}
                    spellCheck="false"
                    className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                  />
                </div>

                {/* Celular */}
                <div className="flex items-center space-x-4">
                  <label htmlFor="phone" className="w-1/3 text-center font-semibold text-text-primary ">Celular:</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Ingresa tu número de celular"
                    className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                  />
                </div>

                <div className="flex justify-center p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out">
                  <button
                    type="submit"
                    className="bg-button text-button-text py-2 px-4 rounded-lg hover:bg-button-hover focus:outline-none focus:ring-2 focus:ring-text-primary "
                  >
                    Enviar
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center  py-8 ">
                <FaFacebookSquare className="text-button hover:text-button-hover w-14 h-14 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
                <RiWhatsappFill   className="text-button hover:text-button-hover w-14 h-14 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
                <FaInstagram      className="text-button hover:text-button-hover w-14 h-14 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
              </div>

            </div>
          </div>
        </div>
        {/*Section Visitanos*/}
        <div className="w-3/6 mx-auto text-center ">
            <h2 className="text-5xl font-bold tracking-tight text-text-primary py-10">VISITANOS</h2>
           <Sucursal 
             titulo_sucursal="VILLA DOLORES" 
             img="/PasteleriaA1.jpg" 
             src_map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61199.62370568261!2d-68.19119308928593!3d-16.527284925332463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfa02b12e1db%3A0x2d29852bbd9bc237!2sPasteleria%20Alarc%C3%B3n!5e0!3m2!1sen!2sbo!4v1722031296961!5m2!1sen!2sbo"
             titulo_descripcion="MMM... Un Viaje de Sabores en Cada Taza"
             descripcion="Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. "
           />
           <Sucursal 
             titulo_sucursal="UPEA" 
             img="/PasteleriaA1.jpg" 
             src_map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9640.07343572056!2d-68.19547236599337!3d-16.49244708296408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf65b887986d%3A0x3919ffcf39c95c2d!2sPasteleria%20Alarc%C3%B3n!5e0!3m2!1sen!2sbo!4v1722032534393!5m2!1sen!2sbo"
             titulo_descripcion="MMM... Un Viaje de Sabores en Cada Taza"
             descripcion="Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. "
           />
           <Sucursal 
             titulo_sucursal="SATÉLITE" 
             img="/PasteleriaA1.jpg" 
             src_map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19276.5006317275!2d-68.17088935444747!3d-16.529010149812237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf00419f6a23%3A0x84e675c34f59d05a!2sPasteleria%20Alarc%C3%B3n!5e0!3m2!1sen!2sbo!4v1722032673888!5m2!1sen!2sbo"
             titulo_descripcion="MMM... Un Viaje de Sabores en Cada Taza"
             descripcion="Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. "
           />
           <Sucursal 
             titulo_sucursal="TELEFÉRICO ROJO" 
             img="/PasteleriaA1.jpg" 
             src_map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.4894464007546!2d-68.16507370920716!3d-16.497326321890075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfcdf7330b29%3A0x5f531ba0de2a66d2!2sSilver%20Line%2C%20Red%20Line%20and%20Blue%20Line%20Cable%20Car%20Station!5e0!3m2!1sen!2sbo!4v1722032869352!5m2!1sen!2sbo"
             titulo_descripcion="MMM... Un Viaje de Sabores en Cada Taza"
             descripcion="Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. "
           />
        </div>
      </div>
    );
}
