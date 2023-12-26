import React, {FC} from 'react'
import classes from "./AdminHomeworks.module.sass"
import  HomeworkCard, { homeworkContent } from './HomeworkCard'

interface adminHomeworksProps{
	homeworks: homeworkContent[]
}

const AdminHomeworks: FC<adminHomeworksProps> = ({homeworks}) => {
  return (
	<div className={classes.adminGrades}>
		<h1>Homeworks:</h1>
		{homeworks.length === 0 
		? "There is no homeworks yet"
		: homeworks.map(grade => <HomeworkCard homework={grade} key={grade.id}/>)
		}
	</div>
  )
}

export default AdminHomeworks