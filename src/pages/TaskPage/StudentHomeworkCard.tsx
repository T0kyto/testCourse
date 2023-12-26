import React, {FC} from 'react'
import classes from './StudentHomeworkCard.module.sass'
import { homeworkContent } from './HomeworkCard'

interface studentHomeworkCardProps{
	homework: homeworkContent
}

const StudentHomeworkCard: FC<studentHomeworkCardProps> = ({ homework }) => {

	const grade = parseInt(homework.grade);
	const cardColor = grade > 0 ? 'green' : grade === 0 ? 'red' : 'gray'; 

  return (
	<div className={classes.studentHomeworkCard} style={{backgroundColor: cardColor}}>
		<p>{homework.content}</p>
		<p>{homework.grade}</p>
	</div>
  )
}

export default StudentHomeworkCard