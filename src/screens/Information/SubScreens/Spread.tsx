import {ScrollView} from "react-native";
import {Question, Response, ResponseContainer, SubScreensContainer} from "./defaultStyles";
import spreadTexts from '../../../data/spreadTexts.json'

export function Spread() {
    return (
        <ScrollView>
            <SubScreensContainer>
                <Question first>
                    Como se espalha?
                </Question>
                <Response>
                    {spreadTexts.introducao}
                </Response>

                <Question>
                    Aparência do mosquito
                </Question>
                <Response>
                    {spreadTexts.aparencia}
                </Response>


                <Question>
                    Transmissão
                </Question>
                <ResponseContainer>
                    <Response>
                        {spreadTexts.transmissao}
                    </Response>

                    <Response>
                        {spreadTexts.p1}
                    </Response>

                    <Response>
                        {spreadTexts.p2}
                    </Response>
                </ResponseContainer>
            </SubScreensContainer>
        </ScrollView>
    )
}