import classes from "./index.module.css";
import advaitaLogo from "../../assets/logo.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopBinary from "./topBinary";
import { Link } from "react-router-dom";

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
                        <div><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="#">EVENTS</Link></div>
                        <div><a style={{ textDecoration: 'inherit', color: 'inherit' }} href="#pronights">PRONIGHTS</a></div>
                        <div><a style={{ textDecoration: 'inherit', color: 'inherit' }} href="#sponsors">SPONSORS</a></div>
                        <div><a style={{ textDecoration: 'inherit', color: 'inherit' }} href="#contacts">CONTACTS</a></div>
                        <div><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="#">REGISTER</Link></div>
                    </motion.div>
                    :
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={classes.nav}
                    >
                        <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/"><img src={advaitaLogo} alt="Advaita" /></Link>
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
