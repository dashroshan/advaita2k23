import classes from "./homePage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";
import dateImg from "../assets/date.png";
import sponsorsImg from "../assets/sponsors.png";
import s1CodingNinja from "../assets/s1coding-ninjas.jpg";

import e0thumb from "../assets/e0thumb.jpg";
import e1thumb from "../assets/e1thumb.jpg";
import e2thumb from "../assets/e2thumb.jpg";
import e3thumb from "../assets/e3thumb.jpg";
import e4thumb from "../assets/e4thumb.jpg";
import e5thumb from "../assets/e5thumb.jpg";
import e6thumb from "../assets/e6thumb.jpg";
import e7thumb from "../assets/e7thumb.jpg";

import { useLottie } from "lottie-react";
import logoAnim from "../assets/logoanim.json";

import AngleButton from "../components/angleButton";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from 'react-countup';

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

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

let swiperCardCount = 0;
function swiperCard(img, title, subtitle) {
    return (
        <SwiperSlide key={`slide-${swiperCardCount}`} style={{ listStyle: "none" }}>
            <div className={classes.sliderCard}>
                <img src={img} alt="slider" />
                <div className={classes.sliderCardOverlay} />
                <div className={classes.sliderCardText}>
                    <div>{subtitle}</div>
                    <div><span className={classes.sliderTextLine} />{title}</div>
                </div>
            </div>
        </SwiperSlide>
    );
}

export default function HomePage() {
    const options = {
        animationData: logoAnim,
        loop: true
    };
    const { View } = useLottie(options);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const slides1 = useMediaQuery({ query: '(max-width:1050px)' });

    return (
        <div className={classes.homePage}>
            <section className={classes.hero}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translate(-12rem, -5.3rem)', opacity: 0 }} whileInView={{ transform: 'translate(0rem, -5.3rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.3 }} className={classes.leftVertical}>
                    <div>FOLLOW US ON: </div>
                    <a href="#"><img src={iconIg} alt="social" /></a>
                    <a href="#"><img src={iconTw} alt="social" /></a>
                    <a href="#"><img src={iconYt} alt="social" /></a>
                </motion.div>

                <motion.div viewport={{ once: true }} initial={{ transform: 'translate(-12rem, 4.5rem)', opacity: 0 }} whileInView={{ transform: 'translate(0rem, 4.5rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.6 }} className={classes.rightVertical}>
                    IIIT BHUBANESWAR, ODISHA
                </motion.div>

                <div className={classes.lottieAnim}>{View}</div>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(-10rem) scale(0)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem) scale(1)', opacity: 1 }} transition={{ duration: 2, type: "spring" }} className={classes.dateHero}><img src={dateImg} alt="3 to 5 March" /></motion.div>
            </section>

            <section className={classes.aboutSection}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(6rem)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.15 }}><img src="https://advaita-iiitbh.in/static/images/home/stage.webp" alt="advaita" /></motion.div>
                <div className={classes.aboutText}>
                    <div>
                        <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-0.5rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.15 }}>2K23</motion.div>
                        <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-10rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-3rem)', opacity: 1 }} transition={{ duration: 2, type: "spring" }}>
                            <div>ADVAITA</div>
                            <div>THE HYMN OF PARADOX</div>
                        </motion.div>
                    </div>
                    <motion.div viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 0.75 }} transition={{ duration: 0.3, delay: 0.3 }}>Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the first week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent, Advaita has come a long way over the years since its inception.It is one of the eminent fests in the eastern region of the Indian subcontinent today which has made an impact on several college students across the country.</motion.div>
                    <motion.div viewport={{ once: true }} initial={{ transform: 'translateX(-6rem)', opacity: 0 }} whileInView={{ transform: 'translateX(-0.5rem)', opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.15 }}><AngleButton text="EVENTS SCHEDULE" /></motion.div>
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
                <div className={classes.ytvideo}>
                    <div />
                    <div>
                        <img src={iconYt} alt="youtube" />
                    </div>
                </div>
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
                        {swiperCard(e0thumb, "PRONIGHTS", "Unleash the fun at the concerts of some of India's finest musicians, comedians, and DJs")}
                        {swiperCard(e1thumb, "TECHNICAL EVENTS", "Unravel the tech giant within you")}
                        {swiperCard(e2thumb, "CULTURAL EVENTS", "Enchant the arena with your charming voice or set the stage on fire with your dazzling steps")}
                        {swiperCard(e3thumb, "FILM AND THEATER", "Get ready to bring out your inner 'Kalakar'")}
                        {swiperCard(e4thumb, "ART AND E-SPORTS", "They say art lies all around us, also hola gamers!! may the best say GG")}
                        {swiperCard(e5thumb, "PHOTOGRAPHY", "Capture the world full of possibilities")}
                        {swiperCard(e6thumb, "FOOD CSA", "Cook exotic delicacies or flaunt your eating skills with amazing flavours in our hands")}
                        {swiperCard(e7thumb, "SOCIAL CONNECT", "Because soul needs our good deeds")}
                    </Swiper>
                </div>
            </section>

            <section className={classes.sponsorsSection}>
                <motion.div viewport={{ once: true }} initial={{ transform: 'translateY(-10rem) scale(0)', opacity: 0 }} whileInView={{ transform: 'translateY(0rem) scale(1)', opacity: 1 }} transition={{ duration: 2, type: "spring" }}><img src={sponsorsImg} alt="Sponsors" /></motion.div>
                <div className={classes.sponsorsWrap}>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                    <div className={classes.sponsorCardWrap}>
                        <div className={classes.sponsorCard}>
                            <img src={s1CodingNinja} alt="sponsor" />
                            <div className={classes.sponsorCardOverlay} />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}