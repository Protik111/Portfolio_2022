import styles from '../../styles/Contact.module.scss';
import Navbar from "../../components/Navbar";
import Social from "../../components/Social";
import HeadSeo from "../../components/HeadSeo";
import emailjs from "emailjs-com";
import { useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Contact = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        console.log(e.target)

        emailjs.sendForm('service_3c6dc6o', 'template_irejry2', e.target, 'user_Ta3F0tXRsdORTtPDWRwLm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <HeadSeo title={"ProtikTheDev!"} description={"Protik The Developer"} keywords={"Protik The Developer"}></HeadSeo>
            <Navbar></Navbar>
            <Social></Social>
            <div className={`${styles.container} container`}>
                <div className={`${styles.contactContainer} row`}>
                    <div className={styles.contactTitle}>
                        <h3>The Contact Form</h3>
                        <p>I love reading your mails. ❤️</p>
                    </div>
                    <div className="container">
                        <form onSubmit={sendEmail}>
                            <div className="row mx-auto">
                                <div className="col-10 col-md-8 form-group mx-auto">
                                    <input type="text" className={`${styles.form} form-control shadow-none`} placeholder="Name" name="name" />
                                </div>
                                <div className="col-10 col-md-8 form-group pt-2 mx-auto">
                                    <input type="email" className={`${styles.form} form-control shadow-none`} placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-10 col-md-8 form-group pt-2 mx-auto">
                                    <input type="text" className={`${styles.form} form-control shadow-none`} placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-10 col-md-8 form-group pt-2 mx-auto">
                                    <textarea className={`${styles.form} form-control shadow-none`} id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-10 col-md-8 pt-3 mx-auto">
                                    <button className={`${styles.button}`}>
                                        Send <AiOutlineSend></AiOutlineSend>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;