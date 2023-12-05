import {Card} from "./Card";
import styled from "styled-components/native";
import Dash from "react-native-dash";

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

const DotsContainer = styled.View`
  flex: 1;
  overflow: hidden;
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

            <DotsContainer>
                <Dash
                    dashGap={4}
                    dashLength={4}
                    dashThickness={2}
                    dashColor={'#b4b8c5'}
                    style={{
                        width: 500,
                    }}
                />
            </DotsContainer>

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