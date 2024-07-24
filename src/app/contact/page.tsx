export default function ContactPage() {
    return (
        <div className="m-10">
            <div className="w-full max-w-sm bg-background border border-primary rounded-lg shadow">
                <a href="#">
                    <img className="pb-8  rounded-t-lg" src="/PasteleriaA1.jpg" alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-text-primary">Porción de pastel de nuez</h5>
                    </a>
                    <p className="p-2">Porción cuadrada de pastel de nuez de castilla, hecho con nueces molidas autenticas, Relleno con manjar de dulce de leche cubierta en crema batida.</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-text-primary">Bs.12,00</span>
                        <a href="#" className="text-white bg-button hover:bg-button-hover focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center">Al Pedido</a>
                    </div>
                </div>
            </div>

           
        </div>
    );
}
