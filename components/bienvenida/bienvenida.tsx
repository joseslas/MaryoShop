import styles from "./bienvenida.module.css"

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <p>Hola <b>Nombre</b>, bienvenido a <b>Mar-yoShop</b>. Estamos felices de verte aquí. ¡Echa un vistazo a nuestras últimas novedades y promociones!</p>
        </div>
    )
}

export default Welcome;