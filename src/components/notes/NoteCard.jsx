import React, { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, IconButton, Modal, Typography } from '@mui/material'
import { AddAlertOutlined, ArchiveOutlined, ImageOutlined, PersonAddAlt } from '@mui/icons-material'

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined'
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined'
import { InputField } from './TakeNoteOne'
import ColorPopper from '../ColorPopper'
import { updateNoteColorAPI, updateNoteArchiveAPI, updateNoteAPI } from '../../services/note'

export default function NoteCard(props) {
	const { data, checkUpdated } = props
	const [updatedData, setUpdatedData] = useState({ ...data })
	const [open, setOpen] = React.useState(false)
	const handleOpen = item => {
		setOpen(true)
		setUpdatedData(item)
	}
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: updatedData.color,
		borderRadius: 2,
		boxShadow: 24,
		p: 2,
	}

	const handleClose = () => setOpen(false)
	const updateColor = color => {
		updateNoteColorAPI(data.id, { color: color })
			.then(res => {
				console.log(res)
				console.log('updateColor()')
				checkUpdated()
			})
			.catch(err => console.error(err))
	}

	const updateArchive = () => {
		updateNoteArchiveAPI(data.id, { is_archived: true })
			.then(res => {
				console.log(res)
				checkUpdated()
			})
			.catch(err => console.error(err))
		console.log('updateArchive()')
	}

	const submitModal = () => {
		updateNoteAPI(data.id, updatedData)
			.then(res => {
				console.log(res)
				checkUpdated()
			})
			.catch(err => console.error(err))
		handleClose()
		console.log('submitModal()')
	}

	const colorPopperBtn = <ColorPopper colorHandler={updateColor} />
	const updateColorPopperBtn = (
		<ColorPopper colorHandler={color => setUpdatedData({ ...updatedData, color: color })} />
	)
	const archiveBtn = (
		<IconButton disabled={data.is_archived} onClick={updateArchive} size={'small'}>
			<ArchiveOutlined fontSize={'inherit'} />
		</IconButton>
	)

	const iconList = [
		<AddAlertOutlined fontSize={'inherit'} />,
		<PersonAddAlt fontSize={'inherit'} />,
		<ImageOutlined fontSize={'inherit'} />,
		colorPopperBtn,
		archiveBtn,
	]

	const modalIcons = [
		<AddAlertOutlinedIcon fontSize={'inherit'} />,
		<PersonAddAltIcon fontSize={'inherit'} />,
		updateColorPopperBtn,
		<ImageOutlinedIcon fontSize={'inherit'} />,
		<ArchiveOutlinedIcon fontSize={'inherit'} />,
		<MoreVertOutlinedIcon fontSize={'inherit'} />,
		<UndoOutlinedIcon fontSize={'inherit'} />,
		<RedoOutlinedIcon fontSize={'inherit'} />,
	]

	return (
		<React.Fragment>
			<Card elevation={1} sx={{ backgroundColor: data.color }}>
				<CardContent onClick={() => handleOpen(updatedData)}>
					<Typography variant={'inherit'} align={'left'} color='text.secondary' gutterBottom>
						{data.title}
					</Typography>
					<Typography variant='body1' align={'left'}>
						{data.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Grid container>
						<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-around' }}>
							{iconList.map((item, index) => {
								return item === colorPopperBtn || item === archiveBtn ? (
									<React.Fragment key={index}>{item}</React.Fragment>
								) : (
									<IconButton key={index} size={'small'}>
										{item}
									</IconButton>
								)
							})}
						</Grid>
					</Grid>
				</CardActions>
			</Card>

			<Modal
				sx={{ [`MuiBox-root`]: { border: 'none' } }}
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<InputField
								fullWidth
								placeholder='Title...'
								size='small'
								value={data.title}
								onChange={e => setUpdatedData({ ...updatedData, title: e.target.value })}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputField
								fullWidth
								placeholder='Take Note...'
								size='small'
								value={data.description}
								onChange={e => setUpdatedData({ ...updatedData, description: e.target.value })}
							/>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={10} sx={{ display: 'flex', justifyContent: 'space-around' }}>
									{modalIcons.map((item, index) => {
										return item === updateColorPopperBtn ? (
											<React.Fragment key={index}>{item}</React.Fragment>
										) : (
											<IconButton key={index} size={'small'}>
												{item}
											</IconButton>
										)
									})}
								</Grid>
								<Grid item xs={2}>
									<Button onClick={submitModal}>Close</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</React.Fragment>
	)
}
