import {TextInput} from "react-native";
import styled from "styled-components/native";
import {useState} from "react";


const SearchBarContainer = styled.View`
  background: #E2E2EB;
  
  border-radius: 16px;
  padding: 10px;
`



export function SearchBar() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {

    };

    return (
        <SearchBarContainer>
            <TextInput
                style={{ color: '#000' }}
                placeholder={'O que você quer saber sobre a dengue?'}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
        </SearchBarContainer>
    )
}