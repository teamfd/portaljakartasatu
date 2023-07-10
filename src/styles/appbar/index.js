import styled from 'styled-components';

export const Nav = styled.nav`
   background: transparent;
   width: 75%;
   max-width: 1500px;
   margin-left: auto;
   height: 65px;
   margin-right: auto;
   border-radius: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: sticky;
   z-index: 10;
   transition-timing-function: ease-in;
   transition: 0.8s;
`;

export const NavContainer = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   z-index: 1;
   width: 100%;
   padding: 24px;
   max-width: 1500px;
`;

export const NavLogo = styled.div`
   width: 20%;
   margin-left: -8px;
   color: green;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   font-weight: bold;
   text-decoration: none;
`;

export const MobileIcon = styled.div`
   display: none;
  
   @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
   }
`;

export const NavItem = styled.li`
`;

export const NavLinks = styled.a`
   font-size: 1em;
   padding-left: 1rem;
   height: 100%; 
   cursor: pointer; 
   &.active { 
   color: #000000; 
   }
`;