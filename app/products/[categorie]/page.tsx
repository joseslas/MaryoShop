"use client"
import MenuLateral from "@/components/menu/menu";
import styles from "./page.module.css";
import Cards from "@/components/cards/cards";
import { usePathname } from "next/navigation";

interface Param {
    params: {
        categorie: string
    };
};

const Mujer = ( { params }: Param ) => {

    const param = params.categorie
    const pathName = usePathname()

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>Ropa para {param}</h2>
                <p>Descubre una amplia selección de moda {param} en nuestro sitio web. ¡Esperamos que encuentres todo lo que necesitas para tu estilo!</p>   
            </div>
                <div className={styles.sort}>
                    <label htmlFor="ordenamiento">Ordenar por:</label>
                    <select name="ordenamiento" id="">
                        <option value="">Ordenamiento</option>  
                    </select>
                </div>
            <div className={styles.hombreContainer}>
                <div className={styles.menuLateral}>
                    <MenuLateral/>
                </div>
                <div>
                    <Cards pathName={pathName}/>
                </div>
            </div>
        </div>
    )
}

export default Mujer;