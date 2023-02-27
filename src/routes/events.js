import classes from "./events.module.css";
import classesHome from "./homePage.module.css";
import bgpn from "../assets/bgpn.webp";
import eventsText from "../assets/events.webp";
import { motion } from "framer-motion";
import { eventsData } from "./eventsData";
import { useState } from "react";
import downloadIcon from "../assets/download.svg";

import EventModal from "../components/eventModal";

function proNightsCard(img, title, subtitle, desc, link, linkText, setPopUp, customPopUp, ruleBook, prize) {
    return (
        <div className={classesHome.sliderCard + " " + classes.proCard}>
            <img src={img} alt="slider" />
            <div className={classes.sliderCardOverlay} />
            <div className={classes.sliderCardOverlay + " " + classes.sliderCardOverlay2 + " " + classes.proCardOverlay} />
            <div className={classes.sliderCardText}>
                <div>{subtitle}{prize ? <><br /><span style={{ color: "#f3223a", fontWeight: "bold" }}>PRIZES WORTH ₹{prize}</span></> : null}</div>
                <div><span className={classes.sliderTextLine} />{title}</div>
            </div>
            <div className={classes.proCardDesc}>
                {link ?
                    <>
                        <div style={{ display: 'flex', gap: "1rem" }}>
                            <div onClick={() => setPopUp({ open: true, link: link, desc: customPopUp })} style={{ cursor: 'pointer', fontSize: "1.4rem", fontWeight: "bold", border: "0.2rem solid white", width: "fit-content", padding: "0.5rem 1.5rem", borderRadius: "0.4rem", marginBottom: "-0.4rem" }}>{linkText}</div>
                            {ruleBook ? <a style={{ textDecoration: 'inherit', color: 'inherit' }} rel="noreferrer" target="_blank" href={ruleBook}><div style={{ fontSize: "1.4rem", fontWeight: "bold", border: "0.2rem solid white", width: "fit-content", padding: "0.5rem 1.5rem", borderRadius: "0.4rem", marginBottom: "-0.4rem" }}>Details</div></a> : null}
                        </div>
                        <br />
                    </> : null}
                {desc}
            </div>
        </div>
    );
}

let eventsSectionCount = 0;
function eventsSection(data, setPopUp) {
    eventsSectionCount += 1;
    return (
        <section className={classes.proNights} id={data.id}>
            <div className={classes.proNightsTitle}>
                <motion.div viewport={{ once: true }} initial={{ transform: `translateX(${eventsSectionCount % 2 ? 6 : -6}rem)`, opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}>{data.title}</motion.div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(3rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.2, type: "spring", delay: 0.2 }}><span style={{ color: "white" }}>#</span> {data.subtitle}</motion.div>
                <motion.div viewport={{ once: true }} initial={{ transform: `translateX(${eventsSectionCount % 2 ? -6 : 6}rem)`, opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}>{data.description}</motion.div>
            </div>
            <div className={classes.proCardsWrap}>
                {data.events.map(e => proNightsCard(e.image, e.date, e.time, e.description, e.link, e.linkText, setPopUp, e.customPopUp, e.ruleBook, e.prize))}
            </div>
        </section>
    );
}

export default function EventsPage() {
    const [popUp, setPopUp] = useState({ open: false, link: "", desc: "" });

    return (
        <div className={classes.eventsPage}>
            <EventModal setPopUp={setPopUp} popUp={popUp} />
            <section className={classes.headerSection}>
                <div className={classes.header}>
                    <img src={bgpn} alt="pronights" className={classes.bgimgheader} />
                </div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><img src={eventsText} alt="events schedule" className={classes.eventText} /></motion.div>
            </section>
            <motion.div viewport={{ once: true }} initial={{ transform: `translateX(-6rem)`, opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }} className={classes.rulebookWrap}>
                <a download href="/Advaita RuleBook.pdf" style={{ color: 'inherit', textDecoration: 'inherit' }}><div className={classes.rulebook}><img src={downloadIcon} /><span>Download RuleBook</span></div></a>
                <div className={classes.rulebooktext}>Refer to the RuleBook above for the team specifications, requirements, format, and more details of all the events in Advaita.</div>
            </motion.div>
            {eventsData.map(e => eventsSection(e, setPopUp))}
        </div>
    );
}