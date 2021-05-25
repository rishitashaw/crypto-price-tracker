import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Coin from "../Components/Coins";
import CoinList from "../Components/Coins/CoinList";
import Layout from "../Components/Layout";
import Logo from "../Components/Logo";
import SearchBar from "../Components/Search-bar";

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState("");

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />

        <footer>Made with ♥ by Rishita</footer>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  );
  const filteredCoins = await res.json();

  if (!filteredCoins) {
    return {
      notFound: true,
    };
  }

  return {
    props: { filteredCoins }, // will be passed to the page component as props
  };
}
