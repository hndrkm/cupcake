import OurService from "../components/OurService";

const OurServicesData=
[
  {
     "src_img":"/PasteleriaA1.jpg",
     "title":"Un Viaje de Sabores", 
     "description":"Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. " 
  },
  {
     "src_img":"/PasteleriaA1.jpg",
     "title":"Un Viaje de Sabores", 
     "description":"Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. " 
  },
  {
     "src_img":"/PasteleriaA1.jpg",
     "title":"Un Viaje de Sabores", 
     "description":"Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. " 
  },
]


export default function OurServices() {
  return (

   <div className="w-3/6 mx-auto text-center ">

     <h2 className="text-5xl font-bold tracking-tight text-text-primary pb-10">NUESTROS SERVICIOS</h2>

     <div className="flex flex-col">
        {OurServicesData.map( item =>
            <OurService 
              src_img={item.src_img}
              title={item.title}
              description={item.description}
            />
        )}
     </div>

   </div>
  )
}

