export function CardTitle(
  props:{name:string,className?:string}
){
  return(
      <h2 className={`text-3xl mb-4 font-semibold text-text-primary group-hover:text-card-title-hover ${props.className}`}>
      {props.name}
      </h2>
  )
}
