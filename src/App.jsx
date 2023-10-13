import { Route, Routes } from 'react-router-dom'
import './App.css'
import Rootlayout from './layout/Rootlayout'
import Allapps from './component/Allapps'
import Authentication from './component/Authentication'


function App() {
 
  

  return (
    <>
      <Rootlayout>
        <Routes>
          <Route path='/Allapps' element={<Allapps/>}/> 
          <Route path='/authentication' element={<Authentication/>}/>
        </Routes>
      </Rootlayout>
    </>
  )
}

export default App
