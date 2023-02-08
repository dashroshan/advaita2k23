import classes from "./homePage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";

export default function HomePage() {
    return (
        <div className={classes.homePage}>
            <section id="herosection" className={classes.hero}>
                <div className={classes.leftVertical}>
                    <div>FOLLOW US ON: </div>
                    <a href="#"><img src={iconIg} alt="social" /></a>
                    <a href="#"><img src={iconTw} alt="social" /></a>
                    <a href="#"><img src={iconYt} alt="social" /></a>
                </div>

                <div className={classes.rightVertical}>
                    IIIT BHUBANESWAR, ODISHA
                </div>
            </section>
        </div>
    );
}