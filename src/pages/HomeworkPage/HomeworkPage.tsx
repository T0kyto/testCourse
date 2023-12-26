import React, {useState} from 'react'
import classes from './HomeworkPage.module.sass'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { apibasename } from '../../components/Register/Register'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useCheckAdmin } from '../../hooks/useCheckAdmin'
import { useGetHomework } from '../../hooks/useGetHomework'

const HomeworkPage = () => {

	const params = useParams();
	const navigate = useNavigate();
	// const [homework, setHomework] = useState<homeworkContent | null>()
	const {
		homework, 
		isHomeworkError, 
		isHomeworkLoading, 
		radioValue, 
		setRadioValue, 
		feedbackValue, 
		setFeedbackValue} = useGetHomework();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	// const [radioValue, setRadioValue] = useState<string>('0');

	// const getHomework = async () => {
	// 	const response = await axios.get(`${apibasename}/homework/${params.id}`)
	// 	if(response == null){
	// 		navigate('/main', {replace: true})
	// 	}
	// 	console.log(response.data)
	// 	setHomework(response.data)
	// 	setRadioValue(response.data.grade)
	// }
	
	useCheckAdmin();
	const changeRadioValue = (event:React.ChangeEvent<HTMLInputElement>) => {
		setRadioValue(event.target.value);
	}

	const onButtonClick = async () => {
		if(isEdit){
			let data = new FormData();
			data.append('id', params.id ? params.id : '');
			data.append('grade', radioValue);
			data.append('feedback', feedbackValue);
			const response = await axios.post(`${apibasename}/rate`, data);
			console.log(response.data);
			setIsEdit(!isEdit);
		}else{
			setIsEdit(!isEdit);
		}
	}

	const onLabelClick = (event:any) => {
		console.log(event.target);
		console.log(event.target.id);
		setRadioValue(event.target.id);
		console.log(radioValue);
	}

  return (
	<div className={classes.homeworkPage}>
		<h1>Homework by {homework?.email}</h1>
		<p>{homework?.content}</p>
		<CustomButton onClick={() => onButtonClick()} label={isEdit ? "Save" : "Edit"}/>
		{
			isEdit 
			? <div>
				<div className={classes.radioArea}>
					<p>Rate homework: </p>
					
					<input 
					type="radio"
					value='0' 
					name='zero' 
					checked={radioValue==='0' ? true : false} 
					onChange={changeRadioValue}/>
					<label htmlFor="zero" id='0' onClick={onLabelClick}>0</label>

					<input 
					type="radio" 
					value='1' 
					name='first' 
					checked={radioValue==='1' ? true : false} 
					onChange={changeRadioValue}/>
					<label htmlFor="first" id='1' onClick={onLabelClick}>1</label>

					<input 
					type="radio" 
					value='2' 
					name='second' 
					checked={radioValue==='2' ? true : false} 
					onChange={changeRadioValue}/>
					<label htmlFor="third" id='2' onClick={onLabelClick}>2</label>
					
					<input
					 type="radio" 
					value='3' 
					name='third' 
					checked={radioValue==='3' ? true : false} 
					onChange={changeRadioValue}/>
					<label htmlFor="fourth" id='3' onClick={onLabelClick}>3</label>
					
					<input 
					type="radio" 
					value='4' 
					name='fourth' 
					checked={radioValue==='4' ? true : false} 
					onChange={changeRadioValue}/>
					<label htmlFor="fifth" id='4' onClick={onLabelClick}>4</label>
					
					<input 
					type="radio" 
					value='5' 
					name='fifth' 
					checked={radioValue==='5' ? true : false} 
					onChange={changeRadioValue}/>
					<label htmlFor="sixth" id='5' onClick={onLabelClick}>5</label>
				</div>
				<textarea 
				className={classes.feedbackInput} 
				value={feedbackValue} 
				onChange={(event) => setFeedbackValue(event.target.value)}/>
			</div>
			: ''
		}
	</div>
  )
}

export default HomeworkPage