import React from 'react'
import classes from './TaskPage.module.sass'
import axios from 'axios'
import { apibasename } from '../../components/Register/Register'
import { useNavigate } from 'react-router-dom'
import AdminHomeworks from './AdminHomeworks'
import { useGetRole } from '../../hooks/useGetRole'
import { useGetTask } from '../../hooks/useGetTask'
import StudentHomeworks from './StudentHomeworks'

const TaskPage = () => {
	const {task, isTaskError, isTaskLoading} = useGetTask();
	const {role, isRoleError, isRoleLoading} = useGetRole();
	const navigate = useNavigate()
	const deleteButtonClick = async () => {
		await axios.delete(`${apibasename}/task/${task ? task.id : ''}`)
		navigate(-1)
	}
  return (
	<div className={classes.taskPage}>
		<div className={classes.upper}>
			<h1>{task?.title}</h1>
			<button 
			className={classes.deleteButton}
			onClick={() => deleteButtonClick()}
			>Delete</button>
		</div>

		<p>{task?.content}</p>
		{
			role === 'admin' 
			? <AdminHomeworks homeworks={task?.homeworks ? task.homeworks : []}/>
			: <StudentHomeworks/>
		}
	</div>
  )
}

export default TaskPage