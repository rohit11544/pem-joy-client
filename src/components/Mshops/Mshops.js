import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Mshop from "./Mshop/Mshop";

export default function Mshops() {
  const shop = useSelector((state) => state.shop);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Mshop
        MshopsObj={shop.filter((mshop) => mshop.shopType === "mechanic")}
      />
    </>
  );
}
