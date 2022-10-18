import React from 'react'
import '../Home/css/CardNew.css'
import Button from 'react-bootstrap/Button';
const CardNew = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
               <div className="container" > 
                <div className="card" key={index}>
                    <div className="card-image">
                        <img src={value.img} alt="" />
                    </div>
                    <div>
                        <p className="card-title">{value.title}</p>
                        <p className="sub-title">{value.Lawyertpe}</p>
        
                        <p className="card-fess">{value.fess}</p>
                        <p className="description">{value.description} </p>
                       <div className="button-container">
                        <Button onClick={value.contact} variant="primary">Call</Button>{' '}
                        <Button variant="primary">Chat</Button>{' '}
                        </div>

                    </div>
                </div>
                </div>
            
            ))};
        </>
    );
};
export default CardNew;
