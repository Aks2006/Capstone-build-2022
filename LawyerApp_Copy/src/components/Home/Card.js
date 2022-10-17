import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import imgnew from '../Home/img/img2.png'
import './css/Card.css'

export default function Card() {
  return (
   
      

      <div className="card" >
        <img src={imgnew} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">HariPrasad Mahato</h5>
          <h6 className="card-subtitle mb-2 text-muted">District Court</h6>
          <p className="card-text">Some quick example text to </p>
          <p >Fess : 1200 </p>
          <p>Contact No : 9734058122</p>
          <p>Rating : 4/5</p>
          {/* <a href="/" className="card-link">Card link</a>
          <a href="/" className="card-link">Another link</a> */}
        </div>
      </div>
   
  )
}
