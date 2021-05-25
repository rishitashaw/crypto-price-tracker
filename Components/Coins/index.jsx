import styles from "./coin.module.css";

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
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={src} alt={name} className={styles.coin_img} />
          <h1 className={styles.coin_h1}>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>₹ {current_price}</p>
          <p className={styles.coin_volume}>
            ₹ {total_volume.toLocaleString()}
          </p>
          {price_change_24h < 0 ? (
            <p className={(styles.coin_percent, styles.red)}>
              {price_change_percentage_24h} %
            </p>
          ) : (
            <p className={(styles.coin_percent, styles.green)}>
              {price_change_percentage_24h} %
            </p>
          )}

          <p className="market_cap">Mkt Cap: ₹{market_cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
