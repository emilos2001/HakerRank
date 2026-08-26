import Table from "./Table.jsx"
import {useState} from "react";

export default function App() {
    const amountMessages = {
        numberOfCoins: 0.00000000,
        availableBalance: 17042.67,
        amountMandatory: 0.01
    };


    const errorMessages = {
        emptyErrorMsg: "Amount cannot be empty",
        amountError: `Amount cannot be less than ${amountMessages.amountMandatory}`,
        amountEnoughError: 'Amount cannot exceed the available balance'
    };

    const [value, setValue] = useState('');
    const [error, setError] = useState(undefined);

    const handleChange = (e) => {
        const rawValue = e.target.value;
        const numericValue = Number(rawValue);
        setValue(rawValue);
        if (rawValue.trim() === "") {
            setError(errorMessages.emptyErrorMsg);
            return;
        }
        if (numericValue < amountMessages.amountMandatory) {
            setError(errorMessages.amountError);
            return;
        }
        if (numericValue > amountMessages.availableBalance) {
            setError(errorMessages.amountEnoughError);
            return;
        }
        setError(undefined);
    };

    return (
        <div className='App'>
            <h1>CryptoRank Exchange</h1>
            <section>
                <div className='App-inputs'>
                    <label>
                        I want to exchange $
                        <input
                            className='input'
                            data-testid="amount-input"
                            type="number"
                            placeholder="USD"
                            value={value}
                            onChange={handleChange}
                        /> of my $
                        <span>{amountMessages.availableBalance}</span>:
                    </label>
                    {error && (
                        <p data-testid="error" className='error-message'>
                            {error}
                        </p>
                    )}
                </div>
            </section>
            <Table coins={Number(value)} errors={error} numOfCoins={amountMessages.availableBalance}/>
        </div>
    );
}