import {ReactNode} from "react";
import styled from "styled-components/native";
import {Text} from "react-native";

interface ItemListProps {
    children: ReactNode
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

const Item = styled.Text`
  &::before {
    content: ".";
  }
`

export function ItemList({ children }: ItemListProps) {
    return (
        <Container>
            <Text style={{
                paddingHorizontal: 5,
                fontSize: 20
            }}>
                •
            </Text>
            <Item>
                {children}
            </Item>
        </Container>
    )
}