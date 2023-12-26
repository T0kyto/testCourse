import React, {FC} from 'react'
import { homeworkCard } from '../../hooks/useGetAllHomeworks'
import classes from './AdminHomeworkCard.module.sass'
import { useNavigate } from 'react-router-dom'

interface adminHomeworkCardProps{
	homework: homeworkCard
}

const AdminHomeworkCard: FC<adminHomeworkCardProps> = ({ homework }) => {
	const navigate = useNavigate();
	const grade = parseInt(homework.grade);
	const cardColor = grade > 1 ? 'green' : grade === 0 ? 'red' : 'gray';
  return (
	<div 
	className={classes.adminHomeworkCard} 
	style={{backgroundColor: cardColor}} 
	onClick={()=>navigate(`/homework/${homework.id}`)}
	>
		<p>{homework.email}</p>
		<p>{homework.title}</p>
		<p>{homework.grade}</p>
	</div>
  )
}

export default AdminHomeworkCard