import styles from '../styles/Layout.module.scss';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ title, description, keywords, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Navbar></Navbar>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

Layout.defaultProps = {
    title: 'Protik The Dev',
    description: 'Protik The Developer',
    keywords: 'Protik The Developer',
  }

export default Layout;