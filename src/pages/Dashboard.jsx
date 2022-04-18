import React, { useEffect, useState } from 'react'
import { Box, Container, CssBaseline, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TakeNoteOne from '../components/notes/TakeNoteOne'
import TakeNoteTwo from '../components/notes/TakeNoteTwo'
import NoteCard from '../components/notes/NoteCard'
import { getNoteAPI } from '../services/note'

const NoteContainer = styled(Box)(({ theme }) => ({
	boxShadow: theme.shadows[10],
	borderRadius: theme.shape.borderRadius,
	width: 500,
	marginBottom: '5rem',
	marginLeft: 'auto',
	marginRight: 'auto',
}))

export default function Component() {
	// dependency
	const [isNoteOneBoxActive, setIsNoteOneBoxActive] = useState(true)
	const [isUIUpdated, setIsUIUpdated] = useState(false)
	const [drawerOpen, setDrawerOpen] = useState(false)

	const [notes, setNotes] = React.useState([])
	const [currentNoteChoice, setCurrentNoteChoice] = useState('notes')
	const toggleNoteBox = () => setIsNoteOneBoxActive(!isNoteOneBoxActive)

	useEffect(() => {
		getNoteAPI()
			.then(async res => {
				const data = res.data.data
				let filteredData = []
				if (currentNoteChoice === 'notes') {
					filteredData = data.filter(note => note.is_archived === false)
				} else if (currentNoteChoice === 'archive') {
					filteredData = data.filter(note => note.is_archived === true)
				}
				await setNotes(filteredData)
			})
			.catch(err => console.error(err.message))

		return () => setIsUIUpdated(false)
	}, [isNoteOneBoxActive, currentNoteChoice, isUIUpdated])

	return (
		<React.Fragment>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<NavBar listenToHeader={() => setDrawerOpen(!drawerOpen)} />
				<Sidebar drawerOpen={drawerOpen} listenToSideNavBar={noteChoice => setCurrentNoteChoice(noteChoice)} />
				<Container sx={{ mt: '10rem', minWidth: 'xs' }}>
					<NoteContainer>
						{isNoteOneBoxActive ? (
							<TakeNoteOne toggleNoteBox={toggleNoteBox} />
						) : (
							<TakeNoteTwo toggleNoteBox={toggleNoteBox} />
						)}
					</NoteContainer>
					<Grid container spacing={3}>
						{notes.map(note => (
							<Grid key={note.id} item lg={3} md={4} sm={6} xs={12}>
								<NoteCard checkUpdated={() => setIsUIUpdated(true)} data={note} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</React.Fragment>
	)
}
