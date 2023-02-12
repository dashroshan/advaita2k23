import classes from "./contacts.module.css";
import bgpn from "../assets/bgcu.webp";
import eventsText from "../assets/contacts.webp";
import { motion } from "framer-motion";
import AngleButton from "../components/angleButton";

export default function ContactsPage() {
    return (
        <div className={classes.eventsPage}>
            <section className={classes.headerSection}>
                <div className={classes.header}>
                    <img src={bgpn} alt="pronights" className={classes.bgimgheader} />
                </div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><img src={eventsText} alt="events schedule" className={classes.eventText} /></motion.div>
            </section>

            <section className={classes.contact}>
                <div className={classes.textArea}><input type="text" size="40" placeholder="Subject" /></div>
                <div className={classes.textArea}>
                    <textarea name="your-message" cols="40" rows="5" placeholder="Write your message" />
                </div>
                <div className={classes.nameemail}>
                    <div className={classes.textArea}><input type="text" size="40" placeholder="Your Name" /></div>
                    <div className={classes.textArea}><input type="text" size="40" placeholder="Your Email" /></div>
                </div>
                <AngleButton text="SEND MESSAGE" />
            </section>
        </div>
    );
}