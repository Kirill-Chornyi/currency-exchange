import React from 'react'

const defaultCurrencies = ['UAH', 'USD', 'EUR', 'GBP'];

const Block = ({value, currency, onChangeValue, onChangeCurrency}) => {
  return (
    <div className='block'>
      <ul className='currencies'>
        {defaultCurrencies.map((curr)=>(
            <li
            onClick={()=>{onChangeCurrency(curr)}}
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
