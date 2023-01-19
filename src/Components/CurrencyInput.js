import React, { useState, useEffect } from 'react';
import Inputs from './Inputs'

function CurrencyInput(props) {

    return (
        <>

            <div class="input-group mb-3 ">
                <div className='inputFlagDiv me-2'> <img className='inputFlag' src={`../assets/flags/${props.sliced}.png`} alt="" /> </div>
                <select className='selectStyle' defaultValue='' onChange={props.selecting}>
                    <option>Currency</option>
                    {props.currencies && props.currencies.map((currency, index) => {
                        const flagImg = '../assets/flags/ae.png'
                        return (
                            <>
                                {currency.exchangeRate && <Inputs key={index} id={index} value={index} theCurrency={currency.currency} />
                                }
                            </>
                        )
                    })}
                </select>
                <input type="number" class="form-control input-converter" aria-label="Text input with dropdown button"
                    placeholder={props.convert} onChange={props.onchange} value={props.convert}
                />

            </div>

            <div >
            </div>
        </>
    )
}
export default CurrencyInput;