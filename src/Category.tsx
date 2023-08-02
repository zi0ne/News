import styled from "styled-components";
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

interface TapProps {
    selected: boolean;
  }

const Category : React.FC<{ searchQuery: string , setSearchQuery : (query: string)  => void}> = ({ setSearchQuery, searchQuery }) => {
    const [select,setSelect] = useState('');

    const categories = [
        {
            name: '',
            text: '전체'
        },
        {
            name: 'business',
            text: '💰경제'
        },
        {
            name: 'science',
            text: '🌳환경'
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
        setSearchQuery(name);
    };

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelect('');
        setSearchQuery(event.target.value);
    }

    const handleSearchButtonClick = () => {
        setSearchQuery(select); 
      }
    
    return(
        <CategoryBox>
            <Wrap>
                {categories.map(tap => (
                    <StyledLink to={`/${tap.name}`} key={tap.name}>
                        <Tap
                        key={tap.name}
                        onClick = {() => handleClick(tap.name)}
                        selected = {select === tap.name}
                        >
                        {tap.text}
                        </Tap>
                    </StyledLink>
                ))}
                <Search>
                <div className="inputSearch">
                    <input placeholder="검색어를 입력하세요"
                            value={searchQuery}
                            onChange={handleSearchInput}/>
                </div>
                <div className="button" onClick={handleSearchButtonClick}>🔎</div>
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
    border-bottom: solid 1px #3d3d3d;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Tap = styled.div<TapProps>`
    @media screen and (max-width: 680px){
        font-size: 0.7em;
    }
    cursor: pointer;
    text-decoration: none;
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

    @media screen and (max-width: 1100px){
        display: none;
    }

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