import React from "react";
import { Button, View, Text } from "react-native";

/**
 * View do componente BusPosition
 */
const InfoComp2View = (props) => {

    // Criando o View com a informação do Info e o botão para alterar o Reducer
    return (
        <View>
            <Text> Info: {props.info}</Text>
            <Button onPress={() => props.changeReducer()} title="Alterar Reducer" />
        </View>
    )
}
export default InfoComp2View;