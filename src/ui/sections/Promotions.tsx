import { Promotion } from "@/ui/components/Promotion"
import PromotionsData from "@/data/Promotions.json"

export default function Promotions(){
  return(
      <section className="flex flex-col items-center py-10 bg-background">
        <div className="w-full text-5xl text-center font-bold tracking-tight text-text-primary p-8">PROMOCIONES</div>
        <div className="container grid grid-cols-2 gap-10 place-items-center h-full max-w-fit" >
          {PromotionsData.map( item =>
            <Promotion
              key={item.title}
              title={item.title}
              src_img={item.src_img}
              description={item.description}
              price={item.price}
            />
          )}
        </div>
      </section>

  )
}
