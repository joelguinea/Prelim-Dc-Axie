import React, {useState, useEffect} from "react"
import { View } from "./components/View";

//getting values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('axies');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [axies, setAxies]= useState([getDatafromLS()]);

  //input field states
  const [name, setName]= useState('');
  const [type, setType]= useState('');
  const [color, setColor]= useState('');
  const [price, setPrice]= useState('');

  //form submit event
  const handleAddAxieSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let axie={
      name,
      type,
      color,
      price
    }
    setAxies([...axies, axie]);
    setName('');
    setType('');
    setColor('');
    setPrice('');
  }

  //delete from LS
  const deleteAxie=(name)=>{
    const filteredAxies=axies.filter((element,index)=>{
      return element.name !== name
    })
    setAxies(filteredAxies);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('axies', JSON.stringify(axies));
  },[axies])

  return(
    <div className="wrapper">
      <h1>Axie List</h1>
      <p>Add and view your list.</p>
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={handleAddAxieSubmit}>
            <label>Name</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Type</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setType(e.target.value)} value={type}></input>
            <br></br>
            <label>Color</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setColor(e.target.value)} value={color}></input>
            <br></br>
            <label> Price</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              Add Axie
            </button>
          </form>
        </div>

        <div className="view-container">
          {axies.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <View axies={axies} deleteAxie={deleteAxie}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary btn-md" 
          onClick={()=>setAxies([])}>Remove All</button>
          </>}
          {axies.length <1 && <div>No axies added.</div>}
        </div>
      </div>
    </div>
  )
}

export default App;