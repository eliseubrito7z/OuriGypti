import styled from "styled-components/native";
import {View} from "react-native";
import {ReactNode} from "react";

const InformationCardContainer = styled.View`
  background: white;
  flex-direction: row;
  align-items: center;
  
  gap: 20px;
  padding: 15px 20px;
  
  border-radius: 14px;
`
const InformationIconBg = styled.View<{color: string}>`
  background-color: ${(props: {color: string}) => props.color};
  padding: 10px;
  border-radius: 100px;
`



export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
`
export const CardDescription = styled.Text`
  max-width: 90%;
  font-size: 14px;
  color: #b7babb;
`

interface InformationCardProps {
    children: ReactNode
    imageBg: string
    title: string
    description: string
}

export function InformationCard({ imageBg, children, title, description }: InformationCardProps) {

    return (
        <InformationCardContainer>
            <InformationIconBg color={imageBg}>
                {children}
            </InformationIconBg>
            <View>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </View>
        </InformationCardContainer>
    )
}