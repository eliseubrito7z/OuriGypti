import styled from "styled-components/native"
import {Image, SafeAreaView, ScrollView, View} from "react-native";
import Logo from "../../assets/Logo";
import {WeeklyUpdates} from "../../components/WeeklyUpdates";
import {LastYear} from "../../components/LastYear";
import { MortalityLevel } from "../../components/MortalityLevel";
import {IncidenceChart} from "./components/IncidenceChart"


const Container = styled.ScrollView`
  padding: 36px 16px 0 16px;
  gap: 20px;
  border: 1px solid red;
`

const Header = styled.View`
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
`

export default function Home() {
  return (
      <Container
          showsVerticalScrollIndicator={false}
          // overScrollMode={'never'}
          style={{
              flex: 1,
          }}
      >
          <Header>
              <Logo />
              <Image source={require('../../assets/radar-icon-1.png')} />
          </Header>

          {/*<View>*/}
          {/*    <WeeklyUpdates />*/}
          {/*</View>*/}

          <View style={{
              gap: 20,
              paddingBottom: 150
          }}>
              <WeeklyUpdates />
              <LastYear />
              <MortalityLevel />
              <IncidenceChart />
          </View>
      </Container>
  )
}