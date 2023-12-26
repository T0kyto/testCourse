import React from 'react'
import classes from './CoursesPage.module.sass'
import CourseCard from './CourseCard'
import { useGetRole } from '../../hooks/useGetRole'
import { useGetCourses } from '../../hooks/useGetCourses'

export interface courseInterface{
	id: string
	title: string
	description: string
}

const CoursesPage = () => {

	const { courses, isCourseLoading, isCoursesError } = useGetCourses();
	const { role } = useGetRole();

  return (
	<div className={classes.coursesPage}>
		<div className={classes.courseArea}>
		{
			courses.length === 0 
			? "There is no courses yet"
			: courses.map(course => 
				<CourseCard course={course}/>
			)
		}
		</div>
		
	</div>
  )
}

export default CoursesPage