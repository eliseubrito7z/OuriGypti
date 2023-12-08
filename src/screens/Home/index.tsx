import styled from "styled-components/native"
import {Image, SafeAreaView, ScrollView, View} from "react-native";
import Logo from "../../assets/Logo";
import {WeeklyUpdates} from "../../components/WeeklyUpdates";
import {LastYear} from "../../components/LastYear";
import { MortalityLevel } from "../../components/MortalityLevel";
import {IncidenceChart} from "./components/IncidenceChart"
import {Cases} from "../../components/Cases";


const Container = styled.ScrollView`
  padding: 36px 16px 0 16px;
  gap: 20px;
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

          <View style={{
              marginTop: 20,
              gap: 20,
              paddingBottom: 150
          }}>
              <WeeklyUpdates />
              <LastYear />
              <MortalityLevel />
              <Cases />
              <IncidenceChart />
          </View>
      </Container>
  )
}