/**
 * Controller do componente BusLine
 */
import React from 'react';
import InfoComp1View from './InfoComp1View'

//Importa as actions
import {
    getNewInfo,
} from '../../store/modules/mainInfo/actions';

//importa as funções useDispatch e useSelector do React Redux
import { useDispatch, useSelector } from 'react-redux';


const InfoComp1Controller = () => {

    //Busca a variavel info do Reducer
    const info = useSelector((state) => state.mainInfo.info);
    //Inicia o dispatch
    const dispatch = useDispatch();

    //função que será chamada ao clicar no botão
    const changeInfoSaga = () => {
        //Despacha o Redux Action presente no getNewInfo para chamar a Saga
        dispatch(getNewInfo());
    }

    return (
        //Chamando o View e passando o props info e a funçao changeInfoSaga
        <InfoComp1View
            info={info}
            changeInfoSaga={changeInfoSaga}
        />
    )
}
export default InfoComp1Controller;