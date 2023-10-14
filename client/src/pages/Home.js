import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";

export default function Home() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.post("/api/getDetails", {address: "connerleigh.com"}).then(res => {
            console.log(res);
            setData(res.data);
        }).catch(err => console.error(err));
    }, []);

    const renderPlayerList = () => {
        if (data.players?.list?.length) {
            return data.players.list.map(player => <span>{player.name_clean}</span>)
        } else {
            return <></>;
        }
    }

    return (
        <Container maxWidth="false">
            <h1>{`Status: ${data.online ? "Online" : "Offline"}`}</h1>
            <h1>{`Version: ${data.version?.name_raw}`}</h1>
            <h1>{`${data.players?.online}/${data.players?.max} Online`}</h1>
            {renderPlayerList()}
        </Container>
    );
}