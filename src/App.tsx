import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Category from './Category';
import News from './News';
import BusinessNews from './page/business';
import ScienceNews from './page/science';
import HealthNews from './page/health';
import SportsNews from './page/sports';
import TechnologyNews from './page/technology';
import EntertainmentNews from './page/entertainment';

function App() {

  // 검색 상태를 업데이트
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Category searchQuery ={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path='/business' Component={BusinessNews}/>
        <Route path='/science' Component={ScienceNews}/>
        <Route path='/entertainment' Component={EntertainmentNews}/>
        <Route path='/sports' Component={SportsNews}/>
        <Route path='/health' Component={HealthNews}/>
        <Route path='/technology' Component={TechnologyNews}/>
        <Route path='/' element={<News searchQuery ={searchQuery} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
