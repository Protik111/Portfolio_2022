import React, { useEffect } from 'react';
import styles from '../styles/ProjectCard.module.scss';
import AOS from 'aos';

const ProjectCard = ({ singleproject }) => {
    const { imgPath, isBlog, title, description, link, fgithub, bgithub, both, stack } = singleproject;

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <div className={`${styles.projectCard} col-md-4 col-lg-3`} data-aos="zoom-out">
            <div>
                <img className={styles.projectImg} src={imgPath}></img>
            </div>
            <div className="mt-2">
                <h5 className={styles.title}>{title}</h5>
            </div>
            {/* <p className={styles.courseDesc}>{description}</p> */}
            {
                stack.map((genre, idx) => {
                    const Icon = stack[idx];

                    return (
                        <span
                            className={styles.genre_btn}
                            onClick={() => genreSelectionHandler(genre.id)}
                        >
                            <Icon size={20} />
                        </span>
                    )
                })
            }
            <div className={styles.btncontainer}>
                <button className={styles.button} >
                    <a href={link} target="_blank">Live</a>
                </button>
                <button className={`${styles.button}`}>
                    <a href={fgithub} target="_blank">Code</a>
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;