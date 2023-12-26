import React, {FC} from 'react'
import classes from './Homework.module.sass'
import { useNavigate } from 'react-router-dom'

export interface homeworkContent{
	id: string
	task_id: string
	user_id: string
	content: string
	grade: string
	time: string
	uid?: string
	email?: string
}

interface homeworkCardProps{
	homework: homeworkContent 
}

const HomeworkCard:FC<homeworkCardProps> = ({homework}) => {

	const navigate = useNavigate()
	const grade = parseInt(homework.grade);
	const cardColor = grade > 0 ? 'green' : grade === 0 ? 'red' : 'gray'; 

  return (
	<div 
	className={classes.homeworkCard} 
	style={{backgroundColor: cardColor}}
	onClick={() => navigate(`/homework/${homework.id}`)}
	>
		<p>{homework.email}</p>
		<p>{homework.grade}</p>
	</div>
  )
}

export default HomeworkCard