import classes from "./index.module.css";
import { motion } from "framer-motion";
import AngleButton from "../angleButton";
import connectImg from "../../assets/connect.webp"

export default function Footer(props) {
    return (
        <>
            <section className={classes.contactsSection} id="contacts">
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.00 }}><img src={connectImg} alt="Connect" /></motion.div>
                <div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.2 }} className={classes.socialContact}><a target="_blank" href="mailto:advaita@iiit-bh.ac.in">EMAIL</a></motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.4 }} className={classes.socialContact}><a target="_blank" href="https://instagram.com/advaita_iiitbh/">INSTAGRAM</a></motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.6 }} className={classes.socialContact}><a target="_blank" href="https://youtube.com/channel/UCkULTsUj0_Ukm9DWOtin5yw">YOUTUBE</a></motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(4rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.8 }} className={classes.socialContact}><a target="_blank" href="https://facebook.com/advaita.iiit/">FACEBOOK</a></motion.div>
                </div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(10rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 0.00 }}><a target="_blank" href="#"><AngleButton text="SEND A MESSAGE" /></a></motion.div>
            </section>

            <section className={classes.footerSection}>
                <div><span style={{ color: "#3c3556" }}>© 2K23</span> ADVAITA</div>
                <div style={{ color: "#3c3556" }}>IIIT BBSR, GOTHAPATNA - 751003</div>
            </section>
        </>
    );
}