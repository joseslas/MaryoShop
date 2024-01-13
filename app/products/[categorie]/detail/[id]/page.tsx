"use client"
import styles from "./page.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Detail = () => {

    const colors = ["red", "black", "blue", "pink"];
    const buttonStyle = (color: string) => {
        const ButtonColor = {
            backgroundColor: color
        }
        return ButtonColor;
    };

    const tallas = ["S", "M", "L", "XL"];

    return (
        <div className={styles.detailContainer}>
            <div className={styles.subContainer}>
                <div className={styles.imageContainer}>
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />   
                </div>
                <div className={styles.information}>
                    <div>
                        <h2>Mens Casual Premium Slim Fit T-Shirts</h2>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quas. Eligendi autem distinctio corrupti laborum, sed expedita dolorum quae voluptas nulla odit, animi aliquam nostrum saepe ab illo, aliquid at.</p>
                    </div>
                    <div>
                        <h2>En stock:</h2>
                        <p>15</p>
                    </div>
                    <div className={styles.colorsContainer}>
                        <h2>Colores disponibles:</h2>
                        <div className={styles.colors}>
                        {
                            colors.map(el => (
                                <button style={buttonStyle(el)}></button>
                            ))
                        }
                        </div>
                    </div>
                    <div className={styles.tallasContainer}>
                        <h2>Tallas:</h2>
                        {
                            tallas.map(el => (
                                <button>{el}</button>
                            ))
                        }
                    </div>
                    <div>
                        <h3>$30.000</h3>
                    </div>
                    <div className={styles.cartButton}>
                        <button>Agregar al carrito<AiOutlineShoppingCart/></button>
                        {AiOutlineShoppingCart}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;