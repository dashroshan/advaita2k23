import classes from "./index.module.css";
import advaitaLogo from "../../assets/logo.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(true);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            }
        }
    };

    const item = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1
        }
    };


    return (
        <>
            <AnimatePresence>
                {menuOpen ?
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={container}
                        transition={{ duration: 0.5 }}
                        className={classes.overlay} onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <motion.div key={1} variants={item}>EVENTS</motion.div>
                        <motion.div key={2} variants={item}>PRONITES</motion.div>
                        <motion.div key={3} variants={item}>SPONSORS</motion.div>
                        <motion.div key={4} variants={item}>CONTACTS</motion.div>
                        <motion.div key={5} variants={item}>REGISTER</motion.div>
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
