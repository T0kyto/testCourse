import axios from 'axios'
import { apibasename } from '../components/Register/Register'
import { useAppSelector } from './reduxHooks'
import { useNavigate } from 'react-router-dom'

export const useCheckAdmin =  async () => {

	const user = useAppSelector(store => store.user);
	const navigate = useNavigate()

	try{
		const response = await axios.get(`${apibasename}/role/${user.uid}`);
		if(response.data.role !== 'admin'){
			navigate('/main', {replace: true});
		}
	}catch(error){
		console.log(error);
	}
}