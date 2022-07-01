import styles from '../../styles/Contact.module.scss';
import Navbar from "../../components/Navbar";
import Social from "../../components/Social";
import HeadSeo from "../../components/HeadSeo";
import emailjs from "emailjs-com";
import { AiOutlineSend } from 'react-icons/ai';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useEffect } from 'react';
import AOS from 'aos';

const Contact = () => {

    const createNotification = (type) => {
        return () => {
            switch (type) {
                case 'success':
                    NotificationManager.success('Message Sent Successfully');
                    break;
                case 'error':
                    NotificationManager.error('Sorry! Error Occurred.');
                    break;
            }
        };
    };

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_3c6dc6o', 'template_irejry2', e.target, 'user_Ta3F0tXRsdORTtPDWRwLm')
            .then((result) => {
                createNotification('success');
                console.log('success')
                alert("Message Sent Successfully")
            }, (error) => {
                createNotification('error');
                console.log('error')
                alert("Sorry! Error Occurred.")
            });
        e.target.reset()
    }

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
            <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
            <Navbar></Navbar>
            <Social></Social>
            <div className={`${styles.container} container`} data-aos="zoom-out">
                <div className={`${styles.contactContainer} row`}>
                    <div className={styles.contactTitle}>
                        <h3>Feel Free To Contact.</h3>
                        <p>I love reading your mails. ❤️</p>
                    </div>
                    <div className="container">
                        <form onSubmit={sendEmail}>
                            <div className="row mx-auto">
                                <div className="col-10 col-md-8 form-group mx-auto">
                                    <input type="text" className={`${styles.form} form-control shadow-none`} placeholder="Name" name="name" required />
                                </div>
                                <div className="col-10 col-md-8 form-group pt-2 mx-auto">
                                    <input type="email" className={`${styles.form} form-control shadow-none`} placeholder="Email Address" name="email" required />
                                </div>
                                <div className="col-10 col-md-8 form-group pt-2 mx-auto">
                                    <input type="text" className={`${styles.form} form-control shadow-none`} placeholder="Subject" name="subject" required />
                                </div>
                                <div className="col-10 col-md-8 form-group pt-2 mx-auto">
                                    <textarea className={`${styles.form} form-control shadow-none`} id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                                </div>
                                <div className="col-10 col-md-8 pt-3 mx-auto">
                                    <button className={`${styles.button}`}>
                                        Send <AiOutlineSend></AiOutlineSend>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <NotificationContainer />
                </div>
            </div>
        </div>
    );
};

export default Contact;