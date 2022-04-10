import React from "react";
import {Card, CardActions, CardContent, Grid, IconButton, Typography} from "@mui/material";
import {AddAlertOutlined, ArchiveOutlined, ImageOutlined, PaletteOutlined, PersonAddAlt} from "@mui/icons-material";

export default function NoteCard() {

    const iconList = [
        <AddAlertOutlined fontSize={"inherit"}/>,
        <PersonAddAlt fontSize={"inherit"}/>,
        <PaletteOutlined fontSize={"inherit"}/>,
        <ImageOutlined fontSize={"inherit"}/>,
        <ArchiveOutlined fontSize={"inherit"}/>,
    ]

    return (
        <Card elevation={1}>
            <CardContent>
                <Typography variant={"inherit"} align={"left"} color="text.secondary" gutterBottom>
                    Card heading
                </Typography>
                <Typography variant="body1" align={"left"}>Card body</Typography>
            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "space-around"}}>
                        {iconList.map((item, i) => (<IconButton key={i} size={"small"}>{item}</IconButton>))}
                    </Grid>
                </Grid></CardActions>
        </Card>
    )
}