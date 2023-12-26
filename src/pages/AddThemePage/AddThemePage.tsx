import React, {useState} from 'react'
import classes from './AddThemePage.module.sass'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { apibasename } from '../../components/Register/Register'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useCheckAdmin } from '../../hooks/useCheckAdmin'

const AddThemePage = () => {

	const navigate = useNavigate()
	const [titleValue, setTitleValue] = useState<string>('')
	const [descriptionValue, setDescriptionValue] = useState<string>('')
	const params = useParams()

	const onSaveButtonClick = async () => {
		let data = new FormData()
		data.append('title', titleValue)
		data.append('description', descriptionValue)
		data.append('course_id', params.id ? params.id : '')
		await axios.post(`${apibasename}/theme`, data)
		navigate(-1)
	}
	useCheckAdmin();

  return (
	<div className={classes.addThemePage}>
		<h1>Add new theme</h1>
		<label htmlFor="title" className={classes.inputLabel}>Title</label>
		<input
		className={classes.titleInput}
		value={titleValue}
		onChange={event => setTitleValue(event.target.value)}
		/>
		<label htmlFor="description" className={classes.inputLabel}>Description</label>
		<textarea
		className={classes.descriptionInput}
		value={descriptionValue}
		onChange={(event) => setDescriptionValue(event.target.value)}
		/>
		<CustomButton label='Save' onClick={() => {onSaveButtonClick()}}/>

	</div>
  )
}

export default AddThemePage