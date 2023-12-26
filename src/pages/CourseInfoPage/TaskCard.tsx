import React, {FC} from 'react'
import { taskContent } from './CourseInfoPage'
import classes from './TaskCard.module.sass'
import { useNavigate } from 'react-router-dom'
import { apibasename } from '../../components/Register/Register'

interface taskCardProps{
	task: taskContent
}

const TaskCard: FC<taskCardProps> = ({task}) => {

	const navigate = useNavigate()

  return (
	<div className={classes.taskCard} key={task.id}>
		<p onClick={() => navigate(`/task/${task.id}`)}>{task.title}</p>
	</div>
  )
}

export default TaskCard