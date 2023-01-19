import { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';
import axios from 'axios'


function CurrencyConverter() {
    const [isSellingRate, setSellingRate] = useState(false);
    const [currencies, setCurrencies] = useState([])
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [enteredAmount, setEnteredAmount] = useState(1);
    const [secondInputChanged, setSecondInputChanged] = useState(false);
    const [fromExchangeRate, setFromExchangeRate] = useState()
    const [toExchangeRate, setToExchangeRate] = useState()
    const [fromAmount, setFromAmount] = useState(0)
    const [toAmount, setToAmount] = useState(0)
    const [fromCountryLetters, setFromCountryLetters] = useState('')
    const [toCountryLetters, setToCountryLetters] = useState('')
    // const [buyingRate, setBuyingRate] = useState(false)

    useEffect(() => {
        axios.get("https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343").then((res) => {
            setCurrencies((res.data.fx).filter((currency) =>
                currency.exchangeRate))
        })
    }, []);

    // useEffect(() => {
    //     console.log('test ');
    //     rerender()
    // }, [isSellingRate]);

    // function rerender() {
    //     setFromCurrency('')
    //     setFromExchangeRate('')
    //     setToCurrency('')
    //     setFromAmount('')
    //     console.log(fromCurrency)
    // }
    // function changeToSellingRate() {
    //     setSellingRate(true)
    // }
    // function changeToBuyingRate() {
    //     setSellingRate(false)
    // }

    function selectingFromCurrency(event) {
        const selectedCurrency = event.target.value;
        const slicing = currencies[selectedCurrency].currency.toLowerCase().slice(0, 2);
        setFromCountryLetters(slicing)
        // if (!isSellingRate) {
        setFromCurrency(currencies[selectedCurrency].exchangeRate.buy)
        setFromExchangeRate(currencies[selectedCurrency].exchangeRate.buy)
        // } else {
        //     setFromCurrency(currencies[selectedCurrency].exchangeRate.sell)
        //     setFromExchangeRate(currencies[selectedCurrency].exchangeRate.sell)
        // }
        setToAmount('')
        setFromAmount('')
    }

    function selectingToCurrency(event) {
        const selectedCurrency = event.target.value;
        const slicing = currencies[selectedCurrency].currency.toLowerCase().slice(0, 2);
        setToCountryLetters(slicing)
        setToCurrency(selectedCurrency)
        // if (!isSellingRate) {
        setToExchangeRate(currencies[selectedCurrency].exchangeRate.buy)
        // } else {
        //     setToExchangeRate(currencies[selectedCurrency].exchangeRate.sell)
        // }
        setToAmount('')
        setFromAmount('')
    }


    function handleFromInput(event) {
        setFromAmount(event.target.value)
        console.log(fromAmount)
        if (fromExchangeRate !== toExchangeRate) {
            setToAmount(event.target.value * fromExchangeRate / toExchangeRate)
        } else if (fromExchangeRate == toExchangeRate) {
            setToAmount(event.target.value)
        }

    }


    function handleToInput(event) {
        setToAmount(event.target.value)
        if (fromExchangeRate !== toExchangeRate) {
            setFromAmount(event.target.value * toExchangeRate / fromExchangeRate)
        } else if (fromExchangeRate == toExchangeRate) {
            setFromAmount(event.target.value)
        }

    }

    return (
        <>

            <section className='Currency_Converter_Container p-5' id='converter'>
                <div class="d-flex container text-center width100" >
                    <div className='row width100' >
                        <div className='col-2' >  </div>
                        <div className='d-flex flex-column justify-content-center col-8 border rounded p-5 backgroundWhite'  >
                            <h2 class="text-center underline mb-5" > Currency Converter - Buying Rates</h2>
                            {/* <h5 className='pt-1  purpleColor'> Buying Rates : </h5> */}
                            {/* <div className='p-3'>
                                <button type="button" class="btn btn-outline-secondary " onClick={changeToSellingRate}
                                    style={{
                                        backgroundColor: isSellingRate ? '#572bd9' : 'white',
                                        border: isSellingRate ? 'solid 2px white' : 'solid 2px #959597',
                                        color: isSellingRate ? 'white' : '#959597',
                                        fontWeight: isSellingRate ? 'bolder' : 'normal',
                                    }}>Selling Rate </button>
                                <button type="button" class="btn btn-outline-secondary ms-3 " onClick={changeToBuyingRate}
                                    style={{
                                        backgroundColor: isSellingRate ? 'white' : '#572bd9',
                                        border: isSellingRate ? 'solid 2px #959597' : 'solid 2px white',
                                        color: isSellingRate ? ' #959597' : 'white',
                                        fontWeight: isSellingRate ? 'normal' : 'bolder',
                                    }}>Buying Rate </button>
                            </div> */}

                            <div>
                                <CurrencyInput
                                    convert={fromAmount}
                                    currencies={currencies}
                                    mainCurrency={fromCurrency}
                                    selecting={selectingFromCurrency}
                                    rate={fromExchangeRate}
                                    onchange={handleFromInput}
                                    sliced={fromCountryLetters}
                                />


                                <CurrencyInput
                                    convert={toAmount}
                                    currencies={currencies}
                                    mainCurrency={toCurrency}
                                    selecting={selectingToCurrency}
                                    rate={toExchangeRate}
                                    onchange={handleToInput}
                                    sliced={toCountryLetters}
                                />
                            </div>

                        </div>
                        <div className='col-2'>  </div>
                    </div>
                </div>
            </section >



        </>
    )
}
export default CurrencyConverter; 