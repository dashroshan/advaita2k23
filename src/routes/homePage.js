import classes from "./homePage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";

import AngleButton from "../components/angleButton";

export default function HomePage() {
    return (
        <div className={classes.homePage}>
            <section className={classes.hero}>
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

            <section className={classes.aboutSection}>
                <img src="https://advaita-iiitbh.in/static/images/home/stage.webp" alt="advaita" />
                <div className={classes.aboutText}>
                    <div>
                        <div>2K23</div>
                        <div>
                            <div>ADVAITA</div>
                            <div>THE HYMN OF PARADOX</div>
                        </div>
                    </div>
                    <div>Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the first week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent, Advaita has come a long way over the years since its inception.It is one of the eminent fests in the eastern region of the Indian subcontinent today which has made an impact on several college students across the country.</div>
                    <AngleButton text="REGISTER" />
                </div>
            </section>
        </div>
    );
}