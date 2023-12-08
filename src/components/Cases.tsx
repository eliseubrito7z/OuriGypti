import {Card} from "./Card";
import {Text, View} from "react-native";
import notifiedCases from "../data/notifiedCases22.json"
import styled from "styled-components/native";
import {Dots} from "./Dots";

const CasesContainer = styled.View`
  gap: 20px;
`

export const Table = styled.View`
  width: 100%;
`

export const Th = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-500';
  color: #A0ABC3;
`
type TdProps = {
    classification?: boolean
    color?: string
}

export const Td = styled.Text<TdProps>`
    font-size: 16px;
    font-weight: 500;
    text-align: end;
  
  ${(props: TdProps) => props.classification ?
    `
            padding: 5px;
            color: ${props.color}
          `
    : ''}
  
`

type TrType = {
    first?: boolean
}

export const Tr = styled.View<TrType>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    
  margin-top: ${(props: TrType) => props.first ? '' : '10px'};
  gap: 20px;
`

export function Cases() {
    return (
        <Card>
            <Th>
                Casos confirmados em 2022
            </Th>
            <Table>
                <Tr first>
                    <Th>
                        Virus
                    </Th>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <Th>
                            Co.
                        </Th>
                        <Th>
                            De.
                        </Th>
                    </View>
                </Tr>
                <Tr>
                    <Td>
                        Dengue
                    </Td>
                    <Dots />
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <Td>
                            204
                        </Td>
                        <Td>
                            462
                        </Td>
                    </View>
                </Tr>
                <Tr>
                    <Td>
                        Chikungunya
                    </Td>
                    <Dots />
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <Td>
                            {notifiedCases.chikungunya.confirmed}
                        </Td>
                        <Td>
                            {notifiedCases.chikungunya.discarded}
                        </Td>
                    </View>
                </Tr>
                <Tr>
                    <Td>
                        Zika
                    </Td>
                    <Dots />
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <Td>
                            {notifiedCases.zika.confirmed}
                        </Td>
                        <Td>
                            {notifiedCases.zika.discarded}
                        </Td>
                    </View>
                </Tr>
            </Table>
        </Card>
    )
}