import { Route, Routes, useLocation, Outlet, Navigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"

import HomePage from './routes/homePage';
import NavBar from './components/navbar';
import Footer from './components/footer';
import EventsPage from './routes/events';
import SponsorsPage from './routes/sponsors';
import { Redirect } from 'react-router-dom';

const PageLayout = ({ children }) => children;

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
};

const AnimationLayout = () => {
    const { pathname } = useLocation();
    return (
        <PageLayout>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet />
            </motion.div>
        </PageLayout>
    );
};

export default function App() {
    // document.getElementById("loader_block").style.opacity = 0;
    // document.getElementById("loader_block").style.display = "none";

    useEffect(() => {
        const onPageLoad = () => {
            setTimeout(() => {
                document.getElementById("loader_block").style.opacity = 0;
                setTimeout(() => {
                    document.getElementById("loader_block").style.display = "none";
                }, 310);
            }, 200);
        };
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <div className="App">
            <AnimatedCursor
                innerSize={10}
                outerSize={50}
                outerScale={2}
                color='237, 46, 68'
            />
            <NavBar />
            <Routes>
                <Route element={<AnimationLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/sponsors" element={<SponsorsPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}
