import React from 'react'
import './legend.css';

export default function Legend() {

  return (
    <div className="legend leaflet-bottom leaflet-right">
      <h4>Legend</h4>
      <p>Livability 1 to 100</p>
      
      <i style={{backgroundColor:"#ff0000"}}></i><span>1-20&#9;Lowest</span><br/>
      <i style={{backgroundColor:"#f66d00"}}></i><span>21-40&#9;Low</span><br/>
      <i style={{backgroundColor:"#d7a700"}}></i><span>41-60&#9;Moderate</span><br/>
      <i style={{backgroundColor:"#a0d600"}}></i><span>61-80&#9;High</span><br/>
      <i style={{backgroundColor:"#00ff00"}}></i><span>81-100&#9;Highest</span><br/>
      {/* 0.01, 0.21, 0.41, 0.61, 0.81 */}
      
    </div>
  )
}