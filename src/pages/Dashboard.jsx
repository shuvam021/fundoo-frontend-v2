import React, {useEffect, useState} from "react";
import {Box, Container, CssBaseline, Grid} from '@mui/material';
import {styled} from "@mui/material/styles";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TakeNoteOne from "../components/notes/TakeNoteOne";
import TakeNoteTwo from "../components/notes/TakeNoteTwo";
import NoteCard from "../components/notes/NoteCard";
import {getNoteAPI} from "../services/note";

const NoteContainer = styled(Box)(
    ({theme}) => ({
        boxShadow: theme.shadows[10],
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: theme.palette.common.white,
        width: 500,
        marginBottom: "5rem",
        marginLeft: "auto",
        marginRight: "auto",
    }));

export default function Component() {
    const [isNoteOneBoxActive, setIsNoteOneBoxActive] = useState(true)
    const toggleNoteBox = ()=>setIsNoteOneBoxActive(!isNoteOneBoxActive)
    const [notes, setNotes] = React.useState([])

    useEffect(() => {
        getNoteAPI()
            .then(res => setNotes(res.data.data))
            .catch(err => console.log(err.message))
    }, [isNoteOneBoxActive])

    return (
        <React.Fragment>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/><NavBar/><Sidebar/>
                <Container sx={{mt: "10rem", minWidth: 'xs'}}>
                    <NoteContainer>
                        {isNoteOneBoxActive ?<TakeNoteOne toggleNoteBox={toggleNoteBox} />: <TakeNoteTwo toggleNoteBox={toggleNoteBox} />}
                    </NoteContainer>
                    <Grid container spacing={3}>
                        {notes.map(note=>(
                            <Grid key={note.id} item lg={3} md={4} sm={6} xs={12}><NoteCard data={note}/></Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    )
}
