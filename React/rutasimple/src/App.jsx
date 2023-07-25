import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './pages/HomeScreen';
import { AboutScreen } from './pages/AboutScreen';
import { AdminScreen } from './pages/AdminScreen';
import { ErrorScreen } from './pages/ErrorScreen';
import { NavbarMenu } from './components/NavbarMenu';
import { ProtectedRoutes } from './routes/ProtectedRoutes';


function App() {

  const [ auth, setAuth ] = useState(false);

  const LogIn = () => {
    setAuth(true);
  };

  const LogOut = () => {
    setAuth(false)
  }; 

  return (
    <BrowserRouter>
      <NavbarMenu logIn={LogIn} logOut={LogOut} auth={auth}/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        <Route path='/admin' element={
          <ProtectedRoutes auth={auth}>
            <AdminScreen/>
          </ProtectedRoutes>
        }/>
        <Route path='*' element={<ErrorScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
