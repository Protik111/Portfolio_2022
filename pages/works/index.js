import { useState } from 'react';
import HeadSeo from '../../components/HeadSeo';
import Navbar from '../../components/Navbar';
import Social from '../../components/Social';
import styles from '../../styles/Works.module.scss';
import Tilt from "react-parallax-tilt";
import course from '../../assets/project';
import ProjectCard from '../../components/ProjectCard';

const Works = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const [active, setActive] = useState("projects");

    return (
        <div>
            <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
            <Navbar></Navbar>
            <Social></Social>
            {tabIndex === 1 && <div className={`${styles.container} container`}>
                {/* <div className={`${styles.details} row`}> */}
                {/* <div className={`${styles.textContainer} col-12 col-sm-12 col-md-12 col-lg-12`}> */}
                <div className={`${styles.cardContainer} row mt-5`}>
                    <div>
                        <button className={`${styles.button} ${active === 'about' ? styles.active : styles.button}`} onClick={() => {
                            setTabIndex(1);
                            setActive("projects");
                        }}>
                            Projects
                        </button>
                        <button className={styles.button} onClick={() => {
                            setTabIndex(2);
                            setActive("research")
                        }}>
                            Research
                        </button>
                    </div>

                    <div>
                        <h2 className="project-heading">
                            My Recent <strong className="purple">Projects </strong>
                        </h2>
                    </div>

                    {
                        course.map(singleproject => <ProjectCard key={singleproject.id} singleproject={singleproject}></ProjectCard>)
                    }
                </div>
            </div >}

            {/* {
                tabIndex === 2 && <Education setTabIndex={setTabIndex} active={active} setActive={setActive}></Education>
            }

            {
                tabIndex === 3 && <Skills setTabIndex={setTabIndex} active={active} setActive={setActive}></Skills>
            } */}
        </div >
    );
};

export default Works;