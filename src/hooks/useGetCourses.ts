import axios from 'axios';
import {useState, useEffect} from 'react'
import { apibasename } from '../components/Register/Register';
import { useAppSelector } from './reduxHooks';
import { courseInterface } from '../pages/CoursesPage/CoursesPage';

export const useGetCourses = () => {
	const [courses, setCourses] = useState<courseInterface[]>([]);
	const [isCoursesError, setIsCoursesError] = useState<boolean>(false);
	const [isCourseLoading, setIsCourseLoading] = useState<boolean>(false);
	const user = useAppSelector(store => store.user)

	const fetchCourses = async () => {
		try {
			setIsCourseLoading(true);
			const response = await axios.get(`${apibasename}/courses/${user.uid}`);
			setCourses(response.data);
			setIsCourseLoading(false);
		} catch (error) {
			console.log(error);
			setIsCourseLoading(false);
			setIsCoursesError(true);
		}
	}

	useEffect(() => {
		fetchCourses();
	}, []);


	return {courses, isCoursesError, isCourseLoading};
}