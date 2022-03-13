import React, {useState} from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';


function Pizza({pizza }) {
    const [quanity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')

    // Modal View
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{margin: '50px'}}>
            <div onClick={handleShow}>
                <h1 className='pizza_name'> {pizza.name} </h1>
                <img src={pizza.image} className='img-fluid' style={{height: '200px', width:'200px', marginLeft: '50px', borderRadius: '10px'}} />
            </div>
            <div className='flex-container'>
                <div className='w-100'>
                    <p>Varients</p>
                   <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                   {pizza.varients.map(varient=>{
                       return <option value={varient}>{varient}</option>
                   })}
                   </select>
                </div>

                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quanity} onChange={(e) =>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x , i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                   </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <p className='mt-2'>Price: GHS {pizza.prices[0]  [varient] * quanity}</p> 
                </div>
                <div className='m-1 w-100'>
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>
            {/* Bootstrap modal view */}
            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} alt="Pizza Image" className='img-fluid' style={{height: '400px'}} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                   <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default Pizza
