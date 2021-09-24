/**
 * Objeto que reúne as sagas deste módulo
 */
//Importa os effects do Redux-Saga 
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../Services/api';
import qs from 'qs';

// Importa as funções Actions que serão chamadas pelo Saga
import {
    changeInfo,
} from './actions';



//Saga responsável por Buscar a informação e alterar o Reducer
function* getNewInfo() {
    console.log("SAGA - getNewInfo");

    //Chama o método assícrono getInfo e retorna a informação após executar a informação    
    const data = qs.stringify({
        token: "{Your token Here}",
        data: {
            name: "nameFirst",
            email: "internetEmail",
            phone: "phoneHome",
            _repeat: 300
        }
    });
    const dataReturn = yield call(api.post, '/q', data);

    console.log("SAGA - Retorno do Call GetInfo ");
    console.log(dataReturn)
    console.log(dataReturn.data[0].email + " - " + dataReturn.data[0].phone)
    //Chama a action ChangeInfo e despacha a ReduxAction
    yield put(changeInfo(dataReturn.data[0].email + " - " + dataReturn.data[0].phone));
}

//Junta todos as sagas deste objeto
export default all([
    //executa as operações recebidas e retorna o valor da última
    // Atenção ao busInfo/GET_NEW_INFO, ele é o link chamado no ACTION 
    // para executar a Action
    takeLatest('mainInfo/GET_NEW_INFO', getNewInfo),
]);