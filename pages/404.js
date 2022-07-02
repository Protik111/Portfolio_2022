import styles from '../styles/404.module.scss';

const Error = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imgError} src="./errorPage.gif"></img>
        </div>
    );
};

export default Error;