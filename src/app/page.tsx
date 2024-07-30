import Hero from "@/ui/sections/Hero";
import Promotions from "@/ui/sections/Promotions";
import Services from "@/ui/Services";
import Products from "@/ui/sections/Products";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero/>
      <Promotions/>
      <Services/>
      <Products/>
    </div>
  );
}

