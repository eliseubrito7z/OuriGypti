import {Card} from "./Card";
import styled from "styled-components/native";
import {CardLegend, CardMainText} from "./DefaultComponents";
import AntIcons from 'react-native-vector-icons/AntDesign'

const WeeklyData = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`



const View = styled.View`
  height: 100%;
`

export function WeeklyUpdates() {
    return (
        <Card title={'ATUALIZAÇÕES SEMANAIS'}>
            <WeeklyData>
                <View>
                    <CardMainText>
                        2
                    </CardMainText>
                    <CardLegend>
                        Confirmados
                    </CardLegend>
                </View>

                <View>
                    <CardMainText style={{
                        marginTop: 5,
                        marginLeft: -5,
                    }}>
                        <AntIcons name={'arrowup'} size={24} color={'red'} />
                    </CardMainText>
                    <CardLegend
                        style={{ color: 'red' }}
                    >
                        100%
                    </CardLegend>
                </View>

                <View>
                    <CardMainText>
                        -
                    </CardMainText>
                    <CardLegend>
                        Death
                    </CardLegend>
                </View>
            </WeeklyData>
        </Card>
    )
}