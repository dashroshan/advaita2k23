import classes from "./verify.module.css";
import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import AngleButton from "../components/angleButton";

export default function Verify(props) {
    const [data, setData] = useState();
    const [status, setstatus] = useState("QR not scanned yet!")

    const verify = async (ticketid) => {
        setstatus("Verifying the QR!");
        const settings = {
            method: 'GET'
        };
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbyej8MfVjhqNcnHVLkqurlnxb2XSmIUmBIHQ2RQ_ClKCJRk9Xg7XsFLOcixoiZZZQh27w/exec?index=" + ticketid, settings);
            const d = await res.json();
            setstatus(d.data[0].status);
        }
        catch (e) {
            setstatus("Connection error!", e);
        }
    }

    useEffect(() => {
        if (!data) return;
        verify(data);
    }, [data])

    return (
        <div className={classes.verify}>
            <div className={classes.qrBox}>
                <QrReader className={classes.qrreader} onResult={result => {
                    if (!!result) setData(result?.text)
                }} />
            </div>
            <div className={classes.ticket}>
                <div>Ticket ID</div>
                <div>{data ? data : "- SCAN IN PROGRESS -"}</div>
            </div>
            <div className={classes.status}>{status}</div>
            <div className={classes.scannew} onClick={() => {
                setData(null);
                setstatus("QR not scanned yet!");
            }}>
                <AngleButton text="SCAN ANOTHER" />
            </div>
        </div>
    );
}