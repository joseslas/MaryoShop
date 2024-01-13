import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiUserCircleLight } from "react-icons/pi";
import style from "./navbar.module.css"
import logo from "../navbar/maryo.jpg"
import SearchBar from "../searchbar/Searchbar";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <Link href="/"><img src={logo.src} alt="" /></Link>
            </div>
            <div className={style.types}>
            <Link href="/products/damas"><button>Damas</button></Link>
                <Link href="/products/hombres"><button>Hombres</button></Link>
                <button>Infantil</button>
            </div>
            <SearchBar/>
            <div className={style.icons}>
                <AiOutlineShoppingCart/>
                <PiUserCircleLight/>
            </div>
        </div>
    )
}

export default NavBar;