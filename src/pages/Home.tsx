import React from 'react';
import { View, SafeAreaView, StatusBar, ScrollView, StyleSheet, ViewStyle, TextStyle, Text, useWindowDimensions, Image, ImageStyle } from 'react-native';
import Empresa, { EmpresaProps } from '../components/empresa/Empresa';

function Home(): React.JSX.Element {

    const dados: EmpresaProps = {
        empresa: 'Binance',
        valor: 35000,
        volume: 10,
        img: 'https://i.imgur.com/sar7suv.png',
        id: 0
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
            <Empresa {...dados} />

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#242c35",
        padding: 10
    } as ViewStyle,

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