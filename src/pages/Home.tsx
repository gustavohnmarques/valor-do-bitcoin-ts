import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, ViewStyle, TextStyle, ImageStyle, RefreshControl } from 'react-native';
import Empresa, { EmpresaProps } from '../components/empresa/Empresa';
import { Reponse, getEmpresas } from '../services/getEmpresas';
import Skeleton from '../components/empresa/Skeleton';
import Icon from 'react-native-vector-icons/FontAwesome';
import BootSplash from "react-native-bootsplash";

function Home(): React.JSX.Element {

    const [empresas, setEmpresas] = useState<Reponse>();
    const [refreshing, setRefreshing] = useState(false);

    //Ordenação
    const [ordemDesc, setOrdemDesc] = useState(true);

    function renderizarEmpresas(): React.JSX.Element {
        return (
            <>
                {empresas?.data?.map((item: EmpresaProps) => {
                    return (<Empresa {...item} key={item.id} />)
                })}
            </>
        )
    }

    function renderizarSkeleton(): React.JSX.Element {
        return (
            <>
                {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                    return (<Skeleton key={i} />)
                })}
            </>
        )
    }

    const buscarEmpresas = () => {
        try {
            setEmpresas({ data: [], status: 0 });            
            setRefreshing(true);
            getEmpresas().then((res) => {
                setEmpresas({ data: ordenar(res.data), status: res.status })                  
                setRefreshing(false);
            }).catch((error) => {

            })
        } catch (error) {
            console.log(error)
        }
    }

    const ordenar = (array: EmpresaProps[]) => {        
        return array.sort(function (a: EmpresaProps, b: EmpresaProps) {            
            return ordemDesc ? Number(a.last) - Number(b.last) : Number(b.last) - Number(a.last)
        })
    }

    useEffect(() => {
        if(empresas?.data?.length != undefined){
            setEmpresas({ data: ordenar(empresas?.data as EmpresaProps[]), status: empresas?.status as number })
        }        
    }, [ordemDesc]);

    useEffect(() => {
        BootSplash.hide({ fade: true });
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

                <View style={styles.ordenacaoContainer}>
                    <View style={styles.ordenacaoBotao} onTouchStart={() => setOrdemDesc(!ordemDesc)}>
                        <Icon name={!ordemDesc ? "sort-amount-desc" : "sort-amount-asc"} size={27} color="#fff" />
                    </View>
                </View>

                {!empresas?.data?.length ? renderizarSkeleton() : renderizarEmpresas()}
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

    ordenacaoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        height: 35,
        marginBottom: 20
    } as ViewStyle,

    ordenacaoBotao: {
        height: 35,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,



});