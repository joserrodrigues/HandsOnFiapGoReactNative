/**
 * Controller do componente BusPosition
 */
import React from 'react';
import InfoComp2View from './InfoComp2View'

//Importa as actions
import {
    changeInfo,
} from '../../store/modules/mainInfo/actions';

//importa as funções useDispatch e useSelector do React Redux
import { useDispatch, useSelector } from 'react-redux';



const InfoComp2Controller = () => {

    //Busca a variavel info do Reducer
    const info = useSelector((state) => state.mainInfo.info);
    //Inicia o dispatch
    const dispatch = useDispatch();

    //função que será chamada ao clicar no botão
    const changeReducer = () => {
        //Despacha o Redux Action presente no changeInfo para chamar o Reducer
        dispatch(changeInfo('Info do Reducer'));
    }

    return (
        //Chamando o View e passando o props info e a funçao changeInfoSaga
        <InfoComp2View
            info={info}
            changeReducer={changeReducer}
        />
    )
}
export default InfoComp2Controller;