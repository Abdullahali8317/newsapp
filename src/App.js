
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App =()=> {
  const pageSize=5;
 
 
  const [progress, setProgress] = useState(0)
  
  
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
        
       
      />
          <Routes>
            <Route exact strict  path="/newsapp"element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact strict path="/business"element={<News setProgress={setProgress}   key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route exact strict path="/entertainment"element={<News setProgress={setProgress}  key="entertainment"  pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route exact strict path="/general"element={<News setProgress={setProgress}   key="general"  pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact strict path="/health"element={<News setProgress={setProgress}   key="health"  pageSize={pageSize} country="in" category="health" />}></Route>
            <Route exact strict path="/science"element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route exact strict path="/sports"element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route exact strict path="/technology"element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
            

          </Routes>
        </Router>
      </div>
    )
  
}

export default App;

