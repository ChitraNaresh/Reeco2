import React, { useState } from "react";
import "./index.css";
import { ImCancelCircle } from "react-icons/im";
import { FiMinus } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { updateEditedData } from "../../redux/productsArraySlice";

const CustomPopup = ({ cancelBtn }) => {
  const dispatch = useDispatch();
  const [reasiontext, setReasion] = useState("");
  const { dataOfPopup } = useSelector((state) => state.popupData);
  const [priceVal, setPrice] = useState(dataOfPopup.price);
  const [quantity, setQuantity] = useState(dataOfPopup.quantity);
  const handleDecrement = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleSendBtn = () => {
    const updateValuesObj = {
      Id: dataOfPopup.Id,
      quantity,
      price: priceVal,
      reason: reasiontext,
      update:
        dataOfPopup.price !== priceVal && dataOfPopup.quantity !== quantity
          ? "P & Q updated"
          : (dataOfPopup.quantity !== quantity && "Quantity updated") ||
            (dataOfPopup.price !== priceVal && "Price updated"),
    };
    cancelBtn();
    dispatch(updateEditedData(updateValuesObj));
  };
  return (
    <div className="custom-popup-container">
      <div className="content-card-popup">
        <div className="cancel-icon-custom">
          <ImCancelCircle onClick={() => cancelBtn()} className="close-btn" />
        </div>
        <h1 className="fruit-name-custom">{dataOfPopup.productName}</h1>
        <p className="brand-name-custom">{dataOfPopup.brand}</p>
        <div className="complete-item-details">
          <img
            src={dataOfPopup.imgUrl}
            className="custom-page-item-img"
            alt="product"
          />
          <div className="edit-options-card">
            <div className="each-property">
              <p className="each-property-text">Price</p>
              <input
                onChange={(e) => setPrice(Number(e.target.value))}
                type="text"
                className="each-property-text price price-input"
                value={priceVal}
              />
            </div>
            <div className="each-property">
              <p className="each-property-text">Quantity</p>
              <div className="inc-dec-btns">
                <button
                  onClick={handleDecrement}
                  className="decrement-btn"
                  type="button"
                >
                  <FiMinus className="minus-btn" />
                </button>
                <p className="each-property-text">{quantity}</p>
                <button
                  onClick={handleIncrement}
                  className="increment-btn"
                  type="button"
                >
                  <HiPlus className="plus-btn" />
                </button>
              </div>
            </div>
            <div className="each-property">
              <p className="each-property-text">Total</p>
              <p className="each-property-text total">{quantity * priceVal}</p>
            </div>
          </div>
        </div>
        <div className="custom-reasions">
          <h1 className="choose-text">
            Choose reason <span className="optional-text">(Optional)</span>
          </h1>
          <div className="choose-btns-card">
            <button
              onClick={() => setReasion("Missing product")}
              className="each-option-btn"
              type="button"
            >
              Missing product
            </button>
            <button
              onClick={() => setReasion("Quantity is not the same")}
              className="each-option-btn"
              type="button"
            >
              Quantity is not the same
            </button>
            <button
              onClick={() => setReasion("price is not the same")}
              className="each-option-btn"
              type="button"
            >
              Price is not the same
            </button>
            <button
              onClick={() => setReasion("Other")}
              className="each-option-btn"
              type="button"
            >
              Other
            </button>
          </div>
          <div className="action-buttons-custome">
            <button
              onClick={() => cancelBtn()}
              className="back-button"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={handleSendBtn}
              className="approve-btn"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
