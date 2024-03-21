import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, Text, Image, ImageStyle } from 'react-native';

export type EmpresaProps = {
    empresa: string;
    valor: number;    
    volume: number;
    img: string;
    id: number
  };
  

function Empresa(dados: EmpresaProps): React.JSX.Element {

    return (
        <View style={styles.empresa}>
            <View style={styles.empresaContainer}>
                <Image source={{ uri: dados.img }} style={styles.empresaImg} />
            </View>
            <View style={styles.empresaDetalhes}>
                <View style={styles.empresaDetalhesContainer}>
                    <Text style={styles.empresaNome}>{dados.empresa}</Text>
                </View>
                <View style={styles.empresaDetalhesContainer}>
                    <Text style={styles.empresaValor}>R$ {dados.valor}</Text>
                </View>
                <View style={[styles.empresaDetalhesContainer, { alignItems: 'flex-end' }]}>
                    <Text style={styles.empresaVolume}>Vol: {dados.volume}</Text>
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
        resizeMode: 'contain'
    } as ImageStyle,

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