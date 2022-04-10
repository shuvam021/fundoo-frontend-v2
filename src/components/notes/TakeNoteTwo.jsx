import React from "react";
import {Button, Grid, IconButton} from "@mui/material";
import {
    AddAlertOutlined,
    ArchiveOutlined,
    ImageOutlined,
    MoreVertOutlined,
    PaletteOutlined,
    PersonAddAlt,
    RedoOutlined,
    UndoOutlined
} from '@mui/icons-material';
import {InputField} from "./TakeNoteOne";


const iconList = [
    <AddAlertOutlined fontSize={"inherit"}/>,
    <PersonAddAlt fontSize={"inherit"}/>,
    <PaletteOutlined fontSize={"inherit"}/>,
    <ImageOutlined fontSize={"inherit"}/>,
    <ArchiveOutlined fontSize={"inherit"}/>,
    <MoreVertOutlined fontSize={"inherit"}/>,
    <UndoOutlined fontSize={"inherit"}/>,
    <RedoOutlined fontSize={"inherit"}/>,
    // <ColorPopper action="create" colorHandler={colorHandler}/>
]


export default function TakeNoteTwo() {
    return (
        <React.Fragment>
            <Grid container alignItems={"center"} spacing={2}>
                <Grid item xs={12}><InputField fullWidth placeholder="Title ..." size="small"/></Grid>
                <Grid item xs={12}><InputField fullWidth placeholder="Take Note ..." size="small"/></Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={10} sx={{display: "flex", justifyContent: "space-around"}}>
                            {iconList.map((item, i) => (<IconButton key={i} size={"small"}>{item}</IconButton>))}
                        </Grid>
                        <Grid item xs={2}><Button>Close</Button></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}