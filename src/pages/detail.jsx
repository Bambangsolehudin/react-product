import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'






import Header from '../components/Header'
import $ from 'jquery'


function Home() {

  // tools
  const navigate = useNavigate();


  // state

  const [products, setProducts] = useState('')



  // Function
  const getDetailProduct = () => {
    axios.get(`https://api.escuelajs.co/api/v1/products`)
    .then((res) => {
      setProducts(res.data)

      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  };



  // Use Effect
  useEffect(() => {
    getDetailProduct()
  }, []);



 


  return (
    <>
        <Header />

           
            
       
    </>
    
  );
}


export default Home;