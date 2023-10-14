import React, { useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";

export default function Home() {
    useEffect(() => {
        axios.post("/api/getDetails", {address: "connerleigh.com"}).then(res => {
            console.log(res);
        }).catch(err => console.error(err));
    }, []);

    return (
        <Container maxWidth="false">
            <h1>HELLO WORLD</h1>
        </Container>
    );
}