import useHeader from "../../hooks/useHeader"
import styles from "./Header.module.css"

const Header = () => {
    const sticky = useHeader()

    return (
        <header
            className={`${styles.appHeader} ${sticky ? styles.isSticky : ""}`}
        >
            <h1>Book Library App</h1>
        </header>
    )
}

export default Header
