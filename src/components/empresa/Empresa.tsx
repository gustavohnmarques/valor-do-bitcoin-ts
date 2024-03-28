import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, Text, Image, ImageStyle } from 'react-native';
import FastImage from 'react-native-fast-image'
import { MoneyFormatter } from '../../utils/MoneyFormatter';

export type EmpresaProps = {
    nome: string;
    last: string;
    vol: number;
    data_atualizacao: string;
    img: string
};


function Empresa(dados: EmpresaProps): React.JSX.Element {

    return (
        <View style={styles.empresa}>
            <View style={styles.empresaContainer}>
                <FastImage
                    style={styles.empresaImg}
                    source={{
                        uri: dados.img,                                          
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />                
            </View>
            <View style={styles.empresaDetalhes}>
                <View style={styles.empresaDetalhesContainer}>
                    <Text style={styles.empresaNome}>{dados.nome}</Text>
                </View>
                <View style={styles.empresaDetalhesContainer}>
                    <Text style={styles.empresaValor}>R$ {MoneyFormatter({amount: dados.last, decimalCount: 2 })}</Text>
                </View>
                <View style={[styles.empresaDetalhesContainer, { alignItems: 'flex-end' }]}>
                    <Text style={styles.empresaVolume}>Vol: {dados.vol}</Text>
                </View>
            </View>
        </View>

    );
}

export default Empresa;

const styles = StyleSheet.create({
    empresa: {
        height: 120,
        width: '100%',
        backgroundColor: '#3A4555',
        borderRadius: 6,
        flexDirection: 'row',
        marginBottom: 20
    } as ViewStyle,

    empresaContainer: {
        height: 'auto',
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,

    empresaImg: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 10
    },

    empresaDetalhes: {
        flex: 1,
        padding: 15
    } as ViewStyle,

    empresaDetalhesContainer: {
        flex: 1
    } as ViewStyle,

    empresaNome: {
        fontSize: 15,
        fontWeight: '400',
        color: '#dfdfe0',
    } as TextStyle,

    empresaValor: {
        color: '#dfdfe0',
        fontSize: 24,
        fontWeight: 'bold',
    } as TextStyle,

    empresaVolume: {
        color: '#dfdfe0',
        fontSize: 14,
    } as TextStyle,

});