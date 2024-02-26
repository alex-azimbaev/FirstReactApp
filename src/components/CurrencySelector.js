import React, {useState, useContext} from "react";
import { AppContext } from "../context/AppContext";
import '../styles/CurrencySelector.css';

const CurrencySelector =() => {
    const {dispatch} = useContext(AppContext);
    const [currency, setCurrency] = useState('Pound');
   // const [surrencySymbol, setCurrencySymbol] = useState('£');

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
   //     setCurrencySymbol(event.target.value)

        const selectOptionText = event.target.options[event.target.selectedIndex].text;
        const symbol = selectOptionText.split('')[0];
        const code = event.target.value;
//        console.log(symbol);
//        console.log(code);
//        console.log(selectOptionText);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: {code, symbol}
        });
    }

    return (
        <div className="currency-selector">
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="Dollar">$ Dollar</option>
                <option value="Pound">£ Pound</option>
                <option value="Euro">€ Euro</option>
                <option value="Rupee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;