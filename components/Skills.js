import { CgCPlusPlus } from "react-icons/cg";
import styles from '../styles/Skills.module.scss';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiBootstrap,
    DiHtml5,
    DiGit,
    DiCss3
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiRedux, SiTypescript, SiJavascript, SiReact } from "react-icons/si";

const Skills = ({ setTabIndex }) => {
    return (
        <div>
            <div className={`${styles.container} container`}>
                <div className={`${styles.container} container`}>
                    <div className={`${styles.details} row`}>
                        <div className={`${styles.textContainer} col-12 col-sm-12 col-md-10 col-lg-6`}>
                            <div>
                                <button className={styles.button} onClick={() => setTabIndex(1)}>
                                    About Me
                                </button>
                                <button className={styles.button} onClick={() => setTabIndex(2)}>
                                    Education
                                </button>
                                <button className={styles.button} onClick={() => setTabIndex(3)}>
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
                                    <SiTypescript />
                                </div>
                                <div className={styles.tech_icons}>
                                    <SiNextdotjs />
                                </div>
                                <div className={styles.tech_icons}>
                                    <SiRedux />
                                </div>
                            </div>

                        </div>

                        <div className={`${styles.textContainer} ${styles.textContainer2} col-12 col-sm-12 col-md-10 col-lg-6`}>
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
                                    <DiCss3 />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className=''>
                    <hr className='heading' />
    </div> */}
                </div>
            </div >
        </div>
    );
};

export default Skills;