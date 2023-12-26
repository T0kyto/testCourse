import React from 'react'
import classes from './CourseInfoPage.module.sass'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHooks'
import axios from 'axios'
import { apibasename } from '../../components/Register/Register'
import ThemeCard from './ThemeCard'
import CustomButton from '../../components/CustomButton/CustomButton'
import { homeworkContent } from '../TaskPage/HomeworkCard'
import { useGetRole } from '../../hooks/useGetRole'
import { useGetCourseContent } from '../../hooks/useGetCourseContent'

export interface taskContent {
	id: string
	title: string
	type: string
	theme_id: string
	content: string
	grade: number
	homeworks: homeworkContent[]
}

export interface themeContent {
	theme_id: string
	theme_title: string
	theme_description: string
	tasks: taskContent[]
}

const CourseInfoPage = () => {

	const params = useParams();
	const courseId = params['id'];
	const user = useAppSelector(store => store.user);
	const { courseContent, isCourseError, isCourseLoading, setCourseContent } = useGetCourseContent();
	const navigate = useNavigate();
	const { role } = useGetRole();
	
	const getCourseContent = async () => {
		const response = await axios.get(`${apibasename}/coursecontent/${courseId}/${user.uid}`)
		console.log(response.data)
		setCourseContent(response.data)
	}

	const onDeleteThemeClick = async (id: string) => {
		await axios.delete(`${apibasename}/theme/${id}`)
		getCourseContent();
	}

	const onAddButtonClick = (themeid: string) => {
		navigate(`/addtask/${themeid}`)
	}

  return (
	<div className={classes.courseInfoPage}>
		{
		courseContent.length === 0
		? "There is not content yet"
		: courseContent.map(theme =>
			<ThemeCard 
			theme={theme} 
			onDeleteTheme={()=>{onDeleteThemeClick(theme.theme_id)}}
			addTaskClick={()=>{onAddButtonClick(theme.theme_id)}}
			key={theme.theme_id}
			/>)
		}
		{role === 'admin' 
		? <CustomButton label='+' onClick={() => {navigate(`/addtheme/${courseId}`)}}/>
		: ''}
		
	</div>
  )
}

export default CourseInfoPage