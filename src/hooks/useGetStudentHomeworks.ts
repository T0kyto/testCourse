import { useState, useEffect } from 'react'
import { homeworkContent } from '../pages/TaskPage/HomeworkCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apibasename } from '../components/Register/Register';
import { useAppSelector } from './reduxHooks';

export const useGetStudentHomeworks = () => {
	const [isHomeworksError, setIsHomeworksError] = useState<boolean>(false);
	const [isHomeworksLoading, setIsHomeworksLoading] = useState<boolean>(false);
	const [homeworks, setHomeworks] = useState<homeworkContent[]>([]);
	const [isAvailable, setIsAvailable] = useState();
	const params = useParams();
	const user = useAppSelector(store => store.user);

	const fetchHomeworks = async () => {
		try {
			setIsHomeworksLoading(true);
			const response = await axios.get(`${apibasename}/homeworksstudent/${params.id}/${user.uid}`);
			setIsHomeworksLoading(false);
			setHomeworks(response.data);
		} catch (error) {
			setIsHomeworksLoading(false);
			setIsHomeworksError(true);
			console.log(error);
		}
	}

	const fetchIsAvailable = async () => {
		try {
			setIsHomeworksLoading(true);
			const response = await axios.get(`${apibasename}/checkavailable/${params.id}/${user.uid}`);
			console.log(response.data);
			setIsAvailable(response.data.available);
			console.log(response.data.available);
			setIsHomeworksLoading(false);
		} catch (error) {
			setIsHomeworksLoading(false);
			setIsHomeworksError(true);
			console.log(error);
		}
	}

	const updateHomeworks = () => {
		fetchHomeworks();
		fetchIsAvailable();
	}

	useEffect(() => {
		fetchHomeworks();
		fetchIsAvailable();
	}, []);

	return {homeworks, isHomeworksError, isHomeworksLoading, isAvailable, updateHomeworks};
}