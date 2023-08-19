import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class ApiService {

    static async getRealtimeWeather() {
        try {
            const options: AxiosRequestConfig = {
                method: 'get',
                url: `${process.env.REACT_APP_WEATHER_API_URL}current.json`,
                params: {q: '53.1,-0.13'},
                headers: { 
                    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST, 
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
                }
            };
            const response: AxiosResponse = await axios.request(options);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async getForecastWeather() {
        try {
            const options: AxiosRequestConfig = {
                method: 'get',
                url: `${process.env.REACT_APP_WEATHER_API_URL}forecast.json`,
                params: {q: '53.1,-0.13'},
                headers: { 
                    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST, 
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
                }
            };
            const response: AxiosResponse = await axios.request(options);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async getIpInfo() {
        try {
            const config: AxiosRequestConfig = {
                url: 'https://ipinfo.io',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer 9cd8657c8e1f2c`
                }
            }
            const response: AxiosResponse = await axios.request(config);
            return response;
        } catch (error) {
            return error;
        }
    }
}
