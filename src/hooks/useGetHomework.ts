import { useState, useEffect } from 'react'
import { homeworkContent } from '../pages/TaskPage/HomeworkCard';
import axios from 'axios';
import { apibasename } from '../components/Register/Register';
import { useParams } from 'react-router-dom';

export const useGetHomework = () => {
	const [isHomeworkError, setIsHomeworkEror] = useState<boolean>(false);
	const [isHomeworkLoading, setIsHomeworkLoading] = useState<boolean>(false);
	const [homework, setHomework] = useState<homeworkContent | null>(null);
	const [radioValue, setRadioValue] = useState<string>('0');
	const [feedbackValue, setFeedbackValue] = useState<string>('');
	const params = useParams();

	console.log('homework rendered');
	
	const fetchHomework = async () => {
		try {
			setIsHomeworkLoading(true);
			const response = await axios.get(`${apibasename}/homework/${params.id}`);
			setIsHomeworkLoading(false);
			setHomework(response.data);
			setRadioValue(response.data.grade);
			setFeedbackValue(response.data.feedback);
		} catch (error) {
			setIsHomeworkLoading(false);
			setIsHomeworkEror(true);
			console.log(error);
		}
	}

	useEffect(() => {
		fetchHomework();
	}, []);

	return {homework, isHomeworkError, isHomeworkLoading, radioValue, setRadioValue, feedbackValue, setFeedbackValue};
}