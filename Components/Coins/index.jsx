import "./coin.module.css";

export default function Coin({
  name,
  src,
  symbol,
  current_price,
  total_volume,
  market_cap,
  price_change_24h,
  price_change_percentage_24h,
}) {
  return (
    <div className="coin_container">
      <div className="coin_row">
        <div className="coin">
          <img src={src} alt={name} />
          <h1 className="coin_h1">{name}</h1>
          <p className="coin_symbol">{symbol}</p>
        </div>
        <div className="coin_data">
          <p className="coin_price">₹ {current_price}</p>
          <p className="coin_volume">₹ {total_volume.toLocaleString()}</p>
          {price_change_24h < 0 ? (
            <p className="coin_percent red">{price_change_percentage_24h} %</p>
          ) : (
            <p className="coin_percent green">
              {price_change_percentage_24h} %
            </p>
          )}

          <p className="market_cap">Mkt Cap: ₹{market_cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
