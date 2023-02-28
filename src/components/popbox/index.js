import AngleButton from "../angleButton";
import classes from "./index.module.css";
import { useState, useEffect } from "react";

export default function PopBox(props) {
    const visTrue = classes.modal + " " + classes.show_modal;
    const visFalse = classes.modal;
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count > 0 && props.popUp)
            setTimeout(() => setCount(count - 1), 1000);
    })


    return (
        <div className={props.popUp ? visTrue : visFalse}>
            <div className={classes.modal_content}>
                <span className={classes.close_button} onClick={() => props.setPopUp(false)}>x</span>
                <h2>Please note</h2>
                <div style={{ opacity: 0.75, textAlign: 'justify' }}>If you wish to attend Advaita only on certain days, daily passes can be availed physically on-spot for ₹300 on 2nd, 3rd, 4th, and for ₹500 on 5th of March.<br /><br />Click continue to buy the discounted 4 day epass which includes access to Pronites and all other events. Accomodation costs extra which you can purchase as an addon. Select one of the wallet options like PhonePe in our payment gateway to pay using UPI.</div>
                <div className={classes.buttonWrap}>
                    <a href="https://iiit.edevlop.com" rel="noreferrer" target="_blank" style={count === 0 ? {} : { opacity: 0.3, pointerEvents: "none" }}><AngleButton text={count === 0 ? "CONTINUE" : `WAITING: ${count}`} /></a>
                </div>
            </div>
        </div>
    );
}