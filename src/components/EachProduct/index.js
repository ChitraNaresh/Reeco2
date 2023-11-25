import { MdDone } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import "./index.css";
import { updateStatus } from "../../redux/productsArraySlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/popupAction";
import { useLocation } from "react-router-dom";

const EachProduct = ({ eachItem, customPopup, showMiniPopup }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const {
    Id,
    update,
    approved,
    actualPrice,
    productName,
    brand,
    imgUrl,
    price,
    reason,
    quantity,
    status,
  } = eachItem;
  const renderAppovedBtn = (typeOfBuy) => (
   
    <button type="button" className="approved-btn">
      {typeOfBuy}
    </button>
   
  );
  const renderBlockBtn = (typeOfBuy) => (
    <button type="button" className="block-btn">
      {typeOfBuy}
    </button>
  );
  const handleEdit = () => {
    customPopup();
    dispatch(addProduct(eachItem));
  };
  const handleCancel = () => {
    showMiniPopup();
    dispatch(addProduct(eachItem));
  };
  const renderButtons = () => {
    console.log(reason,approved)
    if (approved===true){
      return renderAppovedBtn(status)
    }
    if (approved===false){
      return renderBlockBtn(status)
    }
  };
  const renderReasonButtons = () => {
    if (reason && approved!==false){
      return renderAppovedBtn(reason)
    }
    if (approved===false && reason){
      return renderBlockBtn(reason)
    }
  };
  const renderUpdateButtons = () => {
    if (update && approved!==false){
      return renderAppovedBtn(update)
    }
    if (approved===false && update){
      return renderBlockBtn(update)
    }
  };
  return (
    <li className="each-product-card" key={Id}>
      <p className="list-text">
        <img className="product-icon" src={imgUrl} alt="product" />
        <span>{productName}</span>
      </p>
      <p className="list-text">{brand}</p>
      <p className="list-text">
        {price} Rupees{" "}
        {parseInt(price) !== actualPrice && pathname === "/" && (
          <span className="actual-price">{actualPrice} Rs</span>
        )}
      </p>
      <p className="list-text quantity">
        {quantity} {quantity > 1 ? "KGs" : "KG"}{" "}
      </p>
      <p className="list-text">{quantity * price} Rupees</p>
      <div className="list-text status">
        <div className="status-btns">
        {renderButtons()}
        {reason && renderReasonButtons()}
        {update && renderUpdateButtons()}
        </div>
        <div className="edit-card">
        <MdDone
          className={`approved-icon ${approved===true && "approve-color"}`}
          onClick={() =>
            dispatch(
              updateStatus({
                idValue: Id,
                reason: "Approved",
                isApproved: true,
              })
            )
          }
        />
        <ImCancelCircle
          className={`blocked-icon ${approved===false && "block-color"
          }`}
          onClick={handleCancel}
        />
        <button type="button" className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
        </div>
      </div>
    </li>
  );
};

export default EachProduct;
