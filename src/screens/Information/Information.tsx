import styled from "styled-components/native";
import {SearchBar} from "./components/SearchBar";
import {InformationCard} from "./components/InformationCard";
import {ContainerWGap, Header, Title} from "../../components/DefaultComponents";
import {Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";


const InformationIcon = styled.Image`
`



export default function Information() {
    const navigation = useNavigation()

    type routes = 'spread' | 'symptons' | 'prevention' | 'todo'

    function handleCardDetails(route: routes) {
        // @ts-ignore
        navigation.navigate(route)
    }

    return (
        <ContainerWGap>
            <Header>
                <Title>
                    Informações
                </Title>
            </Header>
            <SearchBar />

            <Pressable onPress={() => handleCardDetails('spread')}>
                <InformationCard
                    imageBg={'#D8D6EE'}
                    title={'Como se espalha?'}
                    description={'Aprenda como os vírus transmitidos pelo Aedes Aegypti se espalha'}
                >
                    <InformationIcon source={require('../../assets/SpreadIcon.png')} />
                </InformationCard>
            </Pressable>

            <Pressable onPress={() => handleCardDetails('symptons')}>
                <InformationCard
                    imageBg={'#FFE8E8'}
                    title={'Sintomas'}
                    description={'Aprenda como os vírus transmitidos pelo Aedes Aegypti se espalha'}
                >
                    <InformationIcon source={require('../../assets/IntersectionIcon.png')} />
                </InformationCard>
            </Pressable>

            <Pressable onPress={() => handleCardDetails('prevention')}>
                <InformationCard
                    imageBg={'#D6EEDE'}
                    title={'Prevenção & tratamento'}
                    description={'Aprenda como os vírus transmitidos pelo Aedes Aegypti se espalha'}
                >
                    <InformationIcon source={require('../../assets/ShieldIcon.png')} />
                </InformationCard>
            </Pressable>

            <Pressable onPress={() => handleCardDetails('todo')}>
                <InformationCard
                    imageBg={'#E8F5FF'}
                    title={'O que fazer'}
                    description={'Aprenda como os vírus transmitidos pelo Aedes Aegypti se espalha'}
                >
                    <InformationIcon source={require('../../assets/TodoIcon.png')} />
                </InformationCard>
            </Pressable>
        </ContainerWGap>
    )
}