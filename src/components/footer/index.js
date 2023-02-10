import classes from "./index.module.css";
import { motion } from "framer-motion";
import AngleButton from "../angleButton";
import connectImg from "../../assets/connect.png"

export default function Footer(props) {
    return (
        <>
            <section className={classes.contactsSection}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.00 }}><img src={connectImg} alt="Connect" /></motion.div>
                <div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.2 }} className={classes.socialContact}>+91 9876543210</motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.4 }} className={classes.socialContact}><a href="">INSTAGRAM</a></motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.6 }} className={classes.socialContact}><a href="">YOUTUBE</a></motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.8 }} className={classes.socialContact}><a href="">TWITTER</a></motion.div>
                </div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(10rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.00 }}><AngleButton text="SEND US AN EMAIL" /></motion.div>
            </section>

            <section className={classes.footerSection}>
                <div><span style={{ color: "#3c3556" }}>© 2K23</span> ADVAITA</div>
                <div style={{ color: "#3c3556" }}>IIIT BBSR, GOTHAPATNA - 751003</div>
            </section>
        </>
    );
}