import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AsteroidListComponent from './components/AsteroidListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AsteroidDetailComponent from './components/AsteroidDetailComponent';

function App() {
  return (

    <div>
        <Router>
          <div className='container'>
              <HeaderComponent></HeaderComponent>
              <div className="container">
                <Routes>
                    <Route path='/' element={<AsteroidListComponent/>}></Route>
                    <Route path='/asteroids' element={<AsteroidListComponent></AsteroidListComponent>}></Route>
                    <Route path='/asteroidDetail' element={<AsteroidDetailComponent/>} ></Route>
                </Routes>
              </div>  
              <FooterComponent></FooterComponent>  
          </div>
        </Router>
    </div>
  );
}

export default App;
