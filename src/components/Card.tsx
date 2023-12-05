import styled from "styled-components/native";
import {Text, View} from "react-native";
import {ReactNode} from "react";

type containerOptions = {
    flexDir?: 'row' | 'column'
}

const Container = styled.View<containerOptions>`
  border-radius: 16px;
  background: white;
  
  box-sizing: border-box;
  
  
  padding: 28px;
  gap: 16px;
  flex-direction: ${(props: containerOptions) => 
          props.flexDir ? props.flexDir : 'column'};
`



interface CardProps {
    children: ReactNode
    title?: string
    flexDir?: 'row' | 'column'
}

export function Card({ children, title, flexDir}: CardProps) {
    return (
        <Container flexDir={flexDir}>
            {title && (
                <Text style={{
                    fontFamily: 'Roboto-500',
                    color: '#A0ABC3',
                }}>
                    {title}
                </Text>
            )}
            {children}
        </Container>
    )
}