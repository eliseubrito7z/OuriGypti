import {ScrollView} from "react-native";
import {Question, Response, ResponseContainer, SubScreensContainer} from "./defaultStyles";
import preventionsTexts from '../../../data/preventionsTexts.json'

export function Prevention() {
    return (
        <ScrollView>
            <SubScreensContainer>

                <Question first>
                    Prevenção
                </Question>
                <ResponseContainer>
                    <Response>
                        {preventionsTexts.controle}
                    </Response>
                    <Response>
                        {preventionsTexts.larvicidas.introducao}
                    </Response>
                    <Response>
                        {preventionsTexts.larvicidas.p1}
                    </Response>
                    <Response>
                        {preventionsTexts.monitoramento}
                    </Response>
                    <Response>
                        {preventionsTexts.educacao}
                    </Response>
                </ResponseContainer>

                <Question>
                    Tratamento
                </Question>
                <Response>
                    {preventionsTexts.tratamento}
                </Response>

            </SubScreensContainer>
        </ScrollView>
    )
}