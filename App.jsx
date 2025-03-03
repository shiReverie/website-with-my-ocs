import {
    Routes,
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CharaCarousel from './charas'

const Home = () => (
    <>
    <h2>Home</h2>
    </>
)

const Characters = () => (
    <>
        <h2>Characters</h2>
    <CharaCarousel></CharaCarousel>
    </>
)

const Locations = () => (
    <>
    <h2>Locations</h2>
    </>
)

const Lore = () => (
    <>
    <h2>Lore</h2>
    </>
)

function App() {


  return (
    <>
          <img></img>
          <Router>
              <nav>
               <NavLink to="/" className={({ isActive }) => (isActive ? 'activeNav' : undefined)}>Home</NavLink>
               <NavLink to="/characters" className={({ isActive }) => (isActive ? 'activeNav' : undefined)}> Characters</NavLink>
               <NavLink to="/locations" className={({ isActive }) => (isActive ? 'activeNav' : undefined)}>Locations</NavLink>
               <NavLink to="/lore" className={({ isActive }) => (isActive ? 'activeNav' : undefined)}>Lore</NavLink>
              </nav>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/characters" element={<Characters />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/lore" element={<Lore />} />
              </Routes>
          </Router>
    </>
  )
}

export default App
