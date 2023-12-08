import {ScrollView} from "react-native";
import {Question, Response, ResponseContainer, SubScreensContainer} from "./defaultStyles";
import symptonsTexts from '../../../data/symptonsTexts.json'

export function Symptons() {
    return (
        <ScrollView>
            <SubScreensContainer>
                <Question first>
                    Sintomas
                </Question>
                <Response>
                    {symptonsTexts.introducao}
                </Response>

                <Question>
                    Dengue
                </Question>
                <Response>
                    {symptonsTexts.dengue}
                </Response>

                <Question>
                    Chikungunya
                </Question>
                <Response>
                    {symptonsTexts.chikungunya}
                </Response>

                <Question>
                    Zika
                </Question>
                <Response>
                    {symptonsTexts.zika}
                </Response>

                <Question>
                    Semelhanças
                </Question>
                <ResponseContainer>
                    <Response>
                        {symptonsTexts.p1}
                    </Response>
                    <Response>
                        {symptonsTexts.p2}
                    </Response>
                </ResponseContainer>

            </SubScreensContainer>
        </ScrollView>
    )
}