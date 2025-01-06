import { useState, } from 'react';
import {SearchBar} from "./components/searchBar.jsx";
import {SearchResultList} from "./components/searchResultList.jsx";
import "./App.css";

function App() {
  
  const [results, setResults] = useState([])
  
  return (
      
     <div className="navbar">
      <div className='nav-item'>
        <div><h2 className="title">Seker</h2></div>
      <div><ul className="list-items">
        <li><a href="#">Images</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Maps</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Products</a></li>
      </ul>
      </div>
      <div>
        <button className="sign--in-btn">Sign In 
        <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
    </div>
      </div>
      
     <div className='App'>
     <div className='search-bar-container'>

        < SearchBar setResults = {setResults} />
        <SearchResultList results= {results}/>
        
      </div>
   
     </div>
     </div>
      
  );
}

export default App;