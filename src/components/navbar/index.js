import classes from "./index.module.css";
import advaitaLogo from "../../assets/logo.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <div>
                        <div className={classes.navWrap} />
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
