import classes from "./proNights.module.css";
import bgpn from "../assets/bgpn.jpg"

export default function ProNights(props) {
    return (
        <div className={classes.pronights}>
            <div className={classes.header}>
                <img src={bgpn} alt="pronights" />
            </div>
        </div>
    );
}