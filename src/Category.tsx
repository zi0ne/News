import styled from "styled-components";
import {useState} from 'react';

interface TapProps {
    selected: boolean;
  }

const Category : React.FC = () => {
    const [select,setSelect] = useState('')

    const categories = [
        {
            name: 'all',
            text: '전체보기'
        },
        {
            name: 'business',
            text: '비즈니스'
        },
        {
            name: 'science',
            text: '과학'
        },
        {
            name: 'entertainment',
            text: '연예'
        },
        {
            name: 'sports',
            text: '스포츠'
        },
        {
            name: 'health',
            text: '건강'
        },
        {
            name: 'technology',
            text: '기술'
        }
    ];

    const handleClick = (name: string) => {
        setSelect(name);
    };

    
    return(
        <CategoryBox>
            {categories.map(tap => (
                <Tap
                key={tap.name}
                onClick = {() => handleClick(tap.name)}
                selected = {select === tap.name}
                >
                {tap.text}
                </Tap>
            ))}
        </CategoryBox>
    );
}

const CategoryBox = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: solid 2px #ffffff;
`;

const Tap = styled.div<TapProps>`
    cursor: pointer;
    margin-right: 10px;
    color: ${props => props.selected ? 'red' : 'black'};
`;

export default Category;