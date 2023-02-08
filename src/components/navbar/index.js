import classes from "./index.module.css";
import advaitaLogo from "../../assets/logo.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
                        <div>EVENTS</div>
                        <div>PRONITES</div>
                        <div>SPONSORS</div>
                        <div>CONTACTS</div>
                        <div>REGISTER</div>
                    </motion.div>
                    :
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={classes.nav}
                    >
                        <img src={advaitaLogo} alt="Advaita" />
                        <div className={classes.btns} onClick={() => setMenuOpen(!menuOpen)}>
                            <div />
                            <div />
                        </div>
                    </motion.nav>
                }
            </AnimatePresence>
        </>
    );
}
