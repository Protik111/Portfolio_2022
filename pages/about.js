import styles from '../styles/About.module.scss';
import HeadSeo from "../components/HeadSeo";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import Tilt from "react-parallax-tilt";
import { useState } from 'react';
import Education from '../components/Education';
import Skills from '../components/Skills';

const about = () => {
    const [tabIndex, setTabIndex] = useState(1);

    return (
        <div>
            <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
            <Navbar></Navbar>
            <Social></Social>
            {tabIndex === 1 && <div className={`${styles.container} container`}>
                <div className={`${styles.details} row`}>
                    <div className={`${styles.textContainer} col-12 col-sm-12 col-md-10 col-lg-5`}>
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
                        <h1 className="mt-1">
                            Let Me Introduce, Myself.
                        </h1>
                        <p className={styles.aboutDetails}>
                            I'm a Sofware Developer from Dhaka, Bangladesh.
                            <br />
                            <br />I build application with
                            <i>
                                <b className={styles.skill}> JavaScript, React.js, Node.js. </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className={styles.skill}>Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className={styles.skill}>
                                    Backend Development.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className={styles.skill}>Node.js</b> and
                            <i>
                                <b className={styles.skill}>
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className={styles.skill}> React.js,</b>
                            </i>
                            <i>
                                <b className={styles.skill}> Next.js</b>
                            </i>
                        </p>
                    </div>

                    <div className="col-12 col-sm-12 col-md-10 col-lg-3">
                        <Tilt>
                            <div className={styles.profile}>
                                <div className={styles.center}>
                                    <div className={styles.white}>
                                        <img className={styles.img} src="/formal-photo.jpg" />
                                    </div>
                                    <h3 className={styles.name}>Protik</h3>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>}

            {
                tabIndex === 2 && <Education setTabIndex={setTabIndex}></Education>
            }

            {
                tabIndex === 3 && <Skills setTabIndex={setTabIndex}></Skills>
            }
        </div>
    );
};

export default about;