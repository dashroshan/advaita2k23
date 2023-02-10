import classes from "./events.module.css";
import bgpn from "../assets/bgpn.jpg"

export default function EventsPage(props) {
    return (
        <div className={classes.pronights}>
            <div className={classes.header}>
                <img src={bgpn} alt="pronights" />
            </div>
        </div>
    );
}