import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { BrowsePage } from 'pages/BrowsePage/BrowsePage';
import { FavoritesPage } from 'pages/FavoritesPages/FavoritesPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/catalog' element={<BrowsePage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
