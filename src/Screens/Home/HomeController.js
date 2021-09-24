//Importar o useState no componente
import React, { useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import HomeView from './HomeView';

const HomeController = ({ navigation }) => {


    //Declarando o state selectedID
    const [selectedID, setSelectedID] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    //Data do FlatList
    const data = [
        { _id: 1, title: "Geladeira", type: "Eletrodomésticos" },
        { _id: 2, title: "TV", type: "Eletrônicos" },
        { _id: 3, title: "Fogão", type: "Eletrodomésticos" },
        { _id: 4, title: "Video Game", type: "Eletrônicos" },
        { _id: 5, title: "Microondas", type: "Eletrodomésticos" },
        { _id: 6, title: "Notebook", type: "Eletrônicos" }
    ];

    //Clicou para selecionar Item
    const onSelected = (item) => {
        setSelectedID(item._id)
        navigation.navigate('Detail', {
            info: item
        });
    }

    //Clicou no On Refresh
    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            setSelectedID(-1)
        }, 2000);
    }

    //Passando as informações para o View
    return <HomeView
        items={data}
        selectedID={selectedID}
        refreshing={refreshing}
        onSelected={onSelected}
        onRefresh={onRefresh}
    />;
}

export default HomeController;