import {ScrollView, Text} from "react-native";
import {Question, Response, ResponseContainer, SubScreensContainer} from "./defaultStyles";
import todoTexts from '../../../data/todoTexts.json'

export function Todo() {
    return (
        <ScrollView>
            <SubScreensContainer>
                <Question>
                    O que fazer
                </Question>
                <ResponseContainer>
                    <Response>
                        {todoTexts.aguaParada}
                    </Response>
                    <Response>
                        {todoTexts.telas}
                    </Response>
                    <Response>
                        {todoTexts.larvicidas}
                    </Response>
                </ResponseContainer>
            </SubScreensContainer>
        </ScrollView>
    )
}