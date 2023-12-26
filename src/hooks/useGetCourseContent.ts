import axios from 'axios'
import { useState, useEffect } from 'react'
import { apibasename } from '../components/Register/Register'
import { themeContent } from '../pages/CourseInfoPage/CourseInfoPage';
import { useParams } from 'react-router-dom';
import { useAppSelector } from './reduxHooks';

export const useGetCourseContent = () => {

	const [courseContent, setCourseContent] = useState<themeContent[]>([]);
	const [isCourseError, setIsCourseError] = useState<boolean>(false);
	const [isCourseLoading, setIsCourseLoading] = useState<boolean>(false);
	const params = useParams();
	const user = useAppSelector(store => store.user);

	const fetchCourseContent = async () => {
		try{
			setIsCourseLoading(true);
			const response = await axios.get(`${apibasename}/coursecontent/${params.id}/${user.uid}`);
			setCourseContent(response.data);
			setIsCourseLoading(true);
		}catch(error){
			setIsCourseLoading(false);
			console.log(error);
			setIsCourseError(true);
		}
	}

	useEffect(() => {
		fetchCourseContent();
	}, []);


	return {courseContent, isCourseError, isCourseLoading, setCourseContent};
}