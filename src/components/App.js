import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom'
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { BrowsePage } from 'pages/BrowsePage/BrowsePage';
import { FavoritesPage } from 'pages/FavoritesPages/FavoritesPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/catalog' element={<BrowsePage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Route>
    </Routes>
    </AnimatePresence>
  );
}

export default App;
