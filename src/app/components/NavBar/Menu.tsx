import Link from "next/link"
import { links } from "../links"

interface props {
    toggleOpen: () => void
}
export function Menu({toggleOpen}: props) {
    return(
        <div onClick={toggleOpen} className="w-screen z-50 fixed top-20 lg:hidden">
            <nav className="bg-black bg-opacity-70 flex items-center justify-center py-8">
                <ul className="flex flex-col gap-7 items-center">
                    {links.map(({label, route}) => {
                        return(
                            <li className='text-white block font-bold hover:text-sky-400' key={route}>
                                <Link href={route}>
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}