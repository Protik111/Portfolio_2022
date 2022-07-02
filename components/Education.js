import styles from '../styles/Education.module.scss';
import Tilt from "react-parallax-tilt";
import { useEffect } from 'react';
import AOS from 'aos';

const Education = ({ setTabIndex, active, setActive }) => {
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
            <div className={`${styles.container} container`}>
                <div className={`${styles.details} row`}>
                    <div className={`${styles.textContainer} col-12 col-sm-12 col-md-10 col-lg-7`} data-aos="fade-right">
                        <div>
                            <button className={`${styles.button}`} onClick={() => {
                                setTabIndex(1);
                                setActive("about");
                            }}>
                                About Me
                            </button>
                            <button className={`${styles.button} ${active === 'education' ? styles.active : styles.button}`} onClick={() => {
                                setTabIndex(2);
                                setActive("education")
                            }}>
                                Education
                            </button>
                            <button className={styles.button} onClick={() => {
                                setTabIndex(3);
                                setActive("skill")
                            }}>
                                Skill
                            </button>
                        </div>

                        <Tilt className="mt-2">
                            <img className={styles.eduImg} src="/AIUB.png" alt="" />
                        </Tilt>
                        <div className="">
                            <div>
                                <h4>American International University-Bangladesh(Aiub)</h4>
                            </div>
                            <div>
                                <h6>Bachelor of Science in Computer Science and Engineering</h6>
                                <p><bold>2017-2021</bold></p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.textContainer} col-12 col-sm-12 col-md-10 col-lg-5`} data-aos="fade-left">
                        <div className={styles.college}>
                            <div>
                                <h4>BAF Shaheen College, Dhaka</h4>
                            </div>
                            <div>
                                <h6>Higher Secondary School Certificate</h6>
                                <p><bold>2014-2016</bold></p>
                            </div>
                        </div>
                        <Tilt className="">
                            <img className={styles.eduImg2} src="/baf.png" alt="" />
                        </Tilt>

                        <div className={styles.college2}>
                            <div>
                                <h4>BAF Shaheen College, Dhaka</h4>
                            </div>
                            <div>
                                <h6>Higher Secondary School Certificate</h6>
                                <p><bold>2014-2016</bold></p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className=''>
                    <hr className='heading' />
    </div> */}
            </div>
        </div>
    );
};

export default Education;
