import { useState } from 'react';
import { Link } from 'react-router-dom'

function Error404() {


    return (
        <>
            <div className='error-main-container'>
                <nav class="navbar sticky-top navbar-styling" >
                    <div class="container" >
                        <div class="row width100" >
                            <div className='col-4' >
                                <span class="navbar mb-0 h1 currency-logo">Currencies Website</span>
                            </div>
                        </div>
                    </div >
                </nav >

                <section className='error-section p-5'>

                    <div class="d-flex container text-center width100" >
                        <div className='row width100' >


                            <div className='col-2' >  </div>
                            <div className='d-flex flex-column justify-content-center col-8 border rounded p-5 backgroundWhite'  >
                                <h1>  404 </h1>
                                <div className='p-3'>
                                    <h1> Page Not Found : </h1>
                                </div>
                                <Link to='/' className='link-button'> <button className='error-button'>Go Back Home </button></Link>
                            </div>
                            <div className='col-2'>
                            </div>
                        </div>
                    </div>
                </section >

            </div>

        </>
    )
}
export default Error404; 