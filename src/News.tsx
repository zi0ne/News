import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { ArticleProps } from './NewsItem';

const News: React.FC <{ searchQuery: string }> = ({ searchQuery }) => {
    
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

    }, [data]);
    
    const filteredData = searchQuery
    ? data.filter((article) => article.title.includes(searchQuery))
    : data;

    const itemsRow = window.innerWidth < 660 ? 1 : (window.innerWidth < 1100 ? 2: 3);
    
    const rows = [];
    for (let i = 0; i < Math.ceil(filteredData.length / itemsRow); i++) {
      rows.push(filteredData.slice(i * itemsRow, (i + 1) * itemsRow));
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
                {row.length < itemsRow &&
                  Array.from({ length: itemsRow - row.length }, (_, index) => (
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

  export default News;
