import React, {useState} from "react";
import {Box, Container, CssBaseline} from '@mui/material';
import {styled} from "@mui/material/styles";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TakeNoteOne from "../components/notes/TakeNoteOne";
import TakeNoteTwo from "../components/notes/TakeNoteTwo";

const NoteContainer = styled(Box)(
    ({theme}) => ({
        boxShadow: theme.shadows[10],
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        width: 500,
        marginBottom: "5rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px"
    }));

export default function Component() {
    const [isNoteOneBoxActive, setIsNoteOneBoxActive] = useState(true)
    const toggleNoteBox = ()=>setIsNoteOneBoxActive(false)

    return (
        <React.Fragment>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/><NavBar/><Sidebar/>
                <Container sx={{mt: "10rem"}}>
                    <NoteContainer>
                        {isNoteOneBoxActive ?<TakeNoteOne toggleNoteBox={toggleNoteBox} />: <TakeNoteTwo />}
                    </NoteContainer>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea facere id, ipsum nam nostrum
                    officiis quod veniam? A accusantium amet assumenda commodi debitis deserunt dicta distinctio
                    dolor dolore dolorem ea excepturi exercitationem expedita explicabo fuga harum ipsum itaque iure
                    laboriosam magni maiores maxime molestiae molestias, necessitatibus nisi placeat porro quae quam
                    quas quo recusandae sed sit suscipit tenetur voluptas voluptatem voluptatibus. Aliquam, amet
                    atque culpa eius, exercitationem, fuga hic laudantium maxime molestias mollitia nihil officiis
                    quaerat quia quidem repellat soluta sunt ut veritatis. A aspernatur consequatur, culpa dolores
                    doloribus eligendi enim facilis harum id iusto molestias nam natus necessitatibus nihil nobis
                    optio, perspiciatis quam quis repellendus rerum sunt temporibus unde veniam vitae voluptas
                    voluptate voluptatibus voluptatum? Asperiores at, blanditiis dicta distinctio ea earum eligendi
                    eum hic illum iure laboriosam laudantium minima necessitatibus neque officia omnis perferendis
                    quasi, quia quisquam repellendus rerum saepe, sapiente similique tenetur ut. Ad aperiam,
                    consequatur cum enim, esse eum fugiat, laudantium libero magni numquam reiciendis repellat!
                    Consequatur cupiditate dolorem doloremque earum eos error ex mollitia natus nisi, nobis
                    reiciendis sapiente sed similique ut voluptas. Aliquid aperiam aspernatur atque beatae commodi
                    debitis dignissimos dolore eius esse et ex facilis fuga magnam molestias mollitia natus, nemo
                    neque non nostrum officia optio perspiciatis quibusdam quidem reiciendis reprehenderit soluta
                    tenetur totam ullam velit, voluptatum? Aliquid, cupiditate deserunt dolore eius error est ipsum
                    maiores molestias necessitatibus, non temporibus tenetur totam veniam vitae voluptatem?
                    Accusantium animi architecto corporis cum dolorem ex facere facilis id incidunt ipsum libero
                    modi mollitia natus nisi, nobis nostrum nulla odio officiis omnis, optio perferendis
                    perspiciatis porro, praesentium quaerat reprehenderit sint voluptate? Aperiam eum fugit incidunt
                    iste, neque rem saepe. Ab alias architecto aspernatur aut autem blanditiis corporis culpa
                    cupiditate dolore eligendi eos esse est exercitationem fugiat hic illum ipsum iusto laborum
                    laudantium magni maiores molestias neque non nostrum odio omnis, placeat praesentium quisquam,
                    recusandae rem repellendus rerum sint sit sunt unde velit veritatis? Animi aspernatur commodi
                    corporis distinctio est exercitationem fuga fugiat hic illum in inventore laborum laudantium
                    magnam nam obcaecati officiis pariatur porro praesentium quam quos ratione sapiente sequi sit
                    soluta tempora tenetur, ut vel. Ad aperiam, at aut autem consectetur delectus deserunt,
                    dignissimos dolor dolorem dolores ex hic in ipsa magnam natus odio officia porro quae quibusdam
                    quo quod recusandae sed sequi vel velit vitae, voluptatibus! Accusantium architecto aspernatur
                    beatae corporis cum delectus dolorem eaque explicabo natus obcaecati perferendis possimus
                    reiciendis sapiente unde vel, velit voluptate! A assumenda at cumque cupiditate deserunt dolore
                    est et excepturi exercitationem fuga fugit iure magni, maiores minima nobis nostrum nulla
                    numquam, odio optio perspiciatis quibusdam velit voluptas! Ab, amet aperiam asperiores
                    aspernatur blanditiis commodi culpa cum cupiditate deserunt ducimus eaque enim et facilis hic
                    impedit incidunt ipsa magnam magni minima modi nam nesciunt nulla optio placeat porro
                    praesentium quaerat quasi qui quos saepe sunt totam ut veniam veritatis vero voluptate
                    voluptates. Enim laborum officiis rerum. Atque eligendi est necessitatibus quo. Ducimus,
                    incidunt odit. Ab ea eveniet expedita facilis magni molestiae pariatur porro provident, rerum
                    tempore, vel, veritatis voluptatem.
                </Container>
            </Box>
        </React.Fragment>
    )
}
