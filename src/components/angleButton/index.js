import classes from "./index.module.css";

export default function AngleButton(props) {
    return (
        <div className={classes.button}>
            <div className={classes.buttonText}>{props.text}</div>
            <div className={classes.buttonShine}></div>
        </div>
    );
}