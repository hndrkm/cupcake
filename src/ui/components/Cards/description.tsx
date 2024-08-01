export function CardDescription(
  props:{description:string,className?:string}
){
  return(
      <p className={`text-gray-700 
                     group-hover:text-white ${props.className}`}> 
      {props.description}
      </p>
  )
}
