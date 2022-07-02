import styles from '../styles/Skills.module.scss';
import {
    DiNodejs,
    DiMongodb,
    DiBootstrap,
    DiHtml5,
    DiGit,
    DiSass
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiRedux, SiJavascript, SiReact, SiExpress } from "react-icons/si";
import { useEffect } from 'react';
import AOS from 'aos';

const Skills = ({ setTabIndex, active, setActive }) => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <div>
            {/* <div className={`${styles.container} container`}> */}
                <div className={`${styles.container} container ms-lg-4`}>
                    <div className={`${styles.details} row`}>
                        <div className={`${styles.textContainer} col-12 col-sm-12 col-md-10 col-lg-6`} data-aos="fade-right">
                            <div>
                                <button className={`${styles.button}`} onClick={() => {
                                    setTabIndex(1);
                                    setActive("about");
                                }}>
                                    About Me
                                </button>
                                <button className={styles.button} onClick={() => {
                                    setTabIndex(2);
                                    setActive("education")
                                }}>
                                    Education
                                </button>
                                <button className={`${styles.button} ${active === 'skill' ? styles.active : styles.button}`} onClick={() => {
                                    setTabIndex(3);
                                    setActive("skill")
                                }}>
                                    Skill
                                </button>
                            </div>

                            <div className="mt-1">
                                <h2>Language & Frameworks</h2>
                            </div>

                            <div className={styles.firstRow}>
                                <div className={styles.tech_icons}>
                                    <SiJavascript />
                                </div>
                                <div className={styles.tech_icons}>
                                    <DiNodejs />
                                </div>
                                <div className={styles.tech_icons}>
                                    <SiReact />
                                </div>
                            </div>
                            <br></br>
                            <div className={styles.firstRow}>
                                <div className={styles.tech_icons}>
                                    <SiExpress />
                                </div>
                                <div className={styles.tech_icons}>
                                    <SiNextdotjs />
                                </div>
                                <div className={styles.tech_icons}>
                                    <SiRedux />
                                </div>
                            </div>

                        </div>

                        <div className={`${styles.textContainer} ${styles.textContainer2} col-12 col-sm-12 col-md-10 col-lg-6`} data-aos="fade-left">
                            <div className="">
                                <h2>Databases & Others</h2>
                            </div>
                            <div className={styles.firstRow}>
                                <div className={styles.tech_icons}>
                                    <DiMongodb />
                                </div>
                                <div className={styles.tech_icons}>
                                    <SiFirebase />
                                </div>
                                <div className={styles.tech_icons}>
                                    <DiGit />
                                </div>
                            </div>
                            <br></br>
                            <div className={styles.firstRow}>
                                <div className={styles.tech_icons}>
                                    <DiHtml5 />
                                </div>
                                <div className={styles.tech_icons}>
                                    <DiBootstrap />
                                </div>
                                <div className={styles.tech_icons}>
                                    <DiSass />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className=''>
                    <hr className='heading' />
    </div> */}
                {/* </div> */}
            </div >
        </div>
    );
};

export default Skills;