import Coin from "./index";
import Link from "next/link";

export default function CoinList({ filteredCoins }) {
  return (
    <>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            src={coin.image}
            current_price={coin.current_price}
            market_cap={coin.market_cap}
            market_cap_rank={coin.market_cap_rank}
            fully_diluted_valuation={coin.fully_diluted_valuation}
            total_volume={coin.total_volume}
            high_24h={coin.high_24h}
            low_24h={coin.low_24h}
            price_change_24h={coin.price_change_24h}
            price_change_percentage_24h={coin.price_change_percentage_24h}
            market_cap_change_24h={coin.market_cap_change}
            market_cap_change_percentage_24h={
              coin.market_cap_change_percentage_24h
            }
            circulating_supply={coin.circulating_supply}
            total_supply={coin.total_supply}
            max_supply={coin.max_supply}
          />
        );
      })}
    </>
  );
}
