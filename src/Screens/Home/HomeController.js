import React from 'react';
import HomeView from './HomeView';
import * as yup from 'yup'


const HomeController = ({ navigation, route }) => {

    const loginValidationSchema = yup.object().shape({
        title: yup
            .string()
            .min(4, ({ min }) => `O nome deve ter no mínimo ${min} characters`)
            .required('Nome é obrigatório'),
        type: yup
            .string()
            .min(4, ({ min }) => `O tipo de produto deve ter no mínimo ${min} characters`)
            .required('Tipo de produto é obrigatório'),
    });


    const addInfo = (values) => {
        console.log(values);
    }

    //Passando as informações para o View
    return <HomeView
        loginValidationSchema={loginValidationSchema}
        addInfo={addInfo}
    />;
}
export default HomeController;