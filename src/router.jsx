import 'modern-normalize/modern-normalize.css'; 
import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import AnalisisPage from './views/AnalisisPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage/>} />
            <Route path="/analisis" element={<AnalisisPage/>} />
            
        </Routes>

    </BrowserRouter>
  )
}
