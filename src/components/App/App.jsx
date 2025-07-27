import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import { fetchBrands } from '../../redux/operations.js';


const MainPage = lazy(() => import('../../pages/MainPage/MainPage.jsx'));
const CataloguePage = lazy(() => import('../../pages/CataloguePage/CataloguePage.jsx'));
const SelectedAutoPage = lazy(() => import('../../pages/SelectedAutoPage/SelectedAutoPage.jsx'));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, [location.pathname, dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/catalog' element={<CataloguePage />}/>
        <Route path='/catalog/:id' element={<SelectedAutoPage />} />
      </Route>
    </Routes>
  );
}

export default App
