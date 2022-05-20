import React, { useState } from "react";
import "./Chart.scss";
import Chart from "react-apexcharts";
import Loader from "../Loader";
import { useMoralis } from "react-moralis";

const Charts = () => {
  const { Moralis } = useMoralis();
  const data = {
    options: {
      chart: {
        id: "basic-bar",
        type: "line",
      },
      yaxis: [
        {
          title: {
            text: "Series A",
          },
        },
        {
          opposite: true,
          title: {
            text: "Series B",
          },
        },
      ],
      xaxis: {
        categories: [1, 2, 3, 4, 10, 100, 200, 400, 500, 100],
      },
    },
    series: [
      {
        name: "series-A",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100, 120],
      },
      {
        name: "series-B",
        data: [1, 2, 5, 2, 9, 10, 2, 10, 0, 1],
      },
    ],
  };

  const [isLoading, setIsLoading] = useState(false);
  const [chain, setChain] = useState("btc");
  const [address, setAddress] = useState("");
  const [days, setDays] = useState(1);

  const [results, setResults] = useState([]);

  const handleExecute = async (e) => {
    e.preventDefault();
    const data = { chain, address, days };

    const dates = Array(Number(days))
      .fill()
      .map((e, i) => {
        const dateOffset = 24 * 60 * 60 * 1000 * i; //5 days
        let myDate = new Date();
        myDate.setTime(myDate.getTime() - dateOffset);
        return myDate.toISOString().split("T")[0];
      });

    const blocks = await Promise.all(
      dates.map(async (e, i) => {
        const res = await Moralis.Web3API.native.getDateToBlock({ date: e });
        return res.block;
      })
    );

    const prices = await Promise.all(
      blocks.map(async (e, i) => {
        return await Moralis.Web3API.token.getTokenPrice({
          address: address,
          to_block: e,
        });
      })
    );

    console.log("PRICES : ", prices);
  };

  return (
    <div className="cart-container">
      <form action="" onSubmit={handleExecute} className="form">
        <div className="input-wrapper">
          <select
            className="input"
            value={chain}
            onChange={(e) => setChain(e.target.value)}
          >
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </select>
        </div>
        <div className="input-wrapper">
          <input
            placeholder="0x00"
            type="text"
            className="input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            placeholder="days"
            type="number"
            className="input"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <button type="submit">Execute</button>
        </div>
      </form>
      <div className="cart-wrapper">
        {isLoading && <Loader />}
        <Chart
          options={data.options}
          series={data.series}
          width="100%"
          height="100%"
          type="line"
        />
      </div>
    </div>
  );
};

export default Charts;
