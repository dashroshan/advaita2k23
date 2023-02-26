import AngleButton from "../angleButton";
import classes from "./index.module.css";
import { useState, useEffect } from "react";

export default function PopBox(props) {
    const visTrue = classes.modal + " " + classes.show_modal;
    const visFalse = classes.modal;
    const [count, setCount] = useState(10);

    useEffect(() => {
        console.log("ran")
        if (count > 0 && props.popUp)
            setTimeout(() => setCount(count - 1), 1000);
    })


    return (
        <div className={props.popUp ? visTrue : visFalse}>
            <div className={classes.modal_content}>
                <span className={classes.close_button} onClick={() => props.setPopUp(false)}>x</span>
                <h2>Please note</h2>
                <div style={{ opacity: 0.75 }}>The 4 day pass includes access to ProNites along with all the other events. Accomodation costs extra which can be availed as an add-on while purchasing your pass.<br /><br />If you wish to pay using UPI, please select one of the wallet options like PhonePe in our payment gateway.</div>
                <div className={classes.buttonWrap}>
                    <a href="https://iiit.edevlop.com" rel="noreferrer" target="_blank" style={count === 0 ? {} : { opacity: 0.3, pointerEvents: "none" }}><AngleButton text={count === 0 ? "CONTINUE" : `WAITING: ${count}`} /></a>
                </div>
            </div>
        </div>
    );
}