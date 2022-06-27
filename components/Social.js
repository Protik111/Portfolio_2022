import styles from '../styles/Social.module.scss';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiOutlineMediumWorkmark,
    AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";


const Social = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.iconList}>
                <li className={styles.icon}>
                    <a
                        href="https://github.com/Protik111?fbclid=IwAR2gJtLXoD3eTwoY4F-M6Rvm9Z3iWukFd1otGBObw_GDV-gK4lopUfZcVsw"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiFillGithub size={32} className={styles.singleIcon}/>
                    </a>
                </li>
                <li className={styles.icon}>
                    <a
                        href="https://twitter.com/Protik111"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiOutlineTwitter size={32} className={styles.singleIcon}/>
                    </a>
                </li>
                <li className={styles.icon}>
                    <a
                        href="https://www.linkedin.com/in/rafiur-rahman-protik-476734159/?fbclid=IwAR0h0ELw8spo6bcDhugIyHCJabruRQBVorEefhew4jjepu3dbhbIFS_i7rA"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <FaLinkedinIn size={32} className={styles.singleIcon}/>
                    </a>
                </li>
                <li className={styles.icon}>
                    <a
                        href="https://medium.com/@rafiurrahmanprotik"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiOutlineMediumWorkmark size={32} className={styles.singleIcon}/>
                    </a>
                </li>
                <li className={styles.icon}>
                    <a
                        href="https://www.instagram.com/rafiur_rahman_protik/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiFillInstagram size={32} className={styles.singleIcon}/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Social;