import axios from 'axios'
import {useState, useEffect} from 'react'
import { apibasename } from '../components/Register/Register'
import { useAppSelector } from './reduxHooks'

export const useGetRole = () => {
	const [role, setRole] = useState<string | null>(null);
	const [isRoleError, setIsRoleError] = useState<boolean>(false);
	const [isRoleLoading, setIsRoleLoading] = useState<boolean>(false);
	const user = useAppSelector(store => store.user);
	const fetchRole = async () => {
		try {
			setIsRoleLoading(true);
			const response = await axios.get(`${apibasename}/role/${user.uid}`);
			setIsRoleLoading(false);
			setRole(response.data.role);
		} catch (error){
			console.log(error);
			setIsRoleLoading(false);
			setIsRoleError(true);
		}
	}

	useEffect(() => {
		fetchRole();
	}, [user])

	return {role, isRoleError, isRoleLoading}

}