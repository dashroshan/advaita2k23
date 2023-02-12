import classes from "./index.module.css";
import advaitaLogo from "../../assets/logo.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from 'react-responsive';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const desktop = useMediaQuery({ query: '(max-width:850px)' });

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                if (show) setShow(false);
            } else { // if scroll up show the navbar
                if (!show) setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <>
            <AnimatePresence>
                {menuOpen ?
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={classes.overlay} onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div><HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to="/events#">EVENTS</HashLink ></div>
                        <div><HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to="/#pronights">PRONIGHTS</HashLink ></div>
                        <div><HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to="/#sponsors">SPONSORS</HashLink ></div>
                        <div><HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to="/#contacts">CONTACTS</HashLink ></div>
                        <div><a style={{ textDecoration: 'inherit', color: 'inherit' }} target="_blank" href="/">REGISTER</a></div>
                    </motion.div>
                    :
                    <div className={classes.navBarWrap} style={{ transform: show ? "translateY(0rem)" : "translateY(-8rem)" }}>
                        <div className={classes.navWrap} style={{ opacity: (lastScrollY < 50 && !desktop) ? 0 : 1 }} />
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={classes.nav}
                        >
                            <HashLink style={{ textDecoration: 'inherit', color: 'inherit' }} to="/#"><img src={advaitaLogo} alt="Advaita" /></HashLink >
                            <div className={classes.btns} onClick={() => setMenuOpen(!menuOpen)}>
                                <div />
                                <div />
                            </div>
                        </motion.nav>
                    </div>
                }
            </AnimatePresence>
        </>
    );
}
