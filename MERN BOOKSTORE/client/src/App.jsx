import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <MyFooter/>
    </>
  )
}

export default App
