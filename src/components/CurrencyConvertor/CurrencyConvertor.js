import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";

import CurrencyInput from "./CurrencyRow";

function App() {
    const [rates, setRates] = useState([]);
    const [fromAmount, setFromAmount] = useState(1);
    const [toAmount, setToAmount] = useState(1);
    const [fromRate, setFromRate] = useState('USD');
    const [toRate, setToRate] = useState('UAH');

    useEffect(() => {
        axios.get('http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284')
            .then(response => {
                console.log(response)
                setRates(response.data.rates);
            })
    }, []);

    useEffect(() => {
        if (!!rates) {
            function init() {
                handleFromAmountChange(1);
            }
            init();
        }
    }, [rates]);

    function format(number) {
        return number.toFixed(2)
    }

    function handleFromAmountChange(fromAmount) {
        setToAmount(format(fromAmount * rates[toRate] / rates[fromRate]));
        setFromAmount(fromAmount);
    }

    function handleFromRateChange(fromRate) {
        setToAmount(format(fromAmount * rates[toRate] / rates[fromRate]));
        setFromRate(fromRate);
    }

    function handleToAmountChange(toAmount) {
        setFromAmount(format(toAmount * rates[fromRate] / rates[toRate]));
        setToAmount(toAmount);
    }

    function handleToRateChange(toRate) {
        setFromAmount(format(toAmount * rates[fromRate] / rates[toRate]));
        setToRate(toRate);
    }


    return (
        <Fragment>
            <CurrencyInput
                onAmountChange={handleFromAmountChange}
                onRateChange={handleFromRateChange}
                rates={Object.keys(rates)}
                amount={fromAmount}
                currency={fromRate} />
            <CurrencyInput
                onAmountChange={handleToAmountChange}
                onRateChange={handleToRateChange}
                rates={Object.keys(rates)}
                amount={toAmount}
                currency={toRate} />
        </Fragment>
    );
}

export default App;
