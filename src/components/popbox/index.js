import { useState } from "react";
import classes from "./index.module.css";

export default function PopBox(props) {
    const visTrue = classes.modal + " " + classes.show_modal;
    const visFalse = classes.modal;
    return (
        <div className={props.popUp ? visTrue : visFalse}>
            <div className={classes.modal_content}>
                <span className={classes.close_button} onClick={() => props.setPopUp(false)}>x</span>
                <h1>Hello, I am a modal!</h1>
            </div>
        </div>
    );
}