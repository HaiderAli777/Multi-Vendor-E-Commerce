import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage,SignupPage} from '../src/Routes/route.js';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LoginPage></LoginPage>} ></Route>
    <Route path='/sign-up' element={<SignupPage></SignupPage>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
