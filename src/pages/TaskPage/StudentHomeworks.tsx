import React, {FC} from 'react'
import { useGetStudentHomeworks } from '../../hooks/useGetStudentHomeworks'
import StudentHomeworkCard from './StudentHomeworkCard';
import AddHomework from './AddHomework';

const StudentHomeworks: FC = () => {
  const {homeworks, isHomeworksError, isHomeworksLoading, isAvailable, updateHomeworks} = useGetStudentHomeworks();
  return (
	<div>
    {
      homeworks.length !== 0
      ? homeworks.map(homework => <StudentHomeworkCard homework={homework} key={homework.id}/>)
      : "there is no answers yet"  
    }
    {
      isAvailable 
      ? <AddHomework onSend={updateHomeworks}/>
      : '' 
    }
  </div>
  )
}

export default StudentHomeworks