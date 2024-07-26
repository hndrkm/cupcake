import Link from "next/link"

export function NavItem (props:{name:string,href:string})
{
    return (
        <div>
            <Link href={props.href} 
            className="font-bold block py-2 px-3 text-text-primary underline-offset-4
            hover:text-accent
            hover:underline
            hover:translate-y-[-5px] transition duration-300 ease-in-out">
            {props.name}
            </Link>
        </div>
    )
}
