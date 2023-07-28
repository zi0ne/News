import React from "react";
import styled from "styled-components";


 
const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-family:'TTWanjunuricheR';
  background-color: #ffffff;
  transition: background-color 0.3s ease; 
  width: 370px;
  height: 420px;
  border: solid 2px #3d3d3d;
  margin: 0;

  .newsBox {
    img {
      width: 370px;
      height: 300px;
      object-fit: cover;
      filter: grayscale(100%);
      transition: filter 0.3s ease; 
    }
    
    img:hover {
      filter: grayscale(0%); 
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: space-between;
    span{
      margin: 7px;
    }
    h3 {
      margin: 0;
      padding: 8px;
      font-size: 16px;
      line-height: 2;
      a {
        color: block;
      }
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export interface ArticleProps {
  title: string;
  url: string;
  img: string;
  published: string;
  category: string;
}

const NewsItem: React.FC<{ article: ArticleProps }> = ({ article }) => {
  const { title, url, img, published, category } = article;
  console.log(article);
  return (
    <NewsItemBlock>
      {img && (
        <div className="newsBox">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={img} alt="newsImg" />
          </a>
        </div>
      )}
      <div className="contents">
        <h3>{title}</h3>
        <div>
          <span>{published}</span>
          <span>{category}</span>
        </div>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
