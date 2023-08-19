//import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  const apikey="3a466c7393ce422dbb9e02cb57a54c95"
  const [mode,setMode]=useState("light");
  const [progress,setProgress]=useState(0);
  
  // const seProgress=(progress)=>{
  //   setProgress(progress);
  // }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121416';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  
    // Change the background color of the body based on the mode
    
  
  

  
  
    
    return (
      <BrowserRouter>
        <div>
            <NavBar toggleMode={toggleMode} mode={mode}/>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
              
            />
        </div>
        <Routes>
          <Route  path="/" element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="general" country="in" category="general" mode={mode}/>} />
          <Route  exact path="/sports"  element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="sports" country="in" category="sports" mode={mode}/>} />
          <Route  exact path="/entertainment"  element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="entertainment" country="in" category="entertainment" mode={mode}/>} />
          <Route  exact path="/business"  element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="business" country="in" category="business" mode={mode}/>} />
          <Route  exact path="/health"  element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="health" country="in" category="health" mode={mode}/>} />
          <Route  exact path="/technology"  element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="technology" country="in" category="technology" mode={mode}/>} />
          <Route  exact path="/science"  element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="science" country="in" category="science" mode={mode}/>} />
          <Route  exact path="/general" element={<News setProgress={setProgress} apikey={apikey}  pageSize={5} key="general" country="in" category="general" mode={mode}/>} />
        </Routes>
      </BrowserRouter>
    )
  
}
export default App;

