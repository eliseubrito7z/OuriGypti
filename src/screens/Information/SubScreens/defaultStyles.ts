import styled from "styled-components/native";

export const SubScreensContainer = styled.View`
  padding: 48px 36px 100px;
  
`

interface hasMargin {
    first?: boolean
}

export const Question = styled.Text<hasMargin>`
  font-size: 18px;
  font-weight: 600;
  
  margin-top: ${(props: hasMargin) => props.first ? '0' : '10px'};
`

export const ResponseContainer = styled.View`
  gap: 10px;
`

export const Response = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`

