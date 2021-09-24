import React, { useState, useEffect, useRef } from 'react';
import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeController from '../Screens/Home/HomeController';
import ProductDetailController from '../Screens/ProductDetail/ProductDetailController';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const Stack = createStackNavigator();
const Routes = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeController} />
                    <Stack.Screen name="Detail" component={ProductDetailController} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}

// Somente utilizamos a declaração registerRootComponent 
// quando o componente for o determinado como o inicial no
// EntryPoint do Expo, que é o caso do HomeControler. 
// Caso não fosse, usaríamos a linha “export default HomeController”;
export default registerRootComponent(Routes);