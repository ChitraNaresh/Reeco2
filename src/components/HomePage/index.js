import React, { useState, useEffect } from "react";
import TopOrderDetailsCard from "../TopOrderDetailsCard";
import { BiSearch } from "react-icons/bi";
import { BsPrinter } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import "./index.css";
import EachProduct from "../EachProduct";
import CustomPopup from "../CustomPopup";
import { updateStatus } from "../../redux/productsArraySlice";
import { useDispatch, useSelector } from "react-redux";
import OrderDetailsCard from "../OrderDetailsCard";
import fetchData from "../apiService";
import { setInitialProducts } from "../../redux/productsArraySlice";
import {
  ActionBtn,
  AddItemButton,
  AllOrdersContainer,
  FinalOrderContainer,
  HomePageContent,
  InputEl,
  ListOfProducts,
  MissingProducHead,
  MissingProductContainer,
  OnlySearchCard,
  PopUpRemovedCard,
  PrinterCard,
  ProductDes,
  SearchAddCard,
  SimplePopUpContainer,
  TableColumnsHead,
  TableColumnsHeeadCard,
  YesNoBtns,
} from "./styledComponents";

const HomePage = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [orderDetails, setOrderdetails] = useState(true);
  const [isShowMiniPopup, setMiniPopUp] = useState(false);
  const [isShowCustomPopup, setCustomPopUp] = useState(false);
  const { dataOfPopup } = useSelector((state) => state.popupData);
  const { allProducts } = useSelector((state) => state.productsArray);
  const handleApproved = () => {
    alert("Remove details from this page?");
    setOrderdetails(false);
  };
  const handleCancelBtn = (value) => {
    dispatch(
      updateStatus({
        idValue: dataOfPopup.Id,
        reason: value,
        isApproved: false,
      })
    );
    setMiniPopUp(false);
  };
  const customPopup = () => {
    setCustomPopUp(true);
  };
  useEffect(() => {
    const fetchDataFun = async () => {
      try {
        const data = await fetchData("products");
        dispatch(setInitialProducts(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFun();
  }, []);
  const renderSimplePopup = (productObj) => {
    return (
      <SimplePopUpContainer>
        <MissingProductContainer>
          <PopUpRemovedCard>
            <MissingProducHead>Missing product</MissingProducHead>
            <ImCancelCircle
              onClick={() => setMiniPopUp(false)}
              className="cancel-btn"
            />
          </PopUpRemovedCard>
          <ProductDes>Is "{dataOfPopup.productName}" urgent?</ProductDes>
          <YesNoBtns>
            <ActionBtn type="button" onClick={() => handleCancelBtn("Missing")}>
              No
            </ActionBtn>
            <ActionBtn
              type="button"
              onClick={() => handleCancelBtn("Missing-Urgent")}
            >
              Yes
            </ActionBtn>
          </YesNoBtns>
        </MissingProductContainer>
      </SimplePopUpContainer>
    );
  };
  const filteredListOfproducts = allProducts.filter((eachProduct) =>
    eachProduct?.productName?.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <HomePage>
      {isShowMiniPopup && renderSimplePopup()}
      {isShowCustomPopup && (
        <CustomPopup cancelBtn={() => setCustomPopUp(false)} />
      )}
      <HomePageContent>
        {orderDetails && (
          <TopOrderDetailsCard handleApproved={handleApproved} />
        )}
        {orderDetails && <OrderDetailsCard />}
        <AllOrdersContainer>
          <div className={`all-orders-card ${"without-details-page"}`}>
            <SearchAddCard>
              <OnlySearchCard>
                <InputEl
                  type="search"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
                <BiSearch className="search-icon" />
              </OnlySearchCard>
              <PrinterCard>
                <AddItemButton type="button">Add Item</AddItemButton>
                <BsPrinter className="printer-icon" />
              </PrinterCard>
            </SearchAddCard>
            <FinalOrderContainer>
              <ListOfProducts>
                <TableColumnsHeeadCard>
                  <TableColumnsHead>Product Name</TableColumnsHead>
                  <TableColumnsHead>Brand</TableColumnsHead>
                  <TableColumnsHead>Price</TableColumnsHead>
                  <TableColumnsHead>Quantity</TableColumnsHead>
                  <TableColumnsHead>Total</TableColumnsHead>
                  <TableColumnsHead>Status</TableColumnsHead>
                </TableColumnsHeeadCard>
                <ul
                  className={`only-product-list-card ${"without-details-page-products"}`}
                >
                  {filteredListOfproducts.map((eachItem) => (
                    <EachProduct
                      eachItem={eachItem}
                      customPopup={customPopup}
                      showMiniPopup={(value) => setMiniPopUp(true)}
                    />
                  ))}
                </ul>
              </ListOfProducts>
            </FinalOrderContainer>
          </div>
        </AllOrdersContainer>
      </HomePageContent>
    </HomePage>
  );
};

export default HomePage;
