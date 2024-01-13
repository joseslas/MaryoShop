import styles from "./menu.module.css"

const categorias = ["Camisetas", "Shorts", "Buzos", "Polos", "Pantalones", "Camisas", "Chaquetas", "Medias", "Joggers", "Jeans", "Ropa interior", "Calzado"]

const MenuLateral = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.submenu}>
                <p>Categorias</p>
                <ol>
                    {
                        categorias.map(el => (
                            <li>
                                <input type="checkbox" name={el}/>
                                <label htmlFor={el}>{el}</label>   
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default MenuLateral;