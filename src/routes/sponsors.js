import classes from "./sponsors.module.css";
import bgpn from "../assets/bgcu.webp";
import eventsText from "../assets/contacts.webp";
import { motion } from "framer-motion";
import AngleButton from "../components/angleButton";
import { useState } from "react";


export default function SponsorsPage() {
    const [contactBtnText, setcontactBtnText] = useState("SEND PROPOSAL");

    const sendMessage = async (e) => {
        e.preventDefault();
        setcontactBtnText("SENDING...")
        const data = { company_name: e.target[0].value, proposal: e.target[1].value, contact_person: e.target[2].value, designation: e.target[3].value, email: e.target[4].value };
        console.log(data);
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        try {
            const res = await fetch("https://api.advaita-iiitbh.in/sponsorcontact/", settings);
            setcontactBtnText(res.status === 200 ? "PROPOSAL SENT ✅" : "ERROR ⛔");
        }
        catch (e) {
            setcontactBtnText("ERROR ⛔")
        }
    }

    return (
        <div className={classes.eventsPage}>
            <section className={classes.headerSection}>
                <div className={classes.header}>
                    <img src={bgpn} alt="pronights" className={classes.bgimgheader} />
                </div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><img src={eventsText} alt="events schedule" className={classes.eventText} /></motion.div>
            </section>

            <form className={classes.contact} onSubmit={sendMessage}>
                <div className={classes.textArea}><input name="cname" type="text" size="40" maxLength="200" required placeholder="Company name" /></div>
                <div className={classes.textArea}>
                    <textarea name="proposal" cols="40" rows="5" required placeholder="Write your proposal" />
                </div>
                <div className={classes.nameemail}>
                    <div className={classes.textArea}><input name="name" type="text" size="40" maxLength="150" required placeholder="Contact person" /></div>
                    <div className={classes.textArea}><input name="designation" type="text" size="40" maxLength="150" required placeholder="Designation" /></div>
                    <div className={classes.textArea}><input name="email" type="email" size="40" maxLength="150" required placeholder="Email" /></div>
                </div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(6rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><button type="submit"><AngleButton text={contactBtnText} /></button></motion.div>
            </form>
        </div>
    );
}