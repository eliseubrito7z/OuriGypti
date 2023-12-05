import styled from "styled-components/native";
import {Card} from "./Card";
import {View} from "react-native";
import {CardLegend, CardMainText} from "./DefaultComponents";
import AntIcons from "react-native-vector-icons/AntDesign";

const LastYearData = styled.View`
  flex-direction: row;
  justify-content: start;
  gap: 48px;
`

const SubContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`


export function LastYear() {
    return (
        <Card title={'ULTIMO ANO'}>
            <LastYearData>
                <SubContainer>
                    <View>
                        <CardMainText>
                            12.823
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
                            <AntIcons name={'arrowdown'} size={24} color={'green'} />
                        </CardMainText>
                        <CardLegend>
                            20%
                        </CardLegend>
                    </View>
                </SubContainer>

                <SubContainer>
                    <View>
                        <CardMainText>
                            584
                        </CardMainText>
                        <CardLegend>
                            Mortos
                        </CardLegend>
                    </View>
                    <View>
                        <CardMainText style={{
                            marginTop: 5,
                            marginLeft: -5,
                        }}>
                            <AntIcons name={'arrowdown'} size={24} color={'green'} />
                        </CardMainText>
                        <CardLegend>
                            12%
                        </CardLegend>
                    </View>
                </SubContainer>
            </LastYearData>
        </Card>
    )
}