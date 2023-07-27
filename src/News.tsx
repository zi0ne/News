import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from './NewsItem';

const News: React.FC = () => {
    
    const [data, setData ] = useState(null);

    // 첫 렌더링에 뉴스 가져오기
    useEffect( () => {
        const getNews = async () => {
        // axios 라이브러리로 apic call 
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`,
          );
          // 응답 data state 저장
          setData(response.data);
        } catch (e) {
          console.log(e)
        }
      };
      
      getNews();

    }, []);

    return (
      <div>
        <NewsList/>
      </div>
    );
  };
  
  export default News;