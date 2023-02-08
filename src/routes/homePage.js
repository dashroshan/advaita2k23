import classes from "./homePage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";

import AngleButton from "../components/angleButton";

import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <div className={classes.homePage}>
            <section className={classes.hero}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translate(-10rem, -5.3rem)', opacity: 0 }} whileInView={{ transform: 'translate(0rem, -5.3rem)', opacity: 1 }} transition={{ duration: 1, type: "spring" }} className={classes.leftVertical}>
                    <div>FOLLOW US ON: </div>
                    <a href="#"><img src={iconIg} alt="social" /></a>
                    <a href="#"><img src={iconTw} alt="social" /></a>
                    <a href="#"><img src={iconYt} alt="social" /></a>
                </motion.div>

                <motion.div viewport={{ once: true }} initial={{ transform: 'translate(-10rem, 4.5rem)', opacity: 0 }} whileInView={{ transform: 'translate(0rem, 4.5rem)', opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.15 }} className={classes.rightVertical}>
                    IIIT BHUBANESWAR, ODISHA
                </motion.div>
            </section>

            <section className={classes.aboutSection}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(6rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.15 }}><img src="https://advaita-iiitbh.in/static/images/home/stage.webp" alt="advaita" /></motion.div>
                <div className={classes.aboutText}>
                    <div>
                        <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-0.5rem)', opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.15 }}>2K23</motion.div>
                        <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-3rem)', opacity: 1 }} transition={{ duration: 1, type: "spring" }}>
                            <div>ADVAITA</div>
                            <div>THE HYMN OF PARADOX</div>
                        </motion.div>
                    </div>
                    <motion.div viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 0.75 }} transition={{ duration: 0.3, delay: 0.3 }}>Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the first week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent, Advaita has come a long way over the years since its inception.It is one of the eminent fests in the eastern region of the Indian subcontinent today which has made an impact on several college students across the country.</motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-0.5rem)', opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.15 }}><AngleButton text="REGISTER" /></motion.div>
                </div>
            </section >
        </div >
    );
}