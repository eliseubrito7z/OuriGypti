import {Text, View} from "react-native";
import {ContactCard} from "./components/ContactCard";
import {ContainerWGap, Header, Title} from "../../components/DefaultComponents";
import contacts from '../../data/phoneNumbers.json'


export default function InformationCenter() {

    return (
        <ContainerWGap>
            <Header>
                <Title>
                    Centro de informações
                </Title>
            </Header>

            {contacts.map((contact, i) => {
                return (
                    <ContactCard
                        key={i}
                        localName={contact.localName}
                        address={contact.address}
                        phoneNumber={contact.phoneNumber}
                    />
                )
            })}

        </ContainerWGap>
    )
}