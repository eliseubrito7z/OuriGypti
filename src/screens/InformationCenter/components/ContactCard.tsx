import {Card} from "../../../components/Card";
import {CardDescription, CardTitle} from "../../Information/components/InformationCard";
import {Button, Image, Linking, Pressable, Text, View} from "react-native";
import styled from "styled-components/native";
import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons from "react-native-vector-icons/Ionicons";

type phoneNumber = {
    ddd: string
    number: string
}

type address =  {
    street: string
    number: string
    district: string
}

interface ContactCardProps {
    localName: string
    address: address
    phoneNumber: phoneNumber
}

const AddressContainer = styled.View`
  width: 65%;
  align-items: start;
  justify-content: center;
`

const ButtonsContaier = styled.View`
  width: 35%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Container = styled.View`
  border-radius: 16px;
  background: white;
  
  box-sizing: border-box;
  
  
  padding: 28px;
  flex-direction: row;
`

function checkPhoneNumber({ ddd, number }: phoneNumber) {
    if (ddd.length != 2)
        throw new Error('DDD lenght must be 2 digits long')
    if (number.length != 8)
        throw new Error('Phone number must be 8 digits long')


}

export function ContactCard({ phoneNumber, localName, address }: ContactCardProps) {

    checkPhoneNumber(phoneNumber)

    const handleOpenPhone = () => {
        const number = `tel:${'0' + phoneNumber.ddd + phoneNumber.number}`;
        Linking.openURL(number)
            .catch((err) => console.error('Error when open phone', err));
    };

    const handleOpenMessages = () => {
        const number = `sms:${'0' + phoneNumber.ddd + phoneNumber.number}`;
        Linking.openURL(number)
            .catch((err) => console.error('Error when open sms', err));
    };

    return (
        <Container>
            <AddressContainer>
                <CardTitle>
                    {localName}
                </CardTitle>
                <CardDescription>
                    {`${address.street}, ${address.number} - ${address.district}`}
                </CardDescription>
            </AddressContainer>
            <ButtonsContaier>
                    <Pressable onPress={handleOpenPhone}>
                        <FeatherIcons
                            name={'phone'}
                            size={24}
                            color={'white'}
                            style={{
                                backgroundColor: "#42A85D",
                                padding: 10,
                                borderRadius: 100,
                            }}
                        />
                    </Pressable>

                    <Pressable onPress={handleOpenMessages}>
                        <Ionicons
                            name={'chatbox-ellipses-sharp'}
                            size={24}
                            color={'white'}
                            style={{
                                backgroundColor: "#298FE5",
                                padding: 10,
                                borderRadius: 100,
                            }}
                        />
                    </Pressable>

            </ButtonsContaier>
        </Container>
    )
}