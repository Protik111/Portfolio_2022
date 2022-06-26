import styles from '../styles/Navbar.module.scss';
import { AiFillHome } from 'react-icons/ai';
import { FiCode } from 'react-icons/fi';
import { BsFillPenFill, BsFillPersonFill } from 'react-icons/bs';
import { MdEmail, MdDoubleArrow } from 'react-icons/md';
import { GiWideArrowDunk } from 'react-icons/gi';


const Navbar = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.navbar_nav}>

                <li className={styles.logo}>
                    <button href="#" className={`${styles.nav_link} ${styles.button}`} id={styles.nav_linkid}>
                        <MdDoubleArrow className={styles.iconLogo} size={32}></MdDoubleArrow>
                    </button>
                </li>

                <li className={`${styles.nav_link} ${styles.button}`}>
                    <a href="#" className={styles.nav_link} id={styles.nav_linkid}>
                        <AiFillHome className={styles.icon} size={32}></AiFillHome>
                        <p className={styles.link_text}>Home</p>
                    </a>
                </li>

                <li className={`${styles.nav_link} ${styles.button}`}>
                    <a href="#" className={styles.nav_link}>
                        <BsFillPersonFill className={styles.icon} size={32}></BsFillPersonFill>
                        <p className={styles.link_text}>About</p>
                    </a>
                </li>

                <li className={`${styles.nav_link} ${styles.button}`}>
                    <a href="#" className={styles.nav_link}>
                        <FiCode className={styles.icon} size={32}></FiCode>
                        <p className={styles.link_text}>Works</p>
                    </a>
                </li>

                <li className={`${styles.nav_link} ${styles.button}`}>
                    <a href="#" className={styles.nav_link}>
                        <BsFillPenFill className={styles.icon} size={32}></BsFillPenFill>
                        <p className={styles.link_text}>Blogs</p>
                    </a>
                </li>

                <li className={`${styles.nav_link} ${styles.button}`}>
                    <a href="#" className={styles.nav_link}>
                        <MdEmail className={styles.icon} size={32}></MdEmail>
                        <p className={styles.link_text}>Mail</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;