import React, {useState} from "react";
import {Box, Button, Grid, IconButton} from "@mui/material";
import {
    AddAlertOutlined,
    ArchiveOutlined,
    ImageOutlined,
    MoreVertOutlined,
    PersonAddAlt,
    RedoOutlined,
    UndoOutlined
} from '@mui/icons-material';
import {InputField} from "./TakeNoteOne";
import {postNoteAPI} from "../../services/note";
import ColorPopper from "../ColorPopper";


export default function TakeNoteTwo(props) {
    const {toggleNoteBox} = props
    const [data, setData] = useState({
        title: '',
        description: '',
        color: '',
        is_archived: false
    });
    const submitData = () => {
        postNoteAPI(data)
            .then(res => console.log(res))
            .catch(err => console.error(err))
        toggleNoteBox()
    }

    const noteTwoColorUpdate = color => setData({...data, color: color })

    const iconList = [
        <AddAlertOutlined fontSize={"inherit"}/>,
        <PersonAddAlt fontSize={"inherit"}/>,
        <ImageOutlined fontSize={"inherit"}/>,
        <MoreVertOutlined fontSize={"inherit"}/>,
        <UndoOutlined fontSize={"inherit"}/>,
        <RedoOutlined fontSize={"inherit"}/>,
    ]

    return (
        <Box sx={{backgroundColor: data.color, p:1, borderRadius:1}}>
            <Grid container alignItems={"center"}>
                <Grid item xs={12}>
                    <InputField
                        fullWidth placeholder="Title..." size="small"
                        onChange={e => setData({...data, title: e.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        fullWidth placeholder="Take Note..." size="small"
                        onChange={e => setData({...data, description: e.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={10} sx={{display: "flex", justifyContent: "space-around"}}>
                            <ColorPopper colorHandler={noteTwoColorUpdate}/>
                            <IconButton size={"small"} onClick={() => setData({...data, is_archived: true})}>
                                <ArchiveOutlined fontSize={"inherit"}/>
                            </IconButton>
                            {iconList.map((item, i) => (<IconButton key={i} size={"small"}>{item}</IconButton>))}
                        </Grid>

                        <Grid item xs={2}><Button onClick={submitData}>Close</Button></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}