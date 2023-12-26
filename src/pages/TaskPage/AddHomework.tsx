import React, { useState, FC } from 'react'
import classes from './AddHomework.module.sass'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHooks'
import CustomButton from '../../components/CustomButton/CustomButton'
import axios from 'axios'
import { apibasename } from '../../components/Register/Register'

interface addHomeworkProps{
	onSend: () => void
}

const AddHomework:FC<addHomeworkProps> = ({ onSend }) => {
	const [homeworkContent, setHomeworkContent] = useState<string>('')
	const params = useParams();
	const user = useAppSelector(store => store.user);

	const onSaveClick = async () => {
		let data = new FormData();
		data.append('task_id', params.id ? params.id : '');
		data.append('user_id', user.uid ? user.uid : '');
		data.append('content', homeworkContent);
		data.append('time', new Date().getTime().toString())
		const response = await axios.post(`${apibasename}/homework`, data);
		console.log(response.data);
		onSend();
		setHomeworkContent('');
	}

  return (
	<div className={classes.addHomework}>
		<textarea 
		value={homeworkContent} 
		onChange={event => setHomeworkContent(event.target.value)}
		className={classes.homeworkContent}
		/>
		<CustomButton
		label='Save'
		onClick={onSaveClick}
		/>
	</div>
  )
}

export default AddHomework