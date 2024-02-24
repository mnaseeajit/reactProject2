import React from "react";

const Tablerow = ({coin}) => {
     return (
        <tr key={coin.id}>
            <td><img className="img1" src={coin.image} alt={coin.name} ></img></td>
              <td>${coin.name}</td>
             
              <td>${coin.symbol}</td>
             
              <td>$${coin.current_price}</td>
              <td>$${coin.total_supply}</td>
              <td>${coin.market_cap_change_percentage_24h}</td>
              <td>Mkt cap: $${coin.total_volume}</td>
        </tr>
     )
}

export default Tablerow;