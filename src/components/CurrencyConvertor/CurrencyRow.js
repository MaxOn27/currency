import React from "react";

function CurrencyInput(props) {

    const {rates, amount, onAmountChange, onRateChange, rate} = props;

    return (
        <div>
            <input type="number" value={amount} onChange={ev => onAmountChange(ev.target.value)} />
            <select value={rate} onChange={ev => onRateChange(ev.target.value)}>
                {rates.map((currency, index) => (
                    <option key={index} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyInput;