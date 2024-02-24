

import Tablerow from "./Coinrow";
import { useEffect, useState } from "react";

const Tabledata = () => {
     const [coinData , setCoinData] = useState([]);

     useEffect(() => {
         const fetchData = async () => {
            try {
                const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
                const data = await response.json();
                console.log(data);
                setCoinData(data);
            } catch(error) {
                console.log("Error fetching data", error);
            }
         };

         fetchData();
     },[]);

     return (
        <div>
            <h2>Coin List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Current Price</th>
                        <th>Total Supply</th>
                        <th>Percentage</th>
                        <th>Total Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {coinData && coinData.map((coin) => (
                        <Tablerow key={coin.id} coin={coin} />
                    ))}
                </tbody>
            </table>
        </div>
     )
}

export default Tabledata;
