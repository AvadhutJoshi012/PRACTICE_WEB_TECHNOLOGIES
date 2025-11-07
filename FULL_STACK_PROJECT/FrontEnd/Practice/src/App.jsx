import './App.css'
import Counter from './pages/Counter'
import EventExample from './pages/EventExample'
import Greeting from './pages/Greeting'
import Home from './pages/Home'
import InputExample from './pages/InputExample'
import ToggleText from './pages/ToggleText'
import InputEvent from './pages/InputEvent'
import FormExample from './pages/FormExample'
import GreetParameter from './pages/GreetParameter'

function App() {

  return(
    <>
        <Home/>
        <hr />
        <Counter/>
        <hr />
        <ToggleText/>
        <hr />
        <InputExample/>
        <hr />
        <EventExample/>
        <hr />
        <Greeting/>
        <hr />
        <InputEvent/>
        <hr />
        <FormExample/>
        <hr />
        <GreetParameter/>
    </>
  )
}

export default App
