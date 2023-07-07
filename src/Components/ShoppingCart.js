import React, { Component, createFactory, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import products from './products/products.json'
import ItemInCart from './ItemInCart'
import Table from 'react-bootstrap/Table';

export default function ShoppingCart(){

   console.log('cart');
   debugger;
   const productListGeneral =useSelector((state)=>state.products.products);
   const productsList = useSelector((state) => state.users.currentUser.products);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [products, setProducts] = useState(productsList);

   let count=0;
   let totalPrice=0;
   for (let index = 0; index < productsList.length; index++) {
      count=parseInt((products[index])*(productListGeneral[index].price))
      totalPrice+=count;
   }
 
return(
   <>
   <Table striped bordered hover size="sm">
      <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Number of tickets</th>
            <th>NIS Per Ticket</th>
            <th>Total cost</th>
          </tr>
        </thead>
       {products.map((val,ind) => 
       val > 0 &&
      ( <ItemInCart  value={productListGeneral[ind]} key={ind}></ItemInCart>))}
 </Table>
 <h1>סה''כ לתשלום:{totalPrice}</h1>
 <button type="button" className="btn btn-secondary" onClick={() => {  navigate(`/payment`); }} >לתשלום</button>
</>
);
}
