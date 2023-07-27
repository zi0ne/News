import styled from "styled-components";
import {useState} from 'react';

interface TapProps {
    selected: boolean;
  }

const Category : React.FC = () => {
    const [select,setSelect] = useState('all')

    const categories = [
        {
            name: 'all',
            text: '전체'
        },
        {
            name: 'business',
            text: '💰경제'
        },
        {
            name: 'science',
            text: '💡과학'
        },
        {
            name: 'entertainment',
            text: '🎨연예'
        },
        {
            name: 'sports',
            text: '⚽️스포츠'
        },
        {
            name: 'health',
            text: '🧬의학'
        },
        {
            name: 'technology',
            text: '🤖테크'
        }
    ];

    const handleClick = (name: string) => {
        setSelect(name);
    };

    
    return(
        <CategoryBox>
            <Wrap>
                {categories.map(tap => (
                    <Tap
                    key={tap.name}
                    onClick = {() => handleClick(tap.name)}
                    selected = {select === tap.name}
                    >
                    {tap.text}
                    </Tap>
                ))}
                <Search>
                <div className="inputSearch">
                    <input placeholder="검색어를 입력하세요"/>
                </div>
                <div className="button">🔎</div>
                </Search>
            </Wrap>
        </CategoryBox>
    );
}

const CategoryBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: center;
    align-items: center;
    border-bottom: solid 2px #3d3d3d;
    font-family: 'TTWanjudaedunsancheB';
    font-size: 18px;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 70%;
    justify-content: space-around;
    align-items: center;
    font-family: 'TTWanjudaedunsancheB';
    font-size: 20px;
`;

const Tap = styled.div<TapProps>`
    cursor: pointer;
    margin-right: 10px;
    color: ${props => props.selected ? '#ff6b00' : 'black'};
    transition: font-size 0.2s ease;

    &:hover {
        font-size: 1.2em; 
      }
`;

const Search = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;

    input{
        width: 230px;
        border:none;
        margin-left: 5px;
        padding: 8px 0px 0px 5px;
    }
    input:focus {
        outline: none;
      }
    .inputSearch{
        width: 250px;
        border: solid 2px #ff6b00;
        border-radius: 10px;
    }

    .button{
        margin-right: -20px;
        margin-left: 15px;
        font-size: 25px;
    }
`;

export default Category;