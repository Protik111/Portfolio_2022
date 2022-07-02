import HeadSeo from '../components/HeadSeo';
import Navbar from '../components/Navbar';
import Type from '../components/Type';
import styles from '../styles/Home.module.scss';
import Tilt from "react-parallax-tilt";
import Social from '../components/Social';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import PreLoader from '../components/PreLoader';

export default function Home() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="preloader">
        <PreLoader load={load}></PreLoader>
      </div>
      {!load && <div>
        <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
        <Navbar></Navbar>
        <Social></Social>
        <div className={`${styles.container} container ${load ? styles.noScroll : ''}`}>
          <div className={`${styles.details} row`}>
            <div className={`${styles.textContainer} col-12 col-sm-12 col-md-12 col-lg-7`} data-aos="zoom-in-right">
              <h1 className="heading">
                Hi There! <span className={styles.wave} role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <span className={styles.Iam}>{`I'm`}</span>
              <h1 className="heading-name">
                <strong className="main-name"> Rafiur Rahman Protik.</strong>
              </h1>

              <div className={styles.typeWriter}>
                <Type />
              </div>
              <Link href="/works">
                <button className={styles.button}>
                  See My Works
                </button>
              </Link>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 offset-lg-1" data-aos="zoom-in-left">
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
        </div>
      </div>}
    </>
  )
}
