import logo from './logo.svg';
import './App.css';
import LazyHeader from './Pages/Header/Header';
import LazyHomPage from './Pages/HomPage/HomPage';
import LazySiteMap from './Pages/SiteMap/SiteMap';
import LazyLayout from './Pages/Layout/Layout';
import LazyReactFormHookes from './Pages/Forms/ReactFormHookes/ReactFormHookes';
import LazyFormik from './Pages/Forms/Formik/Formik';
import LazyReactFormHookesMui from './Pages/Forms/ReactFormHookesMui/ReactFormHookesMui';
import LazySearchFilter from './Pages/SearchFilter/SearchFilter';
import LazySearchMultiFilter from './Pages/SearchMultiFilter/SearchMultiFilter';
import LazyDatepicker from './Pages/datepickers/datepicker';
import LazyFormMultiStep from './Pages/Forms/ReactForms/FormMultiStep/FormMultiStep';
import LazySingleFormMultipleStep from './Pages/Forms/ReactForms/SingleFormMultipleStep/SingleFormMultipleStep';
import LazySearchCities from './Pages/SearchCities/SearchCities';
import LazyThrotelling from './Pages/throtelling/throtelling';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>            
            <Routes>
                <Route path='/' element={<LazyLayout><LazyHomPage /></LazyLayout>} />      
                <Route path='/form-hookes' element={<LazyLayout><LazyReactFormHookes /></LazyLayout>} />          
                <Route path='/formik' element={<LazyLayout><LazyFormik /></LazyLayout>} />
                <Route path='/mui-hookes' element={<LazyLayout><LazyReactFormHookesMui/></LazyLayout>} />
                <Route path='/sitemap' element={<LazyLayout><LazySiteMap/></LazyLayout>} />
                <Route path='/search' element={<LazyLayout><LazySearchFilter/></LazyLayout>} />
                <Route path='/multi-search' element={<LazyLayout><LazySearchMultiFilter/></LazyLayout>} />
                <Route path='/datepicker' element={<LazyLayout><LazyDatepicker /></LazyLayout>} />
                <Route path='/form-multisteps' element={<LazyLayout><LazyFormMultiStep/></LazyLayout>} />
                <Route path='/single-form-multi-stps' element={<LazyLayout><LazySingleFormMultipleStep/></LazyLayout>} />
                <Route path='/search-cities'element={<LazyLayout><LazySearchCities/></LazyLayout>} />
                <Route path='/throtelling' element={<LazyLayout><LazyThrotelling/></LazyLayout>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

