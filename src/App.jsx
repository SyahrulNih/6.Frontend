import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Landing from './pages/Landing';
import NotFound from './pages/notfound';
import State from './pages/State';
import EventHandling from './pages/EventHandling';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="*" Component={NotFound}/>
        <Route path="/state" Component={State}/>
        <Route path='/eventhandling' Component={EventHandling}/>
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1> */}

    </>
  )
}

export default App
