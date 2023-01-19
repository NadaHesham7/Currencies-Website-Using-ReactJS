import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'

function CurrencyExchangeRates() {
    let numbers = 0;
    const [currencies, setCurrencies] = useState("");
    const [search, setSearch] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();
    const searchWord = searchParams.get('currencySearch') || '';
    const [numberOfSlice, setNumberOfSlice] = useState(16)
    const [hideSeeMore, setHideSeeMore] = useState(false)

    function handlingApi() {
        axios.get("https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343").then((res) => {
            setCurrencies(res.data.fx)
            console.log(res.data.fx)
        })
    }

    useEffect(() => {
        handlingApi()
    }, []);


    function searching(event) {
        const currencySearch = event.target.value;
        if (currencySearch) {
            setSearchParams({ currencySearch })
        } else {
            setSearchParams({})
        }
    }


    function handleSeeMore() {
        if (numberOfSlice < 178) {
            setNumberOfSlice(numberOfSlice + 54)
            if (numberOfSlice > 100) {
                setNumberOfSlice(178)
                setHideSeeMore(true)
            }
        }
    }
    function handleSeeLess() {
        setNumberOfSlice(16)
        setHideSeeMore(false)
    }

    return (
        <>
            <section className='Currency_Exchange_Container p-5' id='ExchangeRates'>
                <div class="d-flex container text-center width100" >
                    <div className='row width100' >

                        <div className='col-2' >  </div>
                        <div className='d-flex flex-column justify-content-center col-8 border rounded p-4 backgroundWhite' >
                            <h2 class="text-center pb-4 underline"> Currency Exchange Rate to EUR </h2>
                            <div className='container mb-3'>
                                <div className='row'>
                                    <div className='col-4'><div class="input-group">
                                    </div> </div>
                                    <div className='col-4'>  </div>
                                    <div className='col-4'> <div class="input-group">
                                        <input type="search" onChange={searching}
                                            value={searchWord} placeholder="Search By Currency"
                                            class="form-control" aria-label="searching" />
                                    </div> </div>
                                </div>
                            </div>

                            <table class="table border">
                                <thead>
                                    <tr >
                                        <th scope="col" className='tableHeaders' >#</th>
                                        <th scope="col" className='tableHeaders'>Flag  </th>
                                        <th scope="col" className='tableHeaders'>Currency   </th>
                                        <th scope="col" className='tableHeaders'>Currency Name</th>
                                        <th scope="col">Exchange Rate (buy) </th>
                                        <th scope="col">Exchange Rate (sell)</th>
                                        <th scope="col">Bank Rate (buy) </th>
                                        <th scope="col">Bank Rate (Sell) </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currencies && currencies.filter((currency) => currency.currency?.toLowerCase().includes(searchWord.toLowerCase()))
                                        .slice(0, numberOfSlice)
                                        .map((currency) => {
                                            const flag = currency.currency.toLowerCase().slice(0, 2);
                                            const flagImg = `../assets/flags/${flag}.png`
                                            return (
                                                <>
                                                    {currency.exchangeRate
                                                        && <tr className='a-full-row'>
                                                            <td>{numbers += 1}</td>
                                                            <th scope="row">{currency.flags &&
                                                                <img className='flag' src={flagImg} alt="" />
                                                            } </th>
                                                            <td class='selected'>{currency.currency}</td>
                                                            <td>{currency.nameI18N && currency.nameI18N}</td>
                                                            <td>{currency.exchangeRate && currency.exchangeRate.buy}</td>
                                                            <td>{currency.exchangeRate && currency.exchangeRate.sell}</td>
                                                            <td>{currency.banknoteRate && currency.banknoteRate.buy} </td>
                                                            <td>{currency.banknoteRate && currency.banknoteRate.sell} </td>
                                                        </tr>}
                                                </>)
                                        })}
                                </tbody>
                            </table>
                            {!hideSeeMore && <button className='see-more-button' onClick={handleSeeMore}> <h5> See More...</h5> </button>}
                            {hideSeeMore && <button className='see-more-button' onClick={handleSeeLess}> <h5> See Less...</h5> </button>}
                        </div>
                        <div className='col-2'>  </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default CurrencyExchangeRates;


