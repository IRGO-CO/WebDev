import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from "../../img/logo.png";


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/About'>About</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                    <li className={styles.item}>   
                        <Link to='/NewProject'>Project</Link>
                    </li>
                </ul>
                <input className={styles.mainButton} type="checkbox" id="menu" name="main_menu" />
                <label className={styles.mainLabel} htmlFor="main_menu"></label>

             
            </Container>
        </nav>
    )
}

export default Navbar;