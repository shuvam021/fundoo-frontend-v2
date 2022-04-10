import React from "react";
import {Box, Grid, IconButton, InputBase} from "@mui/material";
import {styled} from '@mui/material/styles';
import {BrushOutlined, CheckBoxOutlined, ImageOutlined} from '@mui/icons-material';

const iconList = [<CheckBoxOutlined fontSize={"inherit"}/>, <BrushOutlined fontSize={"inherit"}/>, <ImageOutlined fontSize={"inherit"}/>]
export const InputField = styled(InputBase)({padding: "5px 10px"});

export default function TakeNoteOne(props) {
    const {toggleNoteBox} = props;
    const toggleBox = () => toggleNoteBox();

    return (
        <Box onClick={toggleBox}>
            <Grid container alignItems={"center"}>
                <Grid item xs={9}>
                    <InputField fullWidth placeholder="Take Note ..." size={"small"}/>
                </Grid>
                <Grid item xs={3}>
                    {iconList.map((item, i) => (<IconButton key={i} size={"small"}>{item}</IconButton>))}
                </Grid>
            </Grid>
        </Box>)
}