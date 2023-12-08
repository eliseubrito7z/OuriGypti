import Dash from "react-native-dash";
import styled from "styled-components/native";

const DotsContainer = styled.View`
  flex: 1;
  overflow: hidden;
`

export function Dots() {
    return (
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
    )
}