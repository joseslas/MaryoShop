import Card from "../card/card";
import styles from "./cards.module.css"

const arr = [
    {
        id: 1,
        name:"Mens Casual Premium Slim Fit T-Shirts",
        images: [
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        ],
        price: 120
    },
    {
        id: 2,
        name:"Mens Casual Premium Slim Fit T-Shirts",
        images: [
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        ],
        price: 120
    },
    {
        id: 3,
        name:"Mens Casual Premium Slim Fit T-Shirts",
        images: [
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        ],
        price: 120
    },
    {
        id: 4,
        name:"Mens Casual Premium Slim Fit T-Shirts",
        images: [
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        ],
        price: 120
    }
]

interface path {
    pathName: string
};

const Cards: React.FC<path> = ({pathName}) => {
    return (
        <div className={styles.cardsContainer}>
            {
                arr.map(el => (
                        <Card name={el.name} image={el.images} price={el.price} id={el.id} pathName={pathName} key={el.id}/>
                ))
            }
        </div>
    )
}

export default Cards;