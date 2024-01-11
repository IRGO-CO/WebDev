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
                <spam className={styles.mainButon}>V</spam>
            </Container>
        </nav>
    )
}

export default Navbar;