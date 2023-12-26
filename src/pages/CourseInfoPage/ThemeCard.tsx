import React, {FC} from 'react'
import { themeContent } from './CourseInfoPage'
import classes from './ThemeCard.module.sass'
import TaskCard from './TaskCard'
import { useGetRole } from '../../hooks/useGetRole'

interface themeCardProps{
	theme: themeContent
	onDeleteTheme: () => void
	addTaskClick: () => void
}

const ThemeCard:FC<themeCardProps> = ({theme, onDeleteTheme, addTaskClick}) => {
	
	const { role } = useGetRole();

  return (
	<div className={classes.themeCard} key={theme.theme_id}>
		<h1>{theme.theme_title}</h1>
		<p>{theme.theme_description}</p>
		{theme.tasks.length === 0 
		? <p className={classes.placeholder}>there is no tasks in this theme</p>
		: theme.tasks.map(task => 
		<TaskCard task={task} key={task.id}/>
		)}
		{
			role === 'admin'
			? <button onClick={addTaskClick} className={classes.addTaskButton}>
				+
			</button>
			: ''
		}
		{
			role === 'admin'
			? <button onClick={onDeleteTheme} className={classes.deleteButton}>
				delete
			</button>
			: ''
		}
	</div>
  )
}

export default ThemeCard