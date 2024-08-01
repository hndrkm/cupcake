export function CardBackground (
  props:{children?:React.ReactNode, className?:string}
){
  return(

        <div className={`w-full bg-white my-4 bg-background  rounded-lg shadow 
                        hover:shadow-lg hover:shadow-primary  duration-700 hover:scale-105 
                        hover:bg-primary  group ${props.className}`}>
        {props.children}
        </div>
  )
}
