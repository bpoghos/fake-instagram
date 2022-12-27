import { Route, Routes } from 'react-router';
import './App.css';
import { Favorites } from './components/Favorites';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='favotires' element={<Favorites />}></Route>
      </Routes>

    </div>
  );
}

export default App;
