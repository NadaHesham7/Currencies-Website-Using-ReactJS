import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
function MainBanner() {


    return (
        <>


            <section class="main-banner width100 " id="Top" >
                <div class="container width100">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="header-text">
                                <h6>Welcome to Our Website</h6>
                                <h2>Best Place To Know About <em>Currency!</em></h2>
                                <div class="main-button-gradient">
                                    <div className=''>
                                        <Link to='#converter' className='mainBanner-links'> <button type="button" class="main-banner-button btn ps-5 pe-5"
                                        >Currency Converter </button> </Link>
                                        <Link to='#ExchangeRates' className='mainBanner-links' ><button type="button" class="main-banner-button btn ms-3 ps-5 pe-5"
                                        > Currency Exchange Rates </button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="">
                                <img src='https://img.freepik.com/free-vector/currency-exchange-service-monetary-transfer-changing-dollar-euro-buying-selling-foreign-money-golden-coins-with-eu-us-currency-symbols-vector-isolated-concept-metaphor-illustration_335657-2818.jpg?w=740&t=st=1672833863~exp=1672834463~hmac=ab918aacec02ad2ed1712a9bc42685525416fe4541461498e3fcfab3bdd91580' alt='a picture of currencies' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='width100'>  </div>

        </>
    )
}
export default MainBanner;