import React from 'react'
import classes from './CustomNavbar.module.sass'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { Link, useNavigate } from 'react-router-dom'
import { eraseUser } from '../../redux/userSlice'
import CustomButton from '../CustomButton/CustomButton'
import { useGetRole } from '../../hooks/useGetRole'
import { admingHeaderRoutes, publicHeaderRoutes, studentHeaderRoutes } from '../../headerRoutes'

const CustomNavbar = () => {

	const user = useAppSelector(store => store.user);
	const { role } = useGetRole();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();


  return (
	<div className={classes.header}>
		<div className={classes.linksArea}>
		{
			role === 'admin' 
			? admingHeaderRoutes.map(route => <Link to={route.link}>{route.title}</Link>)
			: role === 'student'
			? studentHeaderRoutes.map(route => <Link to={route.link}>{route.title}</Link>)
			: publicHeaderRoutes.map(route => <Link to={route.link}>{route.title}</Link>)
		}
		</div>

		<div className={classes.authArea}>
			 {user.username 
			 ? <>
			 <p>{user.username}</p>
			 <CustomButton onClick={() => {dispatch(eraseUser()); navigate('../login')}} label='Sign out'/>
			 </>
			 : 
			<CustomButton onClick={() => navigate('../login')} label='Login'/>
			}
		</div>
	</div>
  )
}

export default CustomNavbar