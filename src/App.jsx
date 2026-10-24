

import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const[UserData,SetUserData]=useState([])
  const[Index,SetIndex]=useState(1)
  const GetData= async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=8`)
    SetUserData(response.data)
    console.log(response.data);
  }
  useEffect(function(){
    GetData()
  },[Index])
  return (
    <div>
      <div className="gallery-container">

    <h1>Creative Gallery</h1>
    

    <div className="gallery">

     {UserData.map(function(elem){
  return (
    <a key={elem.id} href={elem.url} target='_blank' rel='noreferrer'>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${elem.id}/600/400`}
          alt={elem.author}
          loading="lazy"
        />
        <div className="overlay">
          <h3>{elem.author}</h3>
          <p>✨ Featured Photo</p>
        </div>
      </div>
    </a>
  )
})}

       

    </div>

    <div className="pagination">

        <button onClick={()=>{
          if(Index>1){
            SetIndex(Index-1)
          SetUserData([])
          }
        }}>❮ Prev</button>

        <span>📄Page{Index}</span>

        <button onClick={()=>{
          SetIndex(Index+1)
          SetUserData([])
        }}>Next ❯</button>

    </div>

</div>
    </div>
  )
}

export default App




