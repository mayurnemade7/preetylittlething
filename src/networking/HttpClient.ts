import { axiosInstance } from "./AxioConfig";

export default interface HttpClientRequestParameters {
    apiUrl: string;
    payload?: object | undefined;
}



export class HttpClient {
    get<T>(parameters: HttpClientRequestParameters): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { apiUrl } = parameters;
           
            axiosInstance
                .get(apiUrl)
                .then((response: any) => {
                    
                    if (response && response.status === 200) {
                        resolve(response.data as T);
                    } else {
                        reject(response);
                    }
                })
                .catch((response: any) => {
                    reject(response);
                });
        });
    }
}
