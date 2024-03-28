import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StatusBar, ScrollView, StyleSheet, ViewStyle, TextStyle, Text, useWindowDimensions, Image, ImageStyle, RefreshControl } from 'react-native';
import Empresa, { EmpresaProps } from '../components/empresa/Empresa';
import { Reponse, getEmpresas } from '../services/getEmpresas';

function Home(): React.JSX.Element {

    const [empresas, setEmpresas] = useState<Reponse>();
    const [refreshing, setRefreshing] = useState(false);

    function RenderizarEmpresas(): React.JSX.Element {
        return (
            <>
                {empresas?.data?.map((item: EmpresaProps) => {
                    return (<Empresa {...item} key={item.id} />)
                })}
            </>
        )
    }

    const buscarEmpresas = () => {
        try {
            setRefreshing(true);
            getEmpresas().then((res) => {
                setEmpresas(res)
                setRefreshing(false);
            }).catch((error) => {

            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscarEmpresas();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={buscarEmpresas} />
                }>
            
                {RenderizarEmpresas()}
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