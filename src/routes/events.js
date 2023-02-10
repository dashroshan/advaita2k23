import classes from "./events.module.css";
import classesHome from "./homePage.module.css";
import bgpn from "../assets/bgpn.jpg";
import eventsText from "../assets/events.png";
import { motion } from "framer-motion";
import { eventsData } from "./eventsData";

function proNightsCard(img, title, subtitle, desc) {
    return (
        <div className={classesHome.sliderCard + " " + classes.proCard}>
            <img src={img} alt="slider" />
            <div className={classes.sliderCardOverlay} />
            <div className={classes.sliderCardOverlay + " " + classes.sliderCardOverlay2 + " " + classes.proCardOverlay} />
            <div className={classes.sliderCardText}>
                <div>{subtitle}</div>
                <div><span className={classes.sliderTextLine} />{title}</div>
            </div>
            <div className={classes.proCardDesc}>{desc}</div>
        </div>
    );
}

let eventsSectionCount = 0;
function eventsSection(data) {
    eventsSectionCount += 1;
    return (
        <section className={classes.proNights} id={data.id}>
            <div className={classes.proNightsTitle}>
                <motion.div viewport={{ once: true }} initial={{ transform: `translateX(${eventsSectionCount % 2 ? 6 : -6}rem)`, opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}>{data.title}</motion.div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(3rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.2, type: "spring", delay: 0.2 }}><span style={{ color: "white" }}>#</span> {data.subtitle}</motion.div>
                <motion.div viewport={{ once: true }} initial={{ transform: `translateX(${eventsSectionCount % 2 ? -6 : 6}rem)`, opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}>{data.description}</motion.div>
            </div>
            <div className={classes.proCardsWrap}>
                {data.events.map(e => proNightsCard(e.image, e.date, e.time, e.description))}
            </div>
        </section>
    );
}

export default function EventsPage() {
    return (
        <div className={classes.eventsPage}>
            <section className={classes.headerSection}>
                <div className={classes.header}>
                    <img src={bgpn} alt="pronights" className={classes.bgimgheader} />
                </div>
                <motion.div viewport={{ once: false }} initial={{ transform: 'translateY(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><img src={eventsText} alt="events schedule" className={classes.eventText} /></motion.div>
            </section>
            {eventsData.map(e => eventsSection(e))}
        </div>
    );
}