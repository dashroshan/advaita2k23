import classes from "./index.module.css";
import advaitaLogo from "../../assets/logo.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import PopBox from "../popbox";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [popUp, setPopUp] = useState(false);

    return (
        <>
            <PopBox setPopUp={setPopUp} popUp={popUp} />
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
                        <div onClick={() => setPopUp(true)}>REGISTER</div>
                    </motion.div>
                    :
                    <div className={classes.navBarWrap}>
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
