import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";

export default function Home() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get("/api/getDetails").then(res => {
            console.log(res);
            setData(res.data);
        }).catch(err => console.error(err));
    }, []);

    const renderPlayerList = () => {
        if (data.players?.list?.length) {
            return (
                <ul>
                    {data.players.list.map(player => <li>{player.name_clean}</li>)}
                </ul>
            );
        } else {
            return;
        }
    }

    const restartServer = () => {
        axios.post("/api/restartServer");
    }

    return (
        <Container maxWidth="false">
            <h1>{`Status: ${data.online ? "Online" : "Offline"}`}</h1>
            <h1>{`Version: ${data.version?.name_raw}`}</h1>
            <h1>{`${data.players?.online}/${data.players?.max} Online`}</h1>
            {renderPlayerList()}
            <button onClick={restartServer}>Restart Server</button>
        </Container>
    );
}