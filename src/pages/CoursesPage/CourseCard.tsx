import React, {FC} from 'react'
import { courseInterface } from './CoursesPage'
import { useNavigate } from 'react-router-dom'
import classes from './CourseCard.module.sass'

interface courseCardProps{
	course: courseInterface
}

const CourseCard:FC<courseCardProps> = ({course}) => {

	const navigate = useNavigate()

  return (
	<div className={classes.courseCard} onClick={() => navigate(`/coursepage/${course.id}`)}>
		<h1>{course.title}</h1>
		<p>{course.description}</p>
	</div>
  )
}

export default CourseCard