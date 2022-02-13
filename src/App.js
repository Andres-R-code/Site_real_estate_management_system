import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from  './components/Home'
import Owners from './components/Owners'
import Owner from './components/Owner'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/propietarios" element={<Owners></Owners>}></Route>
          <Route path="/propietario/:id" element={<Owner></Owner>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
