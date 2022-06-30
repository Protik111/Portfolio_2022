import React from 'react';
import styles from '../styles/ProjectCard.module.scss';

const ProjectCard = ({ singleproject }) => {
    const { imgPath, isBlog, title, description, link, fgithub, bgithub, both, stack } = singleproject;
    return (
        <div className={`${styles.projectCard} col-md-3`}>
            <div>
                <img className={styles.projectImg} src={imgPath}></img>
            </div>
            <div className="mt-2">
                <h4>{title}</h4>
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
                        <Icon size={25}/>
                        </span>
                    )
                })
            }
        </div>
    );
};

export default ProjectCard;