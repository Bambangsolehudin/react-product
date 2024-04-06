import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


import Header from '../components/Header'
import $ from 'jquery'
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';


// Modal
import Modal from 'react-bootstrap/Modal';



function Home() {

  // tools
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 



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
  const [id, setId] = useState('')
  const [paginate, setPaginate] = useState(0)


 // Function
    const getProduct = () => {
      axios.get(`https://api.escuelajs.co/api/v1/products?offset=${paginate}&limit=10`)
      .then((res) => {
        setProducts( res.data)

        // $('#table-data').DataTable();
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    };

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
        
          location.reload()
       
      })
      getProduct()
    }).catch(err => {
      console.log(err);
    })
  }
  const handleUpdateProduct = (event) => {
    event.preventDefault()

    let payload = {
      "title": title,
      "price": price,
    }
    console.log(payload)

    axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, payload).then((res) => {
      console.log(res);
      // location.reload()
      Swal.fire({
        title: "Success!",
        text: "Success  Add Product",
        icon: "success"
      }).then(() => {
        
        getProduct()
        location.reload()
      })
    }).catch(err => {
      console.log(err);
    })
  }


  const handleDelete = (event, id) => {
    event.preventDefault()

    axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => {
      console.log(res);
      // location.reload()
      Swal.fire({
        title: "Success!",
        text: "Success  Delete Product",
        icon: "success"
      }).then(() => {
        location.reload()
      })
      getProduct()
    }).catch(err => {
      console.log(err);
    })
  }


  const handleUpdate = (event, p) => {
    event.preventDefault()
    

    console.log(p);
    setTitle(p.title)
    setprice(p.price)

    setId(p.id)
    handleShow()
  }

  const setPagination = (event) => {
    event.preventDefault()
    
    setPaginate(paginate + 10)

    console.log(paginate);
    axios.get(`https://api.escuelajs.co/api/v1/products?offset=${paginate}&limit=10`)
    .then((res) => {
      let datas = products

      res.data.map(e => {
        datas.push(e)
      })
      setProducts(datas)

      // $('#table-data').DataTable();
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })

    

   
  }



  return (
    <>
        <Header />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" defaultValue={title} onChange={e => setTitle(e.target.value)} class="form-control" placeholder='Title' />
            <input type="number" defaultValue={price} onChange={e => setprice(e.target.value)} class="form-control" placeholder='price' />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdateProduct}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="container">
          <div className="row justify-content-center my-4">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 card shadow">
              <div className="card-header text-center">Form Add Product</div>
              <div className="card-body text-center">
                <input type="text" onChange={e => setTitle(e.target.value)} class="form-control" placeholder='Title' />
                <input type="number" onChange={e => setprice(e.target.value)} class="form-control" placeholder='price' />
                <input type="text" onChange={e => setdescription(e.target.value)} class="form-control" placeholder='Description' />
                <input type="number" onChange={e => setcategoryId(e.target.value)} class="form-control" placeholder='CategoryId' />
                
                
                <input type="text" onChange={e => setimages(e.target.value)} class="form-control" placeholder='images .. Link' />
                <button type="submit" class="btn btn-primary btn-sm mt-4" onClick={handleSubmit}>Add Product</button>
              </div>
            </div>
          </div>

          <hr />


          <div className="row justify-content-center">
            <div className="col-12">
              <table class="table table-bordered" id='table-data'>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Img</th>
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
                        <td>
                          <img src={p.images[0]} alt="" srcset="" />
                        </td>
                        <td>{p.description}</td>
                        <td>
                          {p.price} $
                        </td>
                        <td>
                          <div className="btn-group">
                          <button className='btn btn-sm btn-warning' onClick={(e) => handleUpdate(e, p)}>Update</button>
                          <button className='btn btn-sm btn-danger' onClick={(e) => handleDelete(e, p.id)} >Delete</button>
                          </div>
                        </td>
                      </tr>)
                    })
                  }


                  
                </tbody>
              </table>  



            </div>
          </div>


          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn btn-info" onClick={setPagination}>
                Lihat lebih
              </button>
            </div>
          </div>
        </div>     
            
       
    </>
    
  );
}


export default Home;