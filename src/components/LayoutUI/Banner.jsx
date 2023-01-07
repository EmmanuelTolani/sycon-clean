import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <Link href={"/services"}>20% off your first clean! Claim Now!</Link>
      </div>
    </div>
  );
};

export default Banner;
