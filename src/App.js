
import './index.scss';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Block} from "./Block"

function App() {

  const [exchange, setExchange] = useState([])
  const [firstValue, setFirstValue] = useState('UAH')
  const [secondValue, setSecondValue] = useState('USD')
  const [firstChange, setFirstChange] = useState()
  const [secondChange, setSecondChange] = useState()


  useEffect(()=>{
    getExchange()
    console.log(exchange)
  }, [])
  
function firstHandleChange (value) {
  let firstCurrency = 1;
  let secondCurrency = 1;
  if (firstValue === 'UAH') {firstCurrency = 1} else
  {firstCurrency = exchange.filter((element)=>{return (element.cc===firstValue)})[0].rate};
  
  if (secondValue === 'UAH') {secondCurrency = 1} else
  {secondCurrency = exchange.filter((element)=>{return (element.cc===secondValue)})[0].rate};
  

  const price = value * firstCurrency;
  console.log('1 currency ' + firstCurrency)
  console.log('2 currency ' + secondCurrency)
  console.log(price)
  const result = price / secondCurrency

  setFirstChange(value)
  setSecondChange(result)
}

function secondHandleChange (value) {
  let firstCurrency = 1;
  let secondCurrency = 1;
  if (firstValue === 'UAH') {firstCurrency = 1} else
  {firstCurrency = exchange.filter((element)=>{return (element.cc===firstValue)})[0].rate};
  
  if (secondValue === 'UAH') {secondCurrency = 1} else
  {secondCurrency = exchange.filter((element)=>{return (element.cc===secondValue)})[0].rate};
  

  const price = value * secondCurrency ;
  console.log('1 currency ' + firstCurrency)
  console.log('2 currency ' + secondCurrency)
  console.log(price)
  const result = price / firstCurrency

  setFirstChange(result)
  setSecondChange(value)
}


  async function getExchange() {
    const response = await
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      setExchange(data)
      console.log(exchange)
    })
    .catch((err) => {
      console.warn(err);
      alert("Не удалось получить информацию с сервера НБУ")
    })
    return await response
  }

  return (
    <div className="App">
      <Block value={firstChange} currency={firstValue} onChangeCurrency={setFirstValue} onChangeValue={firstHandleChange}/>
      <div className='buttonContainer'>
        <button className='toRight' onClick={()=>{firstHandleChange(firstChange)}}> <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                                    width="20.000000pt" height="20.000000pt" viewBox="0 0 24.000000 24.000000"
                                                                    preserveAspectRatio="xMidYMid meet">

                                                                    <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                                                                    fill="#000000" stroke="none">
                                                                    <path d="M0 202 c0 -5 13 -21 30 -37 17 -16 30 -36 30 -45 0 -9 -13 -29 -30
                                                                    -45 -37 -36 -38 -45 -2 -45 30 0 102 64 102 91 0 26 -73 89 -103 89 -15 0 -27
                                                                    -4 -27 -8z"/>
                                                                    <path d="M110 198 c0 -7 14 -27 32 -45 l32 -33 -32 -33 c-39 -40 -41 -57 -4
                                                                    -57 19 1 37 13 65 45 l38 45 -38 45 c-28 32 -46 44 -65 45 -16 0 -28 -5 -28
                                                                    -12z"/>
                                                                    </g>
                                                                    </svg> </button>
        <button className='toLeft' onClick={()=>{secondHandleChange(secondChange)}}> <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                                    width="20.000000pt" height="20.000000pt" viewBox="0 0 24.000000 24.000000"
                                                                    preserveAspectRatio="xMidYMid meet">

                                                                    <g transform="translate(24.000000,0.000000) scale(0.100000,-0.100000) rotate(180)"
                                                                    fill="#000000" stroke="none">
                                                                    <path d="M0 202 c0 -5 13 -21 30 -37 17 -16 30 -36 30 -45 0 -9 -13 -29 -30
                                                                    -45 -37 -36 -38 -45 -2 -45 30 0 102 64 102 91 0 26 -73 89 -103 89 -15 0 -27
                                                                    -4 -27 -8z"/>
                                                                    <path d="M110 198 c0 -7 14 -27 32 -45 l32 -33 -32 -33 c-39 -40 -41 -57 -4
                                                                    -57 19 1 37 13 65 45 l38 45 -38 45 c-28 32 -46 44 -65 45 -16 0 -28 -5 -28
                                                                    -12z"/>
                                                                    </g>
                                                                    </svg> </button>
      </div>
      <Block value={secondChange} currency={secondValue} onChangeCurrency={setSecondValue} onChangeValue={secondHandleChange}/>
    </div>
  );
}

export default App;
