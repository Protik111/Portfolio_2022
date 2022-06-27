import HeadSeo from '../components/HeadSeo';
import Navbar from '../components/Navbar';
import Type from '../components/Type';
import styles from '../styles/Home.module.scss';
import Tilt from "react-parallax-tilt";
import Social from '../components/Social';

export default function Home() {
  return (
    <div>
      <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
      <Navbar></Navbar>
      <Social></Social>
      <div className={`${styles.container} container`}>
        <div className={`${styles.details} row`}>
          <div className={`${styles.textContainer} col-12 col-sm-12 col-md-12 col-lg-7`}>
            <h1 className="heading">
              Hi There! <span className={styles.wave} role="img" aria-labelledby="wave">👋🏻</span>
            </h1>

            <span className={styles.Iam}>I'm</span>
            <h1 className="heading-name">
              <strong className="main-name"> Rafiur Rahman Protik.</strong>
            </h1>

            <div className={styles.typeWriter}>
              <Type />
            </div>
            <button className={styles.button}>
              See My Works
            </button>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 offset-lg-1">
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
    </div>
  )
}
