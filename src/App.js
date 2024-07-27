import React from 'react';
import {BrowserRouter , Routes , Route}  from 'react-router-dom';
import Header from './components/header';
import Feed from './components/feed';
import SearchResults from './components/searchResults';
import VideoDetails from './components/videoDetails';
import { AppContext } from './context/ContextApi';


function App() {
  return (

    <AppContext>
<BrowserRouter>

<div className=' flex flex-col h-full'>
  <Header/>
  <Routes>

<Route path="/"  exact element={<Feed/>}   />
<Route path="/searchResult/:searchQuery" element={<SearchResults/>}/>
<Route path="/video/:id" element={VideoDetails}/>
  </Routes>



</div>
</BrowserRouter>
    </AppContext>

 


  );
}

export default App;
