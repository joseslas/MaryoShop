"use client"
import { IoSearchCircleOutline } from "react-icons/io5"
import styles from "./searchbar.module.css"
import AutoComplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

const categorias = ["Camisetas", "Shorts", "Buzos", "Polos", "Pantalones", "Camisas", "Chaquetas", "Medias", "Joggers", "Jeans", "Ropa interior", "Calzado"];

const SearchBar = () => {
    return (
        <div className={styles.searchbar}>
            <AutoComplete
            disablePortal
            id="autocompleteInput"
            options={categorias}
            sx={{width: 200}}
            renderInput={(params) => <TextField {...params} label="Buscar producto"/>}
            />
            <button><IoSearchCircleOutline/></button>
        </div>
    )
}

export default SearchBar