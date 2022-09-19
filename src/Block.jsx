import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';



const Block = ({value, currency, onChangeValue, onChangeCurrency}) => {

  const defaultCurrencies = ['UAH', 'USD', 'EUR', 'RUB'];
  const [inputValue, setInputValue] = useState(0)

  return (
    <div className='block'>
      <ul className='currencies'>
        {defaultCurrencies.map((curr)=>(
            <li
            onClick={()=>{onChangeCurrency(curr); console.log(curr)}}
            className={currency === curr ? 'active' : ''}
            key={curr} >{curr}</li>
        ))}
        <li>
        <i className="gg-select-o"></i>
        </li>
      </ul>
      <input onChange={(event)=> {onChangeValue(event.target.value)}}
        value={value}
        type="number"
        placeholder={0} />
    </div>
  )
}

export {Block}
