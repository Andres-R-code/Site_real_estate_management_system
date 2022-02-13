import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from  './components/Home'
import Owners from './components/Owners'
import Owner from './components/Owner'
import RuralProperties from './components/RuralProperties'
import RuralProperty from './components/RuralProperty'
import UrbanProperties from './components/UrbanProperties'
import UrbanProperty from './components/UrbanProperty'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/propietarios" element={<Owners></Owners>}></Route>
          <Route path="/propietario/:id" element={<Owner></Owner>}></Route>
          <Route path="/predios-rurales" element={<RuralProperties></RuralProperties>}></Route>
          <Route path="/predio-rural/:id" element={<RuralProperty></RuralProperty>}></Route>
          <Route path="/predios-urbanos" element={<UrbanProperties></UrbanProperties>}></Route>
          <Route path="/predio-urbano/:id" element={<UrbanProperty></UrbanProperty>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
