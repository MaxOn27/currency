import React from "react";

function CurrencyInput(props) {

    const {rates, amount, onAmountChange, onRateChange, rate} = props;

    return (
        <div className="group">
            <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
            <select value={props.currency} onChange={ev => props.onRateChange(ev.target.value)}>
                {props.rates.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    );
}

export default CurrencyInput;