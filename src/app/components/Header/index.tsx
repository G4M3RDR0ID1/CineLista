import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>

                <h1 className={styles.header__logo}>
                     <Link href="/">Cinelista</Link>
                </h1>

            <nav className={styles.header__nav}>
                <Link href="/">Inicio</Link>
                <Link href="/filmes/em-alta">Em alta</Link>
                <Link href="/filmes/populares">Populares</Link>
                <Link href="/filmes/top-filmes">Top filmes</Link>
            </nav>
            </div>
        </header>
    )
}

export default Header