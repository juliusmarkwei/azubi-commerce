import Image from "next/image"
import cartIcon from '../assets/cart/cartIcon.svg'
import logo from '../assets/shared/desktop/logo.svg'
import Link from "next/link"


export default function Header () {
    return (
        <nav className="flex justify-between text-white pt-4 pb-8 border-b border-gray/5">
            <Link href="#" className="font-bold text-xl"><Image src={logo} alt="logo" /></Link>
            <div className="flex gap-6">
                <Link href="#" className="hover:text-orange cursor-pointer">HOME</Link>
                <Link href="#" className="hover:text-orange cursor-pointer">HEADPHONES</Link>
                <Link href="#" className="hover:text-orange cursor-pointer">SPEAKERS</Link>
                <Link href="#" className="hover:text-orange cursor-pointer">EARPHONES</Link>
            </div>
            <Link href="#"><Image src={cartIcon} alt="cart" /></Link>
        </nav>
    )
}
