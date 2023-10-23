import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Chip, Container, List, ListItem, ListItemText, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function Home() {
    const theme = useTheme();
    const [data, setData] = useState({});

    const styles = {
        paper: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2)
        }
    };

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

    const onlineChip = <Chip icon={<CheckIcon />} label="Online" variant="outlined" color="success" />;
    const offlineChip = <Chip icon={<ClearIcon />} label="Offline" variant="outlined" color="error" />;

    return (
        <Container maxWidth="xs">
            <Paper sx={styles.paper}>
                <List>
                    <ListItem>
                        {data.online ? onlineChip : offlineChip}
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText primary={`Version ${data.version?.name_raw}`}/>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText primary={`${data.players?.online}/${data.players?.max} Online`}/>
                    </ListItem>
                </List>
                {renderPlayerList()}
                <Button onClick={restartServer} color="error" variant="outlined">Restart Server</Button>
            </Paper>
        </Container>
    );
}