import React, { FC } from 'react'
import classes from "./Login.module.sass"
import Form from '../Form/Form'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setUser } from '../../redux/userSlice'
import { error } from 'console'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { apibasename } from '../Register/Register'

const Login: FC = () => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogin =  async (email: string, password: string) => {
		let data = new FormData()
		data.append("email", email)
		data.append("password", password)


		axios.post(
			apibasename + '/login', 
			data
			).then(response => {

			let data = response.data

			if(data['done'] === true){
				console.log(`uid: ${data["uid"]}, username: ${data["email"]}`)
				dispatch(setUser({"uid": data["uid"], "username": data["email"]}))

			}else{
				console.log("done is false")
			}
		})
	}
	
  return (
	<div className={classes.login}>
		<h1>Login</h1>
		<Form onSubmit={handleLogin} variant='Login'/>
		<div className={classes.redirect}>
			New to site? <Link to='../register' className={classes.link}> Create an account</Link>
		</div>
	</div>
  )
}

export default Login