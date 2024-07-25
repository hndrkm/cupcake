import Image from "next/image";
export function CardService (props:{name:string,img:string})
{
    return (
        <div id="card" className="justify-center  m-10  text-center group  transform transition-transform duration-700 hover:scale-125">
          <div className="relative    bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-cover bg-center flex justify-center rounded-full items-center w-40 h-40 ">
            <Image
              className="rounded-full transition-transform duration-700 ease-in-out group-hover:blur-sm"
              src={props.img}
              layout="fill"
              quality={100}
              objectFit="cover"
              alt="Picture of the author"
            />
            <div className="  items-center justify-center absolute  group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                <button className="px-4 py-2 bg-text-secondary hover:bg-popover text-popover hover:text-selected rounded-lg font-semibold">saver mas</button>
            </div>
          </div>
          <h5 className="text-xl font-semibold tracking-tight text-popover py-4">{props.name}</h5>
        </div>
    )
}
