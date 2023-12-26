import React, {useState} from 'react'
import classes from './AddTaskPage.module.sass'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { apibasename } from '../../components/Register/Register'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useCheckAdmin } from '../../hooks/useCheckAdmin'

const AddTaskPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [titleValue, setTitleValue] = useState<string>('');
	const [contentValue, setContentValue] = useState<string>('');
	useCheckAdmin();

	const onSaveButtonClick = async () => {
		let data = new FormData();
		data.append('title', titleValue);
		data.append('type', 'text');
		data.append('theme_id', params.id ? params.id.toString() : '');
		data.append('content', contentValue);
		
		const response = await axios.post(`${apibasename}/task`, data);
		console.log(response.data);
		navigate(-1);
	}

  return (
	<div className={classes.addTaskPage}>
		<h1>Add new task</h1>
		<label htmlFor="task" className={classes.inputLabel}>Title</label>
		<input
		className={classes.titleInput}
		value={titleValue}
		onChange={event => setTitleValue(event.target.value)}
		/>
		<label htmlFor="content" className={classes.inputLabel}>Content</label>
		<textarea
		className={classes.contentInput}
		value={contentValue}
		onChange={(event) => setContentValue(event.target.value)}
		/>
		<CustomButton label='Save' onClick={() => {onSaveButtonClick()}}/>
	</div>
  )
}

export default AddTaskPage