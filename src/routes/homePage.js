import classes from "./homePage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";
import dateImg from "../assets/date.webp";
import heroAdvImg from "../assets/stage.webp";
import sponsorsImg from "../assets/sponsors.webp";

import s_biswas from "../assets/s-biswas.webp";
import s_csm from "../assets/s-csm.webp";
import s_edevlop from "../assets/s-edevlop.webp";
import s_jyotemotors from "../assets/s-jyotemotors.webp";
import s_navbharat from "../assets/s-navbharat.webp";
import s_ocac from "../assets/s-ocac.webp";
import s_omc from "../assets/s-omc.webp";
import s_pantaloons from "../assets/s-pantaloons.webp";
import s_printlink from "../assets/s-printlink.webp";
import s_rungta from "../assets/s-rungta.webp";
import s_wizertech from "../assets/s-wizertech.webp";
import s_dell from "../assets/s-dell.webp";
import s_hp from "../assets/s-hp.webp";

import e0thumb from "../assets/e0thumb.webp";
import e1thumb from "../assets/e1thumb.webp";
import e2thumb from "../assets/e2thumb.webp";
import e3thumb from "../assets/e3thumb.webp";
import e4thumb from "../assets/e4thumb.webp";
import e5thumb from "../assets/e5thumb.webp";
import e6thumb from "../assets/e6thumb.webp";
import e7thumb from "../assets/e7thumb.webp";

import pn_ak from "../assets/pn_ak.webp";
import pn_ss from "../assets/pn_ss.webp";
import pn_dc from "../assets/pn_dc.webp";
import pn_bp from "../assets/pn_bp.webp";

import { useLottie } from "lottie-react";
import logoAnim from "../assets/logoanim.json";

import AngleButton from "../components/angleButton";
import PopBox from "../components/popbox";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from 'react-countup';
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./swiperCustom.css";
import { useMediaQuery } from 'react-responsive';
import { HashLink } from "react-router-hash-link";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

let swiperCardCount = 0;
function swiperCard(img, linkto, title, subtitle) {
    return (
        <SwiperSlide key={`slide-${swiperCardCount}`} style={{ listStyle: "none" }}>
            <HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to={linkto}>
                <div className={classes.sliderCard}>
                    <img src={img} alt="slider" />
                    <div className={classes.sliderCardOverlay} />
                    <div className={classes.sliderCardText}>
                        <div>{subtitle}</div>
                        <div><span className={classes.sliderTextLine} />{title}</div>
                    </div>
                </div>
            </HashLink>
        </SwiperSlide>
    );
}

function proNightsCard(img, details, title, subtitle, desc) {
    return (
        <div className={classes.sliderCard + " " + classes.proCard}>
            <img src={img} alt="slider" />
            <div className={classes.sliderCardOverlay} />
            <div className={classes.sliderCardOverlay + " " + classes.proCardOverlay} />
            <div className={classes.sliderCardText}>
                <div><span>{subtitle}</span><br /><b style={{ color: "white" }}>{details}</b></div>
                <div><span className={classes.sliderTextLine} />{title}</div>
            </div>
            <div className={classes.proCardDesc}>{desc}</div>
        </div>
    );
}

function sponsorCard(img) {
    return (
        <div className={classes.sponsorCardWrap}>
            <div className={classes.sponsorCard}>
                <img src={img} alt="sponsor" />
                <div className={classes.sponsorCardOverlay} />
            </div>
        </div>
    );
}

let sponsorData = [s_biswas, s_csm, s_edevlop, s_jyotemotors, s_navbharat, s_ocac, s_omc, s_pantaloons, s_printlink, s_rungta, s_wizertech, s_hp, s_dell];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(sponsorData);

export default function HomePage() {
    const options = {
        animationData: logoAnim,
        loop: true
    };
    const { View } = useLottie(options);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const slides1 = useMediaQuery({ query: '(max-width:1050px)' });

    const [contactBtnText, setcontactBtnText] = useState("SEND MESSAGE");
    const [popUp, setPopUp] = useState(false)

    const sendMessage = async (e) => {
        e.preventDefault();
        setcontactBtnText("SENDING...")
        const data = { subject: e.target[0].value, message: e.target[1].value, name: e.target[2].value, email: e.target[3].value };
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        try {
            const res = await fetch("https://api.advaita-iiitbh.in/contact/", settings);
            setcontactBtnText(res.status === 200 ? "MESSAGE SENT ✅" : "ERROR ⛔");
        }
        catch (e) {
            setcontactBtnText("ERROR ⛔")
        }
    }

    return (
        <div className={classes.homePage}>
            <PopBox setPopUp={setPopUp} popUp={popUp} />
            <section className={classes.hero}>
                <div className={classes.leftVertical}>
                    <div>FOLLOW US ON: </div>
                    <a rel="noreferrer" target="_blank" href="https://instagram.com/advaita_iiitbh"><img src={iconIg} alt="social" /></a>
                    <a rel="noreferrer" target="_blank" href="https://facebook.com/advaita.iiit"><img src={iconTw} alt="social" /></a>
                    <a rel="noreferrer" target="_blank" href="https://youtube.com/channel/UCkULTsUj0_Ukm9DWOtin5yw"><img src={iconYt} alt="social" /></a>
                </div>

                <div className={classes.rightVertical}>
                    IIIT BHUBANESWAR, ODISHA
                </div>

                <div className={classes.lottieAnim}>{View}</div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(-10rem) scale(0)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem) scale(1)', opacity: 1 }} transition={{ duration: 2, type: "spring" }} className={classes.dateHero}><img src={dateImg} alt="3 to 5 March" /></motion.div>
            </section>

            <section className={classes.aboutSection}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(6rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.15 }}><img src={heroAdvImg} alt="advaita" /></motion.div>
                <div className={classes.aboutText}>
                    <div>
                        <div>2K23</div>
                        <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-3rem)', opacity: 1 }} transition={{ duration: 2, type: "spring" }}>
                            <div>ADVAITA</div>
                            <div>THE HYMN OF PARADOX</div>
                        </motion.div>
                    </div>
                    <div>Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the first week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent, Advaita has come a long way over the years since its inception.It is one of the eminent fests in the eastern region of the Indian subcontinent today which has made an impact on several college students across the country.</div>
                    <div className={classes.headerBtns}>
                        <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-0.5rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.15 }}><HashLink to="/events#"><AngleButton text="EVENTS SCHEDULE" /></HashLink></motion.div>
                        <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-0.5rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.15 }} onClick={() => setPopUp(true)}><AngleButton text="REGISTER" /></motion.div>
                    </div>
                </div>
            </section >

            <section className={classes.countSection} ref={ref}>
                <div className={classes.countWrap}  >
                    <div>{isInView ? <CountUp end={15} duration={1} /> : null}</div>
                    <div>FUN<br />EVENTS</div>
                </div>
                <div className={classes.countWrap}>
                    <div>{isInView ? <CountUp end={3} duration={0.3} delay={0.2} /> : null}</div>
                    <div>PRO<br />SHOWS</div>
                </div>
                <div className={classes.countWrap}>
                    <div>{isInView ? <CountUp end={10} duration={1} delay={0.4} /> : null}</div>
                    <div>TECHNICAL<br />EVENTS</div>
                </div>
                <div className={classes.countWrap}>
                    <div>{isInView ? <CountUp end={10} duration={1} delay={0.6} /> : null}</div>
                    <div>CULTURAL<br />EVENTS</div>
                </div>
            </section>

            <section className={classes.videosection}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }} className={classes.videosecTitle}>
                    <div>A GLIMPSE INTO<br />THE HYMN OF PARADOX</div>
                    <div>#ADVAITA</div>
                </motion.div>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=u0b-hg_gLsI">
                    <div className={classes.ytvideo}>
                        <div />
                        <div>
                            <img src={iconYt} alt="youtube" />
                        </div>
                    </div>
                </a>
                <div className={classes.swiperWrap}>
                    <Swiper
                        className={classes.swiper}
                        id="swiper"
                        slidesPerView={slides1 ? 1 : 2}
                        spaceBetween={0}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop
                    >
                        {swiperCard(e0thumb, "/#pronights", "PRONIGHTS", "Unleash the fun at the concerts of some of India's finest musicians, comedians, and DJs")}
                        {swiperCard(e1thumb, "/events#technical_events", "TECHNICAL EVENTS", "Unravel the tech giant within you")}
                        {swiperCard(e2thumb, "/events#cultural_events", "CULTURAL EVENTS", "Enchant the arena with your charming voice or set the stage on fire with your dazzling steps")}
                        {swiperCard(e3thumb, "/events#litfest_events", "FILM AND THEATER", "Get ready to bring out your inner 'Kalakar'")}
                        {swiperCard(e4thumb, "/events#art_events", "ART AND E-SPORTS", "They say art lies all around us, also hola gamers!! may the best say GG")}
                        {swiperCard(e5thumb, "/events#photography_events", "PHOTOGRAPHY", "Capture the world full of possibilities")}
                        {swiperCard(e6thumb, "/events#food_events", "FOOD AND CSR", "Enjoy the amazing flavours and feed your soul with exotic delicacies and good deeds")}
                        {swiperCard(e7thumb, "/events#social_connect", "SOCIAL CONNECT", "Help support important causes and make a positive impact in the community")}
                    </Swiper>
                </div>
            </section>

            <section className={classes.sponsorsSection} id="sponsors">
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(6rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><img src={sponsorsImg} alt="Sponsors" /></motion.div>
                <div className={classes.sponsorsWrap}>
                    {sponsorData.map(e => sponsorCard(e))}
                </div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(6rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><HashLink to="/sponsors#"><AngleButton text="SPONSOR US" /></HashLink></motion.div>
            </section>

            <section className={classes.proNights} id="pronights">
                <div className={classes.proNightsTitle}>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}>PRO-NIGHTS</motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(3rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 1.2, type: "spring", delay: 0.2 }}><span style={{ color: "white" }}>#</span> UNLEASH THE FUN</motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}>Vibe to the concerts of some of India's finest musicians, comedians, and DJs! Get ready to groove and make memories that'll last a lifetime. Not only will you breathe fun-filled flavours of air, and meet new people; but you'll also become a part of an ever-blossoming community of IIIT Bhubaneswar. So, buckle up and grab your squad and let the good vibes roll, adding an extra perfection to the hymn of your steps.</motion.div>
                </div>
                <div className={classes.proCardsWrap}>
                    {proNightsCard(pn_ss, "2ND MARCH - 7:00 PM", "SWATI SACHDEVA", "COMEDY", "Get ready for a night of belly laughs and endless giggles. Swati Sachdeva with her quick-witted sets and unique perspective is taking the stand-up comedy scene by storm. Whether she's poking fun at everyday situations or sharing hilarious anecdotes of her life, Swati's comedy is sure to have you in stitches.")}
                    {proNightsCard(pn_bp, "3RD MARCH - 7:00 PM", "BAND PARASHARA", "CONCERT", "Band PARASHARA are a progressive Delhi-based band. The rock atmospshere conceived by them is sure to leave everyone pumped up and asking for more. Using a great amount of flavors from multiple playing styles and genres, they'll surely take the night high with us.")}
                    {proNightsCard(pn_dc, "4TH MARCH - 7:00 PM", "DJ CARNIVORE", "EDM", "DJ Carnivore - an EDM artist - is ready to take Advaita to the next level! With his electrifying mixes and heart-pumping beats, he is guaranteed to have all your movements in sync to his beats. So, grab your friends and get ready to let loose as you experience the wild hymns of DJ Carnivore!")}
                    {proNightsCard(pn_ak, "5TH MARCH - 7:00 PM", "ASEES KAUR", "MUSIC", "Asees Kaur is famous all over India for her major hits like Raataan Lambiyan, Jaan Nisar, and Makhna to name a few. Whether she's belting out Bollywood hits or giving a new spin to classic songs, she'll leave you mesmerized. So, get ready to dance and sing as you experience her electrifying performance.")}
                </div>
            </section>

            <form className={classes.contact} id="contacts" onSubmit={sendMessage}>
                <div className={classes.contactBar} />
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }} className={classes.contactHeader}>CONTACT US</motion.div>
                <div className={classes.textArea}><input name="subject" type="text" size="40" maxLength="200" required placeholder="Subject" /></div>
                <div className={classes.textArea}>
                    <textarea name="message" cols="40" rows="5" required placeholder="Write your message" />
                </div>
                <div className={classes.nameemail}>
                    <div className={classes.textArea}><input name="name" type="text" size="40" maxLength="150" required placeholder="Your name" /></div>
                    <div className={classes.textArea}><input name="email" type="email" size="40" maxLength="150" required placeholder="Your email" /></div>
                </div>
                {(contactBtnText === "SEND MESSAGE" || contactBtnText === "SENDING...") ? null : <div className={classes.contactAlert} style={{ borderLeft: contactBtnText === "MESSAGE SENT ✅" ? "0.4rem solid #00d26a" : "0.4rem solid #f3223a" }}>{contactBtnText === "MESSAGE SENT ✅" ? "Your message has been sent. The Advaita Mail Man is on the way :)" : "Something went wrong! Please send us an email instead to advaita@iiit-bh.ac.in"}</div>}
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(0rem)', opacity: 1 }} transition={{ duration: 1.5, type: "spring" }}><button type="submit"><AngleButton text={contactBtnText} /></button></motion.div>
            </form>
        </div >
    );
}
