import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/reduxHooks'
import { privateRoutes, publicRoutes } from '../routes'

const AppRouter = () => {

  const user = useAppSelector(store => store.user)

  return (
    <Routes>
    {user.uid 
    ? privateRoutes.map(({path, Component}) => <Route path={path} key={path} Component={Component}/>)
    : publicRoutes.map(({path, Component}) => <Route path={path} key={path} Component={Component}/>)}
    <Route path='*' element={<Navigate to="/main"/>}/>
  </Routes>
  )
}

export default AppRouter