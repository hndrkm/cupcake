'use client'
import { FC } from "react"

interface Props {
    locale: string
}
export const Navbar: FC<Props> = ({ locale }) => {
    return (
        <div>
            <nav className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
                hola
            </nav>
        </div>

    )
} 