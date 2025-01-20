import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import { NavLink } from 'react-router';


function App() {

  return (
    <>
      <h1>Welcome on my Portfolio Site</h1>
      <NavLink to="/games">
        My Games
      </NavLink>
      <AboutMe />
    </>
  )
}

export default App
