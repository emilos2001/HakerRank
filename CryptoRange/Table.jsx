import { useMemo } from "react";
import { cryptocurrencyList } from "./CryptoList.js";
import './style.css';

export default function Table({ coins, error, availableBalance }) {
    const rows = useMemo(() => {
        return cryptocurrencyList.map((cryptocurrency) => {
            const isInvalid = error || !coins || coins > availableBalance;
            const value = isInvalid ? "n/a"
                : (cryptocurrency.rate * coins).toFixed(8);
            return { ...cryptocurrency, value };
        });
    }, [coins, error, availableBalance]);

    return (
        <div className="table">
            <table className="table-head">
                <thead>
                <tr>
                    <th>Cryptocurrency</th>
                    <th>Exchange Rate</th>
                    <th>Number of Coins</th>
                </tr>
                </thead>
                <tbody data-testid="exchange-data">
                {rows.map((cryptocurrency) => (
                    <tr key={cryptocurrency.code}>
                        <td>{cryptocurrency.name}</td>
                        <td>1 USD = {cryptocurrency.rate} {cryptocurrency.code}</td>
                        <td>{cryptocurrency.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}