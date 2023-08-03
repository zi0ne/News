import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from '../NewsItem';
import { ArticleProps } from '../NewsItem';

const BusinessNews: React.FC = () => {
    
    const [data, setData] = useState<ArticleProps[]>([]);

    // 첫 렌더링에 뉴스 가져오기
    useEffect( () => {
      const getNews = async () => {
      // axios 라이브러리로 apic call 
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/zi0ne/TODO_DB/news`,
        );
        // 응답 data state 저장
        setData(response.data);
        console.log(data);
      } catch (e) {
        console.log(e)
      }
    };
    
    getNews();

  }, []);
  
    const rows: ArticleProps[][] = [];
    let tempRow: ArticleProps[] = [];
  
    data.forEach((article, index) => {
      if (article.category === "경제") {
          tempRow.push(article);
      }

      if (tempRow.length === 3 || index === data.length - 1) {
        rows.push(tempRow);
        tempRow = [];
      }
    });

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
  background-color: #eae7de;
  padding: 0;

  td{
    filter: grayscale(100%);
    transition: filter 0.3s ease; 
  }

  td:hover{
    filter: grayscale(0%);
  }
`;

  export default BusinessNews;
