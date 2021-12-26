// import logo from './logo.svg';
import './App.css';
// import Landing_page from './Landing_page/Landing_page';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Postview from './Postview/Postview';
import Landing from './Landing/Landing';
function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/postview" element={<Postview/>}/>
        </Routes>
        </div>
    </BrowserRouter>
       
  );
}

export default App;
