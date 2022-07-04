import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";

import CurrencyInput from "./CurrencyRow";

const BASE_URL = 'http://data.fixer.io/api/latest?access_key=106ab470d06b4c14d00c10f864ef62b6';

function App() {
    const [rates, setRates] = useState([]);
    const [fromAmount, setFromAmount] = useState(1);
    const [toAmount, setToAmount] = useState(1);
    const [fromRate, setFromRate] = useState('USD');
    const [toRate, setToRate] = useState('UAH');

    useEffect(() => {
        axios.get(BASE_URL)
            .then(response => {
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

    function handleFromAmountChange(fromAmount) {
        setToAmount((fromAmount * rates[toRate] / rates[fromRate]).toFixed(2));
        setFromAmount(fromAmount);
    }

    function handleFromRateChange(fromRate) {
        setToAmount((fromAmount * rates[toRate] / rates[fromRate]).toFixed(2));
        setFromRate(fromRate);
    }

    function handleToAmountChange(toAmount) {
        setFromAmount((toAmount * rates[fromRate] / rates[toRate]).toFixed(2));
        setToAmount(toAmount);
    }

    function handleToRateChange(toRate) {
        setFromAmount((toAmount * rates[fromRate] / rates[toRate]).toFixed(2));
        setToRate(toRate);
    }


    return (
        <Fragment>
                <CurrencyInput
                    rates={Object.keys(rates)}
                    amount={fromAmount}
                    rate={fromRate} />
                    onAmountChange={handleFromAmountChange}
                    onRateChange={handleFromRateChange}
                <CurrencyInput
                    rates={Object.keys(rates)}
                    amount={toAmount}
                    rate={toRate} />
                    onAmountChange={handleToAmountChange}
                    onRateChange={handleToRateChange}
        </Fragment>
    );
}

export default App;
