import {Card} from "./Card";
import styled from "styled-components/native";
import Dash from "react-native-dash";
import {Dots} from "./Dots";

const TypeContainer = styled.View`
  width: 100%;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`

const VirusName = styled.Text`
  min-width: max-content;
  font-size: 18px;
`

const Classification = styled.Text`
  min-width: max-content;
  font-size: 16px;
`

const ClassificationContainer = styled.View`
  padding: 4px 12px;
  background: #D5EDDD;
  border-radius: 6px;
  color: #7FB591;
  align-items: end;
`

interface VirusTypeProps {
    virusName: string
    classification: 'Muito Baixa' | 'Baixa' | 'Média' | 'Alta' | 'Muito alta'
}

function VirusType({ virusName, classification }: VirusTypeProps) {
    return (
        <TypeContainer>
            <VirusName>
                { virusName }
            </VirusName>

            <Dots />

            <ClassificationContainer>
                <Classification style={{
                    color: '#53916a',
                    fontWeight: 'bold'
                }}>
                    { classification }
                </Classification>
            </ClassificationContainer>

        </TypeContainer>
    )
}

export function MortalityLevel() {
    return (
        <Card title={'NIVEL DE MORTALIDADE'}>
            <VirusType virusName={'Dengue'} classification={'Baixa'} />
            <VirusType virusName={'Chikungunya'} classification={'Baixa'} />
            <VirusType virusName={'Zika'} classification={'Baixa'} />
        </Card>
    )
}