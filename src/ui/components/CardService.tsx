import Image from "next/image";
export function CardService (props:{name:string,img:string})
{
    return (
        <div id="card" className="flex flex-col m-10 max-w-40 text-center group 
                                  transform transition-transform duration-700 hover:scale-125">
          <div className="relative flex flex-row justify-center rounded-full items-center w-40 h-40 ">
            <Image
              className="w-full h-auto rounded-full transition-transform duration-700 ease-in-out group-hover:blur-sm"
              src={props.img}
              width={500}
              height={500}
              alt="Picture of the author"
              priority={false}
            />
            <div className="items-center justify-center absolute opacity-0 
                            group-hover:block  group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                <button className="px-4 py-2 bg-button text-white font-semibold rounded-lg
                                   hover:bg-popover hover:text-selected ">Saber mas</button>
            </div>
          </div>
          <h5 className="text-2xl font-semibold tracking-tight text-text-primary py-4">{props.name}</h5>
        </div>
    )
}
