//Importar o useState no componente
import React from "react";
import { View } from 'react-native';
import InfoComp1Controller from '../../Components/InfoComp1/InfoComp1Controller';
import InfoComp2Controller from '../../Components/InfoComp2/InfoComp2Controller';

const HomeController = () => {


    //Passando a variavel information como o props info e a função onClicked
    return (
        <View>
            <InfoComp1Controller />
            <InfoComp2Controller />
        </View>
    )
}

export default HomeController;