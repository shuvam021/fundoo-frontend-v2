import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Box, List, CssBaseline, ListItemIcon, ListItemText, ListItem } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'

import LightbulbIcon from '@mui/icons-material/Lightbulb'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import CreateIcon from '@mui/icons-material/Create'
import ArchiveIcon from '@mui/icons-material/Archive'
import DeleteIcon from '@mui/icons-material/Delete'

import { connect } from 'react-redux'
import { headerAction } from '../redux/header/action'

const drawerWidth = 240

const margin = 70

const openedMixin = theme => ({
	width: drawerWidth,
	marginTop: margin,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = theme => ({
	marginTop: margin,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

function Sidebar(props) {
	const noteChoice = typeOfNote => {
		props.listenToSideNavBar(typeOfNote)
	}

	const menuList = [
		{ title: 'Notes', icon: <LightbulbIcon /> },
		{ title: 'Reminders', icon: <NotificationsActiveIcon /> },
		{ title: 'Edit', icon: <CreateIcon /> },
		{ title: 'Archive', icon: <ArchiveIcon /> },
		{ title: 'Bin', icon: <DeleteIcon /> },
	]

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Drawer variant='permanent' open={props.drawerOpen}>
				<List>
					{menuList.map((item, index) => (
						<ListItem
							key={index}
							button
							onClick={() => {
								noteChoice(item.title.toLowerCase())
								props.headerAction(item.title)
							}}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	)
}

const mapStateToProps = state => ({ payload: state.headers.title })
const mapDispatchToProps = dispatch => ({ headerAction: title => dispatch(headerAction(title)) })
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
