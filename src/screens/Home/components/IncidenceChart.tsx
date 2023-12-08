import {Card} from "../../../components/Card";
import aedesIncidence from '../../../data/AedesIncidence.json'
import styled from "styled-components/native";
import {Dots} from "../../../components/Dots";

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

export function IncidenceChart() {

    function getData(){
        const data = []
        for (const district in aedesIncidence) {
            // @ts-ignore
            data.push({
                'district': district,
                'cases': aedesIncidence[district]
            })
        }
        return data
    }


    const data = getData().sort(
        (a, b) => a.district.localeCompare(b.district))

    const initialValue = 0
    const totalIncidences = data.reduce(
        (accumutalor, data) => accumutalor + data.cases,initialValue
    )

    const meanIncidences = totalIncidences / data.length

    function incidenceLevel(incidences: number) {
        if (incidences > meanIncidences) return 'red'
        if (incidences < meanIncidences) return 'green'
        return 'yellow'
    }

    return (
        <Card>
            <Table>
                <Tr first>
                    <Th>
                        Bairro
                    </Th>
                    <Th>
                        Casos
                    </Th>
                </Tr>
                {data.map(data => {
                    return (
                        <Tr>
                            <Td>
                                {data.district}
                            </Td>
                            <Dots />
                            <Td
                                classification
                                color={incidenceLevel(data.cases)}
                            >
                                {data.cases}
                            </Td>
                        </Tr>
                    )
                })}
            </Table>
        </Card>
    )
}