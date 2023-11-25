import { useSelector } from "react-redux";
import "./index.css";
import React from "react";
import EachProduct from "../EachProduct";
import { useNavigate } from "react-router-dom";

const OrderedItems = () => {
  const navigate = useNavigate();
  const { allProducts } = useSelector((state) => state.productsArray);
  let totalAmount = 0;
  const filteredProducts = allProducts.filter((eachProduct) => {
    if (eachProduct.status === "Approved") {
      totalAmount += eachProduct.quantity * eachProduct.price;
      return eachProduct.status === "Approved";
    }
  });
  return (
    <div className="ordered-items">
      <div className="all-items-container">
        <div className="show-all-products">
          <h1 className="page-heading">{filteredProducts.length===0 ? "No" : "All"} ordered products</h1>
          {filteredProducts.length===0 && <div className="no-image-card">
                    <div className="no-img">
                <img alt="notfound" src="https://cdni.iconscout.com/illustration/premium/thumb/no-product-8316266-6632286.png" className="no-products"/>
                    <button className="buy" type="button">Buy Fruits</button>
                </div>
              </div>}
          {filteredProducts.length>0 && <div className="final-order-conatiner">
            <ul className="list-of-products">
              <li className="table-columns-head-card">
                <p className="product-name table-columns-head first-column">
                  Product Name
                </p>
                <p className="brand table-columns-head">Brand</p>
                <p className="price-home table-columns-head">Price</p>
                <p className="quantity table-columns-head">Quantity</p>
                <p className="total-home table-columns-head">Total</p>
                <p className="tatus table-columns-head last-column">status</p>
              </li>
              <ul
                className={`only-product-list-card ${"without-details-page-products"}`}
              >
                {filteredProducts.map((eachItem) => (
                  <EachProduct eachItem={eachItem} />
                ))}
              </ul>
            </ul>
          </div>}
          {filteredProducts.length>0 && <div className="total-amount-card">Total Amount : {totalAmount} Rs</div>}
          {filteredProducts.length>0 && <div className="ordered-btns">
            <button
              type="button"
              className="back-butto orders-back"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <button
              type="button"
              className="back-butto orders-back ordered-btn"
            >
              Order
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default OrderedItems;
