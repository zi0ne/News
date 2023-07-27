import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { ArticleProps } from './NewsItem';

const News: React.FC = () => {
    
    const [data, setData] = useState<ArticleProps[]>([]);

    // 첫 렌더링에 뉴스 가져오기
    useEffect( () => {
        const getNews = async () => {
        // axios 라이브러리로 apic call 
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`,
          );
          // 응답 data state 저장
          setData(response.data.articles);
        } catch (e) {
          console.log(e)
        }
      };
      
      getNews();

    }, []);

    const rows = [];
    for (let i = 0; i < Math.ceil(data.length / 3); i++) {
      rows.push(data.slice(i * 3, (i + 1) * 3));
    }

    return (
        <NewsListBlock>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((article, cellIndex) => (
                  <td key={cellIndex}>
                    <NewsItem article={article} />
                  </td>
                ))}
                {row.length < 3 &&
                  Array.from({ length: 3 - row.length }, (_, index) => (
                    <td key={index}></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </NewsListBlock>
    );
  };
  
  const NewsListBlock = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

  export default News;
