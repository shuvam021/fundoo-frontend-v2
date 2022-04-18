import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

export function Router() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='login' element={<LogIn />} />
			<Route path='signup' element={<SignUp />} />
		</Routes>
	)
}
