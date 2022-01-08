import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Eshop from "./Eshop/Eshop";

export default function Eshops() {
  const shop = useSelector((state) => state.shop);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Eshop
        EshopsObj={shop.filter((eshop) => eshop.shopType === "electric")}
      />
    </>
  );
}
