import React, { useState } from 'react'
import GoogleLogo from '../assets/Google.png'
import SideImg from '../assets/shield.svg'
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { signUpAPI } from '../services/authentication'

const nameRegex = /^[a-zA-Z]{3,}$/
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/

const customStyles = {
	container: {
		border: { xs: 'none', sm: 'none', md: '1px solid #bbb' },
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: 1,
		height: '80%',
	},
	boxContainer: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerOne: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		px: 2,
	},
	boxForm: { my: 3 },
	formLogo: { height: 30, display: 'flex', justifyContent: 'flex-start' },
	containerTwo: { display: { md: 'block', sm: 'none', xs: 'none' } },
	boxRight: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
		px: 2,
	},
	rightSideImg: { height: 200 },
}

export default function SignUp() {
	// states
	const [data, setData] = useState({ first_name: '', last_name: '', email: '', password: '' })
	const [confirmPassword, setConfirmPassword] = useState('')

	// field error state
	const [fNameErr, setFNameErr] = useState(false)
	const [lNameErr, setLNameErr] = useState(false)
	const [emailErr, setEmailErr] = useState(false)
	const [passwordErr, setPasswordErr] = useState(false)
	const [password2Err, setPassword2Err] = useState(false)

	const formSubmit = () => {
		// default field errors
		setEmailErr(false)
		setPasswordErr(false)
		setPassword2Err(false)
		setFNameErr(false)
		setLNameErr(false)

		// Regex
		const firstNameValidate = nameRegex.test(data.first_name)
		const lastNameValidate = nameRegex.test(data.last_name)
		const emailValidate = emailRegex.test(data.email)
		const passwordValidate = passwordRegex.test(data.password)

		// validation
		if (!firstNameValidate) {
			setFNameErr(true)
		}
		if (!lastNameValidate) {
			setLNameErr(true)
		}
		if (!emailValidate) {
			setEmailErr(true)
		}
		if (!passwordValidate) {
			setPasswordErr(true)
		}
		if (confirmPassword !== data.password) {
			setPassword2Err(true)
		}

		// access login api with validated data
		if (firstNameValidate && lastNameValidate && emailValidate && passwordValidate) {
			signUpAPI(data)
				.then(res => console.log(res))
				.catch(err => console.log(err))
		}
	}

	return (
		<Container component={'main'} maxWidth={'md'} sx={customStyles.container}>
			<Box sx={customStyles.boxContainer}>
				<Grid container>
					<Grid item lg={8} md={8} sm={12} xs={12} sx={customStyles.containerOne}>
						<Box component={'form'} maxWidth={'sm'} sx={customStyles.boxForm}>
							<Box component={'img'} alt='Google Img' src={GoogleLogo} sx={customStyles.formLogo} />
							<Typography align={'left'} variant={'h4'}>
								Sign Up
							</Typography>

							<Grid container spacing={2} sx={{ my: 8 }}>
								<Grid item sm={6} xs={12}>
									<TextField
										fullWidth
										label='First Name'
										variant='outlined'
										size='small'
										onChange={e => setData({ ...data, first_name: e.target.value })}
										error={fNameErr}
										helperText={fNameErr ? 'Minimum length should be 3!!!' : ''}
									/>
								</Grid>
								<Grid item sm={6} xs={12}>
									<TextField
										fullWidth
										label='Last Name'
										variant='outlined'
										size='small'
										onChange={e => setData({ ...data, last_name: e.target.value })}
										error={lNameErr}
										helperText={lNameErr ? 'Minimum length should be 3!!!' : ''}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label='Email'
										variant='outlined'
										size='small'
										onChange={e => setData({ ...data, email: e.target.value })}
										error={emailErr}
										helperText={emailErr ? 'Enter the correct email!!!' : ''}
									/>
								</Grid>
								<Grid item sm={6} xs={12}>
									<TextField
										fullWidth
										label='Password'
										variant='outlined'
										size='small'
										onChange={e => setData({ ...data, password: e.target.value })}
										error={passwordErr}
										helperText={passwordErr ? 'Enter the correct password!!!' : ''}
									/>
								</Grid>
								<Grid item sm={6} xs={12}>
									<TextField
										fullWidth
										label='Confirm Password'
										variant='outlined'
										size='small'
										onChange={e => setConfirmPassword(e.target.value)}
										error={password2Err}
										helperText={password2Err ? 'both password should match' : ''}
									/>
								</Grid>

								<Grid item sm={4} xs={12} sx={{ display: { xs: 'flex' } }}>
									<FormControlLabel control={<Checkbox />} label='Show password' />
								</Grid>
								<Grid
									item
									sm={4}
									xs={6}
									sx={{ display: { xs: 'flex' }, justifyContent: { xs: 'flex-start' } }}>
									<Button size='small'>Sign in instead</Button>
								</Grid>
								<Grid
									item
									sm={4}
									xs={6}
									sx={{ display: { xs: 'flex' }, justifyContent: { xs: 'flex-end' } }}>
									<Button variant='contained' size='small' onClick={formSubmit}>
										SignUp
									</Button>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item lg={4} md={4} sx={customStyles.containerTwo}>
						<Box sx={customStyles.boxRight}>
							<Box component={'img'} src={SideImg} alt='img' sx={customStyles.rightSideImg} />
							<Typography variant={'body1'}>One account. All of Google working for you.</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}
