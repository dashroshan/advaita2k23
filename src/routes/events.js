import classes from "./events.module.css";
import bgpn from "../assets/bgpn.jpg";
import eventsText from "../assets/events.png";

export default function EventsPage(props) {
    return (
        <div className={classes.eventsPage}>
            <div className={classes.header}>
                <img src={bgpn} alt="pronights" className={classes.bgimgheader} />
            </div>
            <img src={eventsText} alt="events schedule" className={classes.eventText} />
        </div>
    );
}