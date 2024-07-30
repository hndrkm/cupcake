import { BusinessBranch } from "@/ui/components/BusinessBranch";
import BusinessBranchs  from '@/data/BusinessBranchs.json';

export default function VisitUs(){
  return(
    <div className="w-3/6 mx-auto text-center ">

      <h2 className="text-5xl font-bold tracking-tight text-text-primary py-10">VISITANOS</h2>

      {BusinessBranchs.map((item) =>
        <BusinessBranch 
          title={item.title} 
          src_img={item.src_img} 
          src_map={item.src_map}
          description_title={item.description_title}
          description_text={item.description_text}
        />)
      }
    </div>
  )
}
