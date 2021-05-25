import React from "react";
import Layout from "../../Components/Layout";
import styles from "./coin.module.css";

export default function Coin({ coin }) {
  return (
    <div className={styles.info}>
      <Layout>
        <h1>{coin.name}</h1>
        <h3>{coin.market_cap_rank}</h3>
        <p>{coin.symbol}</p>
        <img src={coin.image.large} alt={coin.name} />

        <p>block time : {coin.block_time_in_minutes} min</p>

        <p>public notices : {coin.public_notices}</p>

        {/* <p>description: {coin.description.en}</p> */}

        <p>genesis date: {coin.genesis_date}</p>
        <p>
          sentiment votes up percentage :{coin.sentiment_votes_up_percentage}
        </p>
        <p>
          sentiment down up percentage :{coin.sentiment_votes_up_percentage}
        </p>
        <p>coingecko score: {coin.coingecko_score}</p>
        <p>coingecko rank: {coin.coingecko_rank}</p>
        <p>developer score : {coin.developer_score}</p>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();

  return { props: { coin: data } };
}
