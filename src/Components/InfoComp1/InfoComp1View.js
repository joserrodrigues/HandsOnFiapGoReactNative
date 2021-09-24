import React from "react";
import { Button, View, Text } from "react-native";

/**
 * View do componente BusLine
 */
const InfoComp1View = (props) => {

    // Criando o View com a informação do Info e o botão para alterar a Saga
    return (
        <View>
            <Text> Info: {props.info}</Text>
            <Button onPress={() => props.changeInfoSaga()} title="Alterar Info Saga 2" />
        </View>
    )
}
export default InfoComp1View;