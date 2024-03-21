import axios, { AxiosResponse, AxiosError } from 'axios';
import { EmpresaProps } from '../components/empresa/Empresa';

export type ResponseError = {
    status: number,
    code: string,
    message: string,
}

export type Reponse = {
    status: number,
    data: EmpresaProps[],
}

export const getEmpresas = () => {
    return new Promise<Reponse>((resolve, reject) => {
        axios.get('https://65fb870614650eb2100a194b.mockapi.io/api/v1/empresas').then((response: Reponse) => {
            resolve(response)
        }).catch((error: ResponseError) => {                    
            reject(error)
        })
    });
};
