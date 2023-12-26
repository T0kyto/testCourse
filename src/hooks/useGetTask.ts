import {useState, useEffect} from 'react'
import { taskContent } from '../pages/CourseInfoPage/CourseInfoPage';
import axios from 'axios';
import { apibasename } from '../components/Register/Register';
import { useParams } from 'react-router-dom';

export const useGetTask = () => {
	const [isTaskLoading, setIsTaskLoading] = useState<boolean>(false);
	const [isTaskError, setIsTaskError] = useState<boolean>(false);
	const [task, setTask] = useState<taskContent | null>(null);
	const params = useParams();

	const fetchTask = async () => {
		try{
			setIsTaskLoading(true);
			const response = await axios.get(`${apibasename}/task/${params['id']}`);
			console.log('task fetched');
			setIsTaskLoading(false);
			setTask(response.data);
		}catch(error){
			console.log(error);
			setIsTaskLoading(false);
			setIsTaskError(true);
		}
	}

	useEffect(() => {
		fetchTask();
	}, []);

	return {task, isTaskError, isTaskLoading};
}