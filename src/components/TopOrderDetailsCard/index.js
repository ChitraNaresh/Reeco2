import { HiOutlineArrowSmRight } from "react-icons/hi";
import "./index.css";

import React from "react";

const TopOrderDetailsCard = (props) => {
  const { handleApproved } = props;
  const onApprovedBtn = () => {
    handleApproved();
  };
  return (
    <div className="top-order-container">
      <div className="order-detals-at-top">
        <div className="orders-order-card">
          <p className="top-orders-left-text">Orders</p>
          <HiOutlineArrowSmRight className="top-order-arrow" />
          <p className="top-orders-id">Order 32457ABC</p>
        </div>
        <div className="ask-approve-top-card">
          <h1 className="top-orders-man-id">Order 32457ABC</h1>
          <div className="back-approve-btns">
            <button type="button" className="back-button">
              Back
            </button>
            <button
              type="button"
              className="approve-btn"
              onClick={onApprovedBtn}
            >
              Approve Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOrderDetailsCard;
