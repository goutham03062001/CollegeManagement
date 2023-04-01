import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='container my-5 form-ctn'>
        <div className='row py-5'>
        <h3 className='text-center text-muted'>REACH OUT US</h3>
        <div className='col-lg-12 col-12 col-sm-12 col-md-12 mt-5 contact-form'>
            <form>
            <div className="form-group my-3">
            <input type="text" className='form-control' placeholder='Enter your name'/>
            </div>
            <div className="form-group my-3">
            <input type="text" className='form-control' placeholder='Enter your email'/>
            </div>
            <div className="form-group my-3">
            <input type="text" className='form-control' placeholder='Write your query'/>
            <button className='btn btn-md btn-success my-3 px-5'>send</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact