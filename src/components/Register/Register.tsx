import React, { FC } from 'react'
import classes from "./Register.module.sass"
import Form from '../Form/Form'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/userSlice'
import axios from 'axios'

const apibasename = process.env.REACT_APP_API_BASENAME

const Register: FC = () => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleRegister = async (email: string, password: string) => {

		let data = new FormData()
		data.append("email", email)
		data.append("password", password)

		axios.post(
			apibasename + '/register', 
			data
			).then(response => {

			let data = response.data

			if(data['done'] === true){
				dispatch(setUser({"uid": data["uid"], "username": data["email"]}))
			}else{
				console.log("done is false")
			}
		})
	}
  return (
	<div className={classes.register}>
		<h1>Register</h1>
		<Form variant='Register' onSubmit={handleRegister}/>
		<div className={classes.redirect}>
			Already have an account? <Link to='../login' className={classes.link}> Login</Link>
		</div>
	</div>
  )
}

export default Register
export { apibasename }