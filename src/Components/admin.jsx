import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
 const Admin = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        let username = sessionStorage.getItem("username")
        if(username === "" || username === null){
            Navigate("/login")
        }
    }, []);
    return ( 
        <>
        <div className="container my-2 mb-2">
  
  
          <div className="row">
            <div className="col">
              <h2>All Users</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/admin/">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page"><small> All Users</small></li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active text-sm" aria-current="page"><small> Home</small></li>
                </ol>
              </nav>
              {/* <div className="card my-2">
                {errorMsg ? <>No data found</> : <table className='table table-bordered table-stripped'>
                  <thead className='bg-dark text-light'>
                    <tr>
                      <th>Sr No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    { loader ? <>{allUsersData}</>:<tr> <td colSpan="4">Loading....</td> </tr> }
                  </tbody>
                </table>}
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  };

  
 export default Admin;