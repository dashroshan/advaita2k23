import AngleButton from "../angleButton";
import classes from "./index.module.css";
import CountUp from 'react-countup';

export default function PopBox(props) {
    const visTrue = classes.modal + " " + classes.show_modal;
    const visFalse = classes.modal;
    return (
        <div className={props.popUp ? visTrue : visFalse}>
            <div className={classes.modal_content}>
                <span className={classes.close_button} onClick={() => props.setPopUp(false)}>x</span>
                <h2>Please note</h2>
                <div style={{ opacity: 0.75 }}>If you wish to pay using UPI, please select one of the wallet options like PhonePe in our payment gateway.</div>
                <div className={classes.buttonWrap}>
                    <AngleButton text="CONTINUE" />
                </div>
            </div>
        </div>
    );
}