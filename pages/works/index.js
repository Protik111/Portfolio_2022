import { useState } from 'react';
import HeadSeo from '../../components/HeadSeo';
import Navbar from '../../components/Navbar';
import Social from '../../components/Social';
import styles from '../../styles/Works.module.scss';
import project from '../../assets/project';
import ProjectCard from '../../components/ProjectCard';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Works = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const [active, setActive] = useState("projects");

    const createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Research Comming Soon!', 'Close after 3000ms', 3000);
                    break;
            }
        };
    };

    return (
        <div>
            <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
            <Navbar></Navbar>
            <Social></Social>
            {tabIndex === 1 && <div className={`${styles.container} container`}>
                {/* <div className={`${styles.details} row`}> */}
                {/* <div className={`${styles.textContainer} col-12 col-sm-12 col-md-12 col-lg-12`}> */}
                <section className={`${styles.cardContainer} row mt-5`}>
                    <div className={styles.btnContainer}>
                        <button className={`${styles.button} ${active === 'projects' ? styles.active : styles.button}`} onClick={() => {
                            setTabIndex(1);
                            setActive("projects");
                        }}>
                            Projects
                        </button>
                        <button className={styles.button} onClick={createNotification('info')}>
                            Research
                        </button>
                    </div>

                    <div>
                        <h2 className="project-heading">
                            My Recent <strong className="purple">Projects </strong>
                        </h2>
                    </div>

                    <div className={`${styles.projectContainer} row`}>
                        {
                            project.map(singleproject => <ProjectCard key={singleproject.id} singleproject={singleproject}></ProjectCard>)
                        }
                    </div>
                </section>
                    <NotificationContainer />
            </div >}
        </div >
    );
};

export default Works;