import { Container,  TopContainer, Image, CButton,  Title } from "./styles"
import { View } from "react-native"


export default function Home({ navigation }) {

    return (

        <Container>

            <Title>Jogo da Cobrinha</Title>

            <View>
                <CButton title="Jogar" onPress={() => navigation.navigate("Game")} />
            </View>
        </Container>
    )
}