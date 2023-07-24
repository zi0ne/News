// Header.tsx
import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <div>
         <h3> 세상의 모든 이슈를 내 PC 안에 </h3>
      </div>
      <h1>NEWS</h1>

    </HeaderBox>
  );
};

const HeaderBox = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding-left: 5%;
    max-height: 250px;
    font-family: 'TTWanjudaedunsancheB';
    border-bottom: solid 2px #d6d6d6;
    
    div{
      display: flex;
      position: fixed;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 120px;
      top: -45px;
      margin-top: 50px;
      background-image: url('talk.png');
      background-size: cover;
    }

    h3{
      margin-top: -10px;
      margin-left: -10px;
    }

    h1{
      margin-top: 90px;
      font-size: 45px;
    }
`;

export default Header;
