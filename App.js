import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import "./index.css";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () =>{
 
  const[data,setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(()=>{
  },[])
 
  const changeHandler = e => {
  setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }
  return (
   <div>
    <center>
      <h2> Gallery snapShorts</h2><br/><br/>
      <form onSubmit= {submitHandler}>
        <input size="30" type="text" value ={search} onChange ={changeHandler} /><br/><br/>
        <input type="submit" name ="search"/>
      </form>
      <br/>
      {data.length>1?<Gallery data={data}/>:<h4>No data loaded</h4>}
    </center>
   </div>
  )
}

export default App;
