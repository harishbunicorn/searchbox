import React, { useState,useEffect } from "react";
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchDetails from "./SearchDetails";



function App() {
  
const [data, setdata] = useState([]);
const [display, setDisplay] = useState(false);

useEffect(()=>getData(),[]);

const getData = () => {
    axios.get('http://www.mocky.io/v2/5ba8efb23100007200c2750c').then((response) => {
      const myData = response.data;
      setdata(myData);
    })
}


  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

 

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
       value.id.toLowerCase().includes(searchWord.toLowerCase()) || 
       value.address.toLowerCase().includes(searchWord.toLowerCase()) || 
       value.pincode.toLowerCase().includes(searchWord.toLowerCase())
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter)
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const searchResults = (e) => {
    if(e.key === 'Enter') {
      console.log(filteredData)
      setDisplay(!display)
    }
  } 

  return (
    <div>
      {display?<SearchDetails data={filteredData}/>:
      <SearchBar handleFilter={handleFilter} clearInput={clearInput} wordEntered={wordEntered} filteredData={filteredData} searchResults={searchResults}/>}
    </div>
  );
}

export default App;
