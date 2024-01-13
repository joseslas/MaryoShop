"use client"
import React from "react";
import styles from "./card.module.css"
import { useRouter } from "next/navigation";

interface cardProps {
    image: string[];
    name: string;
    price: number;
    id: number;
    pathName: string;
}

const Card: React.FC<cardProps> = ({ image, name, price, id, pathName }) => {

    const router = useRouter();

    return (
        <div className={styles.cardContainer} onClick={() => { router.push(`${pathName}/detail/${id}`) }}>
            <img src={image[1]} alt={name} />
            <h3>{name}</h3>
            <h4>${price}</h4>
        </div>
    )
}

export default Card;