import { CardService } from "./components/CardService";
const dataService =
    [
        {
            'id': 1,
            'name': "Pasteleria Diaria",
            'href': "/"
        },
        {
            'id': 2,
            'name': "Cafeteria",
            'href': "/products"
        },
        {
            'id': 3,
            'name': "Tortas Clasicas",
            'href': "/about"
        },
        {
            'id': 4,
            'name': "Tortas para Eventos",
            'href': "/contact"
        }
    ]
export default function Footer() {
    return (
        <section id="services" className="py-10 bg-background">
            <div className="w-full text-5xl text-center font-bold tracking-tight text-text-primary p-4">SERVICIOS</div>
            <div className="flex flex-row justify-center">
                {dataService.map((service) =>
                    <CardService key={service.id} name={service.name} img="/pasteleria2.png" />
                )}

            </div>
        </section>
    )
}
