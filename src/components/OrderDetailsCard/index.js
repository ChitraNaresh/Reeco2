import "./index.css";
import { CiApple } from "react-icons/ci";
import { GiGrapes, GiPineapple, GiOrange, GiStrawberry } from "react-icons/gi";
import { TbCherry } from "react-icons/tb";

import React from "react";

const OrderDetailsCard = () => {
  return (
    <div claassName="order-details-card">
      <div className="about-cart-details">
        <div className="order-dtails-content">
          <div className="supplier-card">
            <p className="each-supplier-card-name">Supplier</p>
            <h1 className="each-supplier-card-heading">
              East coast fruits & Vegetables
            </h1>
          </div>
          <div className="supplier-card">
            <p className="each-supplier-card-name">Shipping date</p>
            <h1 className="each-supplier-card-heading">Thu, Feb 10</h1>
          </div>
          <div className="supplier-card">
            <p className="each-supplier-card-name">Total</p>
            <h1 className="each-supplier-card-heading">1200 Rs</h1>
          </div>
          <div className="supplier-card">
            <p className="each-supplier-card-name">Category</p>
            <div className="all-categories">
              <CiApple className="each-fruit-icon" />
              <GiOrange className="each-fruit-icon" />
              <GiStrawberry className="each-fruit-icon" />
              <TbCherry className="each-fruit-icon" />
              <GiPineapple className="each-fruit-icon" />
              <GiGrapes className="each-fruit-icon" />
            </div>
          </div>
          <div className="supplier-card">
            <p className="each-supplier-card-name">Department</p>
            <h1 className="each-supplier-card-heading">300-444-678</h1>
          </div>
          <div className="supplier-card">
            <p className="each-supplier-card-name">Status</p>
            <h1 className="each-supplier-card-heading">
              Awaiting your approve!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
