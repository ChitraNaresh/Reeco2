import styled from "styled-components"

export const MainCard=styled.div`
background-color:green;
height: 8vh;
min-height: 8vh;
padding: 0px 15px 0px 15px;
display: flex;
justify-content: center;
position: fixed;
top: 0px;
width: 100%;
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
