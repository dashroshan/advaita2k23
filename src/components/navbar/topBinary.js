import classes from "./topBinary.module.css";
import { useState, useEffect } from "react";

export default function TopBinary() {
    const randomBinary = () => {
        let str = "";
        let options = ["01101111", "00101111", "01100101", "00100101"];
        for (let j = 0; j <= 50; j++) {
            str += options[Math.floor(Math.random() * 4)];
            str += " ";
        }
        return str;
    }

    const [binaryStr, setBinaryStr] = useState(randomBinary());

    useEffect(() => {
        const myInterval = setInterval(() => {
            setBinaryStr(randomBinary());
        }, 200);
        return () => clearInterval(myInterval);
    }, []);

    return (
        <div className={classes.binaryWrap}>
            <div className={classes.binary+" "+classes.top}>
                {binaryStr}
            </div>
            <div className={classes.binary}>
                {binaryStr}
            </div>
        </div>
    );
}