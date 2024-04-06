import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'






import Header from '../components/Header'
import $ from 'jquery'
import Swal from 'sweetalert2'


function Home() {

  // tools
  const navigate = useNavigate();


  // state




  // Function
  const getProduct = () => {
    axios.get(`https://api.escuelajs.co/api/v1/products`)
    .then((res) => {
      setProducts(res.data)

      // $('#table-data').DataTable();
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  };



  // Use Effect
  useEffect(() => {
    getProduct()
  }, []);



 
  const [products, setProducts] = useState('')
  const [title, setTitle] = useState('')
  const [price, setprice] = useState('')
  const [description, setdescription] = useState('')
  const [categoryId, setcategoryId] = useState('')
  const [images, setimages] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()

    let payload = {
      "title": title,
      "price": price,
      "description": description,
      "categoryId": categoryId,
      "images": [images]
    }
    console.log(payload)

    axios.post(`https://api.escuelajs.co/api/v1/products/`, payload).then((res) => {
      console.log(res);
      // location.reload()
      Swal.fire({
        title: "Success!",
        text: "Success  Add Product",
        icon: "success"
      }).then(() => {
        setTimeout(() => {
          location.reload()
        }, 800);
      })
      



      getProduct()




    }).catch(err => {
      console.log(err);
    })
  }





  return (
    <>
        <Header />

        <div className="container">
          <div className="row justify-content-center my-4">
            <div className="col-6 card p-2 shadow">
              <div class="mb-3">
                <input type="text" onChange={e => setTitle(e.target.value)} class="form-control" placeholder='Title' />
                <input type="number" onChange={e => setprice(e.target.value)} class="form-control" placeholder='price' />
                <input type="text" onChange={e => setdescription(e.target.value)} class="form-control" placeholder='Description' />
                <input type="number" onChange={e => setcategoryId(e.target.value)} class="form-control" placeholder='CategoryId' />
                <input type="text" onChange={e => setimages(e.target.value)} class="form-control" placeholder='images .. Link' />
              </div>
              <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Tambah</button>
            </div>
          </div>


          <div className="row justify-content-center">
            <div className="col-8">
              <table class="table " id='table-data'>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    products && products.length > 0 &&

                    products.map((p, i) => {
                      return (<tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{p.title}</td>
                        <td>{p.description}</td>
                        <td>
                          {p.price} $
                        </td>
                        <td>
                          <div className="btn-group">
                          <button className='btn btn-sm btn-warning'>Update</button>
                          <button className='btn btn-sm btn-danger'>Delete</button>
                          </div>
                        </td>
                      </tr>)
                    })
                  }


                  
                </tbody>
              </table>  
            </div>
          </div>
        </div>     
            
       
    </>
    
  );
}


export default Home;