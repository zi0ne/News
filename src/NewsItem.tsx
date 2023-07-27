import React from "react";
import styled from "styled-components";


const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  .newsBox {
    img {
      margin-right: 1rem;
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }
  .contents {
    display: flex;
    flex-direction: row;
    h3 {
      margin: 0;
      padding-left: 8px;
      line-height: 2;
      a {
        color: block;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export interface ArticleProps {
  title: string;
  url: string;
  urlToImage: string;
  category: string;
}

const NewsItem: React.FC<{ article: ArticleProps }> = ({ article }) => {
  const { title, url, urlToImage, category } = article;
  console.log(article);
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="newsBox">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="newsImg" />
          </a>
        </div>
      )}
      <div className="contents">
        <p>{category}</p>
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
