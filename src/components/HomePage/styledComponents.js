import styled from "styled-components"

export const TableColumnsHead=styled.p`
font-family: "Roboto";
font-size: 12px;
color: grey;
font-weight: 400;
`
export const HomePageCard=styled.div`
width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 8vh;
`
export const HomePageContent=styled.div`
width: 100%;
`
export const AllOrdersContainer=styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 10px;
`
export const SearchAddCard=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const OnlySearchCard=styled.div`
box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
display: flex;
justify-content: space-around;
align-items: center;
height: 30px;
width: 250px;
border-radius: 15px;
`
export const InputEl=styled.input`
width: 80%;
border: none;
outline: none;
cursor: pointer;
height: 80%;
`
export const PrinterCard=styled.div`
display: flex;
align-items: center;
`
export const AddItemButton=styled.button`
height: 20px;
border-radius: 15px;
color: green;
border: 2px solid green;
font-size: 12px;
font-family: "Roboto";
background-color: transparent;
padding: 0px 10px 0px 10px;
margin-right: 25px;
height: 30px;
@media screen and (max-width:568px) {
        margin-left: 10px;
        margin-right: 5px;
}
`
export const FinalOrderContainer=styled.div`
min-width: 600px;
`
export const ListOfProducts=styled.ul`
padding: 0px;
list-style-type: none;
box-shadow: 0px 0px 1px rgba(0,0,0,0.4);
min-width: 700px;
`
export const TableColumnsHeeadCard=styled.li`
display: grid;
grid-template-columns: 20% 10% 10% 10% 10% 40%;;
box-shadow: 0px 0px 1px rgba(0,0,0,0.3);
padding:0px 10px 0px 10px
`
export const SimplePopUpContainer=styled.div`
height: 100vh;
position: fixed;
top: 0px;
background-color: rgba(0,0,0,0.7);
width: 100%;
display: flex;
align-items: flex-end;
justify-content: center;
`
export const MissingProductContainer=styled.div`
background-color: #fff;
position: fixed;
bottom: 50px;
padding: 20px;
width: 250px;
border-radius: 5px;
`
export const PopUpRemovedCard=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const MissingProducHead=styled.h1`
font-family: "Roboto";
    font-size: 17px;
    margin: 0px;
`
export const ProductDes=styled.p`
font-family: "Roboto";
font-size: 13px;
`
export const YesNoBtns=styled.div`
text-align: right;
`
export const ActionBtn=styled.button`
font-family: "Roboto";
    font-size: 14px;
    background-color: transparent;
    margin-right: 5px;
    border: none;
    cursor: pointer;
`
export const HeaderContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
@media screen and (min-width:768px) {
      width: 80%;
`
export const ContentCard=styled.div`
display: flex;
align-items: center;
`
export const AppName=styled.h1`
font-size: 20px;
font-family: "Roboto";
color: #fff;
font-weight: 600;
`
export const MbUser=styled.h1`
font-family: "Roboto";
color: #fff;
font-size: 20px;
`
export const NavCard=styled.nav`
@media screen and (max-width:576px) {
        display: none;
}
`
export const NavCardMb=styled.nav`

`
export const NavLinksCard=styled.ul`
padding: 0px;
list-style-type: none;
display: flex;
`
export const NavLinksCardMb=styled.ul`
padding: 0px;
list-style-type: none;
flex-direction: column;
`
export const UserDetailsCard=styled.div`
display: flex;
align-items: center;
`
export const ReviewBtn=styled.button`
margin-right: 20px;
height:25px;
background-color:transparent;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
border: none;
color: #fff;
font-family: "Roboto";
outline: none;cursor: pointer;
`
export const CartCountBg=styled.div`
background-color:rgb(43, 244, 96);
height: 20px;
width: 20px;
flex-grow: 1;
border-radius: 60%;
font-family: "Roboto";
color: #fff;
font-size: 10px;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
position: relative;
top: 12px;
left: 13px;
`
export const UserName=styled.h1`
font-size: 12px;
font-family: "Roboto";
font-weight: 500;
color: #ffffffe8;
text-decoration: none;
margin-left: 25px;
@media screen and (max-width:576px) {
        display: none;
}
`
export const MenuCardMb=styled.div`
height: 92vh;
position: fixed;
width: 200px;
top: 8vh;
background-color:green;
padding: 20px;
`
export const CancelIconCard=styled.div`
display: flex;
justify-content: flex-end;
`