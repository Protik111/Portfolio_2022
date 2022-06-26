import HeadSeo from '../components/HeadSeo';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss';
// import 'antd/dist/antd.css';

export default function Home() {
  return (
    <div>
      <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
      <Navbar></Navbar>
      <div className={`${styles.container} container`}>
        <div className="row">
          <div className="col-md-7">
            <h2>Rafiur Rahman Protik</h2>
          </div>

          <div className="col-md-5">
            <div className={styles.profile}>
              <div className={styles.center}>
                <div className={styles.white}>
                  <img className={styles.img} src="/formal-photo.jpg" />
                </div>
                <h3 className={styles.name}>Protik</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
