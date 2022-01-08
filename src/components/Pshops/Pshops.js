import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Pshop from "./Pshop/Pshop";

export default function Pshops() {
  const shop = useSelector((state) => state.shop);
  let ps = [];
  if (shop.length !== 0) {
    ps = shop.filter((pshop) => pshop.shopType === "plumbing");
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Pshop PshopsObj={ps} />
    </>
  );
}
