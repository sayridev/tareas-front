import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { TareasPage } from '../pages/TareasPage';

export const TareasRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/task' element={<TareasPage/>}/>
        <Route path='/*' element={<Navigate to="/"/>} />
    </Routes>
  )
}
