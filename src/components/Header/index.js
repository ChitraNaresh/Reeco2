import { Link } from "react-router-dom";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import "./index.css";
import {RiArrowDropDownLine} from "react-icons/ri"
import { useState } from "react";
import { useSelector } from "react-redux";
import { MainCard,NavLinksCard,HeaderContainer,ContentCard,AppName, NavCard, UserDetailsCard, UserName, CartCountBg, ReviewBtn, NavLinksCardMb, MbUser, CancelIconCard, MenuCardMb } from "./styledComponents";

const Header = () => {
  const { allProducts } = useSelector((state) => state.productsArray);
  const filteredProducts=allProducts.filter(eachProduct=>{
    return eachProduct.status==="Approved"
  })
  const [isShowMenu, setMenu] = useState(false);
  const renderSideMenu = () => {
    return (
      <MenuCardMb>
        <CancelIconCard>
          <GiCancel className="menu-icon" onClick={() => setMenu(false)} />
        </CancelIconCard>
        <MbUser>Hello, James</MbUser>
        <nav>
          <NavLinksCardMb>
            <li>
              <Link className="each-nav-link">Store</Link>
            </li>
            <li>
              <Link className="each-nav-link">Orders</Link>
            </li>
            <li>
              <Link className="each-nav-link">Analytics</Link>
            </li>
          </NavLinksCardMb>
        </nav>
      </MenuCardMb>
    ); 
 };
  return (
    <>
      {isShowMenu && renderSideMenu()}
      <MainCard>
        <HeaderContainer>
          <ContentCard>
            <AppName>Reeco</AppName>
            <NavCard>
              <NavLinksCard>
                <li>
                  <Link className="each-nav-link">Store</Link>
                </li>
                <li>
                  <Link className="each-nav-link">Orders</Link>
                </li>
                <li>
                  <Link className="each-nav-link">Analytics</Link>
                </li>
              </NavLinksCard>
            </NavCard>
          </ContentCard>
          <UserDetailsCard>
            <Link to="/ordered-products" className="link">
            <ReviewBtn type="button">
               Review
            </ReviewBtn>
            </Link>
            <div>
              <CartCountBg>{filteredProducts.length}</CartCountBg>
              <LiaShoppingCartSolid className="cart-icon" />
            </div>
            <FiMenu className="menu-icon" onClick={() => setMenu(true)} />
            <UserName>Hello, James</UserName>
            <RiArrowDropDownLine className="drop-down"/>
          </UserDetailsCard>
        </HeaderContainer>
      </MainCard>
    </>
  );
};

export default Header;
