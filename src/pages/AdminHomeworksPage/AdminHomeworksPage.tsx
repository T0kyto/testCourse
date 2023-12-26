import React from 'react'
import { useCheckAdmin } from '../../hooks/useCheckAdmin'
import { useGetAllHomeworks } from '../../hooks/useGetAllHomeworks';
import classes from './AdminHomeworksPage.module.sass'
import AdminHomeworkCard from './AdminHomeworkCard';

const AdminHomeworksPage = () => {

	const {homeworks, isHomeworksError, isHomeworksLoading} = useGetAllHomeworks();
	useCheckAdmin();


  return (
	<div className={classes.adminHomeworksPage}>
		{
			homeworks.length === 0
			? <p>There is no homeworks yet</p>
			: homeworks.map(homework => <AdminHomeworkCard homework={homework} key={homework.id}/>)
		}
	</div>
  )
}

export default AdminHomeworksPage