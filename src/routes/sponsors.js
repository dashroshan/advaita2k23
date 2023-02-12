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
                <div className={classes.sponsorDesc}>
                    <span>Ten years ago, the sole idea of organizing a techno-cultural festival was
                        conceived. It was named <b>ADVAITA</b>, meaning <b>non-duality</b>, which was
                        the intention, to fuse both technology and culture into one. Nine years have seen a mercurial rise in the fest, expanding and
                        establishing itself as one of the biggest and most anticipated events in
                        the state of Odisha. The standard of the events is
                        always top-notch, which reflects the magnanimous participation
                        strength every year. With eminent celebrities attending our events and
                        attracting a huge crowd, ADVAITA always aims for the best.</span>
                    <br />
                    <br />
                    <span>As a sponsor, you will have the opportunity to showcase your brand and products to a captive audience of thousands of tech-savvy and culturally diverse students. Our fest will provide a platform for you to engage with this dynamic demographic, build brand awareness, and create a lasting impression on the minds of the next generation of innovators and leaders.</span>
                    <br />
                    <br />
                    <span>Interesed to collaborate as a sponsor? Fill the form below and we will get in touch with you soon. <b style={{ color: "#e8384c" }}><a download href="/Advaita 2023 - brochure.pdf" style={{ textDecoration: 'inherit', color: 'inherit' }}>Download our sponsorship brouchre to know more.</a></b></span>
                </div>
                <div className={classes.textArea}><input name="cname" type="text" size="40" maxLength="200" required placeholder="Company name" /></div>
                <div className={classes.textArea}>
                    <textarea name="proposal" cols="40" rows="5" required placeholder="Write your proposal" />
                </div>
                <div className={classes.nameemail}>
                    <div className={classes.textArea}><input name="name" type="text" size="40" maxLength="150" required placeholder="Contact person" /></div>
                    <div className={classes.textArea}><input name="designation" type="text" size="40" maxLength="150" required placeholder="Designation" /></div>
                    <div className={classes.textArea}><input name="email" type="email" size="40" maxLength="150" required placeholder="Email" /></div>
                </div>
                {(contactBtnText === "SEND PROPOSAL" || contactBtnText === "SENDING...") ? null : <div className={classes.contactAlert} style={{ borderLeft: contactBtnText === "PROPOSAL SENT ✅" ? "0.4rem solid #00d26a" : "0.4rem solid #f3223a" }}>{contactBtnText === "PROPOSAL SENT ✅" ? "Thank you for contacting us. We've received your proposal and will get back to you supersoon!" : "Something went wrong! Please send us an email instead to advaita@iiit-bh.ac.in"}</div>}
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(6rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><button type="submit"><AngleButton text={contactBtnText} /></button></motion.div>
            </form>
        </div>
    );
}