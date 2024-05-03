import {BrowserRouter, Routes,Route} from 'react-router-dom'
import  { AuthProvider } from './context/AuthContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TasksFomPage from './pages/TasksFormPage'
import TasksPage from './pages/TasksPage'
import Profilepage from './pages/ProfilePage'
import HomePage from './pages/HomePage'

import ProtectedRoute from './ProtectedRoute'

function App() {
  return(
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      
      <Route path='/register' element={<RegisterPage/>}/>
      
      <Route element={<ProtectedRoute/>}>
      
      <Route path='/tasks' element={<TasksPage/>}/>
      <Route path='/add-task' element={<TasksFomPage/>}/>

      <Route path='/tasks/:id' element={<TasksFomPage/>}/>
      <Route path='/profile' element={<Profilepage/>}/>


      </Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
  )
}

export default App