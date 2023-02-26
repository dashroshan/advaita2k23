import AngleButton from "../angleButton";
import classes from "./index.module.css";

export default function EventModal(props) {
    const visTrue = classes.modal + " " + classes.show_modal;
    const visFalse = classes.modal;

    return (
        <div className={props.popUp.open ? visTrue : visFalse}>
            <div className={classes.modal_content}>
                <span className={classes.close_button} onClick={() => props.setPopUp({ ...props.popUp, open: false })}>x</span>
                <h2>Please note</h2>
                {
                    props.popUp.desc ?
                        <div style={{ opacity: 0.75, textAlign: "justify" }}>{props.popUp.desc}</div> :
                        <div style={{ opacity: 0.75, textAlign: "justify" }}>You need to have an Advaita pass inorder to participate in these events. <a style={{ textDecoration: 'inherit', color: '#ED2E44', fontWeight: 'bold' }} rel="noreferrer" target="_blank" href="https://iiit.edevlop.com">Purchase a pass</a> before continuing to register for this event if you don't have one already. If you have a valid pass, click Continue to proceed with your registration. Only one member from a team needs to register.</div>
                }
                <div className={classes.buttonWrap}>
                    <a href={props.popUp.link} rel="noreferrer" target="_blank" ><AngleButton text="CONTINUE" /></a>
                </div>
            </div>
        </div>
    );
}