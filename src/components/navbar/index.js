import classes from "./index.module.css";
import advaitaLogo from "../../assets/logo.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopBinary from "./topBinary";

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
                        <div>PRONIGHTS</div>
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
            <AnimatePresence>{menuOpen ? null :
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <TopBinary />
                </motion.div>}
            </AnimatePresence>
        </>
    );
}
