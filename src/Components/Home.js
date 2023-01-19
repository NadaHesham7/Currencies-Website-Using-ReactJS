import { useState } from 'react';
import Footer from './Footer';
import CurrencyConverter from './CurrencyConverter';
import CurrencyExchangeRates from './CurrencyExchangeRates';
import MainBanner from './MainBanner';
import FAQs from './FAQs';
import BreakSection from './BreakSection';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';


function Home() {


    return (
        <>

            <nav class="navbar sticky-top navbar-styling" >
                <div class="container" >


                    <div class="row width100" >


                        <div className='col-4' >
                            <span class="navbar mb-0 h1 currency-logo">Currencies Website</span>
                        </div>

                        <div className='col-8 ps-5'>
                            <ul class="nav">
                                <li class="scroll-to-section ps-5 pt-2">
                                    <Link to='#top' className='nav-links'> <a href="#Top" className="active nav-buttons" >Home</a> </Link></li>
                                <li class="scroll-to-section ps-5 pt-2">
                                    <Link to='#ExchangeRates' className='nav-links'> <a className="nav-buttons" > Currency Exchange Rates</a> </Link></li>
                                <li class="scroll-to-section ps-5 pt-2" >
                                    <Link to="#converter" className='nav-links'><a href="#Currency_Converter" className="nav-buttons">Currency Converter</a> </Link></li>
                                <li class="scroll-to-section ps-5 pt-2">
                                    <Link to='#Subscribe' className='nav-links'><a className="nav-buttons">Subscribe</a>  </Link></li>
                                <li class="scroll-to-section ps-5 pt-2">
                                    <Link to='#FAQs' className='nav-links'> <a href="#FAQs" className="nav-buttons">FAQs</a> </Link></li>

                            </ul>
                        </div>

                    </div>


                </div >
            </nav >


            <MainBanner />
            <CurrencyExchangeRates />
            <BreakSection />
            <CurrencyConverter />
            <FAQs />
            <Footer />




        </>)
}
export default Home;