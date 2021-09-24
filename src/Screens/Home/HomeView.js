//Importar o useState no componente
import React from 'react';
import styles from './HomeViewStyle';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'



const HomeView = (props) => {

    return (
        <View style={styles.container}>
            <Formik
                validationSchema={props.loginValidationSchema}
                initialValues={{ title: '', type: '' }}
                onSubmit={values => props.addInfo(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (
                    <>

                        <Text style={styles.text}>Produto</Text>
                        <TextInput
                            style={styles.textInput}
                            name="title"
                            placeholder="Titulo do Produto"
                            style={styles.textInput}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        {errors.title &&
                            <Text style={styles.messageError}>{errors.title}</Text>
                        }
                        <Text style={styles.text}>Tipo</Text>
                        <TextInput
                            name="type"
                            placeholder="Tipo de Produto"
                            style={styles.textInput}
                            onChangeText={handleChange('type')}
                            onBlur={handleBlur('type')}
                            value={values.type}
                        />
                        {errors.type &&
                            <Text style={styles.messageError}>{errors.type}</Text>
                        }
                        <TouchableOpacity
                            style={styles.buttonView}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
}
export default HomeView;