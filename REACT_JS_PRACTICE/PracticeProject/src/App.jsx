
import './App.css'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Home from './Pages/Home'

import { Morning, Night } from './Pages/Hello'

function Message(){
  return(
    <div>
      <h3>This is message function inside app.jsx</h3>
    </div>
  )
}

function App() {
  return (
    <>
    <Morning/>
    <Header/>
    <Home/>
   <Message/>
   <Footer/>
   <Night/>
   </>
  )
}

export default App
