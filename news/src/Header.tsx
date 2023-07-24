// Header.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import 'animate.css';

const Header: React.FC = () => {
  
  // 랜덤 위치 저장 변수
  const [flashPositions, setFlashPositions] = useState<{x: number, y: number}[]>([]);

  // 랜덤 위치 생성 함수
  const randomPosition = () =>{
    const position: {x: number; y:number}[] = [];
    const centerX = window.innerWidth; 
    const centerY = 120;

    for(let i = 0; i < 10; i++){
      const x = Math.random() * (centerX);
      const y = Math.random() * (centerY);

      position.push({x,y});
    }

    setFlashPositions(position);
  };

  useEffect(() => {
    randomPosition();
  }, []);

  return (
    <HeaderBox>
      <div className="headerDiv">
         <h3> 세상의 모든 이슈를 내 PC 안에 </h3>
      </div>
      <h1 className="animate__animated animate__pulse">NEWS</h1>
      {flashPositions.map((position, index) => (
        <FlashImage key={index} x = {position.x} y ={position.y} />
      ))}

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
    
    .headerDiv{
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

const FlashImage = styled.div<{x:number; y: number}>`
    position: absolute;
    top: ${({y}) => y}px;
    left: ${({x}) => x}px;
    width: 40px;
    height: 40px;
    background-image: url("flash.png");
    background-size: cover;
    opacity: 0;
    animation: flashAnimation 1s linear;
    animation-delay: ${({x}) => Math.random() * 2}s;
    pointer-events: none;

    @keyframes flashAnimation {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
`;

export default Header;
