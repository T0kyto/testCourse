import axios from 'axios'
import { useState, useEffect } from 'react'
import { apibasename } from '../components/Register/Register'

export interface homeworkCard{
	id: string
	grade: string
	time: string
	email: string
	title: string
	feedback: string
}

export const useGetAllHomeworks = () => {
	const [isHomeworksError, setIsHomeworksError] = useState<boolean>(false);
	const [isHomeworksLoading, setIsHomeworksLoading] = useState<boolean>(false);
	const [homeworks, setHomeworks] = useState<homeworkCard[]>([])

	const fetchHomeworks = async () => {
		try {
			setIsHomeworksLoading(true);
			const response = await axios.get(`${apibasename}/homeworksadmin`);
			setIsHomeworksLoading(false);
			setHomeworks(response.data);
		} catch (error) {
			setIsHomeworksLoading(false);
			console.log(error);
			setIsHomeworksError(true);
		}
	}

	useEffect(() => {
		fetchHomeworks();
	}, []);

	return { homeworks, isHomeworksError, isHomeworksLoading }
}