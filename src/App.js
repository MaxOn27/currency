import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign, faHryvniaSign, faDollar, faBitcoinSign, faPoundSign, faShekelSign, faYenSign } from '@fortawesome/free-solid-svg-icons'

import CurrencyConvertor from "./components/CurrencyConvertor/CurrencyConvertor";
import './App.css';

function App() {

  return (
    <div className="App">
        <main className="CurrencyConverter">
            <CurrencyConvertor/>
        </main>
        <FontAwesomeIcon icon={faEuroSign}  className="euro-sign"/>
        <FontAwesomeIcon icon={faBitcoinSign}  className="bitcoin-sign"/>
        <FontAwesomeIcon icon={faBitcoinSign}  className="bitcoin-sign"/>
        <FontAwesomeIcon icon={faDollar}  className="dollar-sign"/>
        <FontAwesomeIcon icon={faHryvniaSign}  className="hryvnia-sign"/>
        <FontAwesomeIcon icon={faPoundSign}  className="pound-sign"/>
        <FontAwesomeIcon icon={faShekelSign}  className="shekel-sign"/>
        <FontAwesomeIcon icon={faYenSign}  className="yen-sign"/>
    </div>
  );
}

export default App;
