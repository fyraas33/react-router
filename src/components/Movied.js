import React from 'react'
import Rate from './Rate'
import {useParams} from "react-router-dom"
import "../App.css"
const Movied = ({movies}) => {
    const {cin}=useParams()
    
    const movie=movies.find(el=>el.id===parseInt(cin)) || {}
  return (
    <div>
      
    <div className="description">
      <div className='trailer'>
           {movie.trailer}  
           
      <div className="rates">
          <Rate rating={movie.rate} />
         
        </div>
        </div>
        <br/>
      <p>
        <b style={{ color: " rgba(255,40,40,0.87)" }}>Description:</b>{" "}
        {movie.description}
      </p>{" "}
      <br />
      <br />
      <div className="watching">
        

        
        
        </div>
        </div>
        </div>
  )
}

export default Movied