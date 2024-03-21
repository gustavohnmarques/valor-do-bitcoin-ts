import React from 'react';
import { View, SafeAreaView, StatusBar, ScrollView, StyleSheet, ViewStyle, TextStyle, Text, useWindowDimensions, Image, ImageStyle } from 'react-native';

function App(): React.JSX.Element {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
                <View style={styles.empresa}>
                    <View style={styles.empresaContainer}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/768px-Binance_Logo.svg.png' }} style={styles.empresaImg} />
                    </View>
                    <View style={styles.empresaDetalhes}>
                        <View style={styles.empresaDetalhesContainer}>
                            <Text style={styles.empresaNome}>Binance</Text>
                        </View>
                        <View style={styles.empresaDetalhesContainer}>
                            <Text style={styles.empresaValor}>R$ 340.000,00</Text>
                        </View>
                        <View style={[styles.empresaDetalhesContainer, { alignItems: 'flex-end' }]}>
                            <Text style={styles.empresaVolume}>Vol: 340.7</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default App;

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