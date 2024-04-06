import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Header() {


  // Tools
  const navigate = useNavigate()

  // State
  const [text, setText] = useState('Header');
  
  
  // Function
 
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white ">
            <div className="container-fluid p-2">
              <div className='flex'>
              <Link className="nav-link active mx-2 hover:bg-sky-700 hover:px-1" to="/">Products Page</Link>
              </div>
            </div>
          </nav>
    </div>
  );
}


export default Header;