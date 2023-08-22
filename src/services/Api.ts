import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IForcastWeather, IRealtimeWeather, IUserIpInfo } from "../models/response";

export default class ApiService {

    static async getRealtimeWeather(loc: string) {
        try {
            const options: AxiosRequestConfig = {
                method: 'get',
                url: `${process.env.REACT_APP_WEATHER_API_URL}current.json`,
                params: {q: loc},
                headers: { 
                    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST, 
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
                }
            };
            const response = await axios.request<IRealtimeWeather>(options);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async getForecastWeather(loc: string) {
        try {
            const options: AxiosRequestConfig = {
                method: 'get',
                url: `${process.env.REACT_APP_WEATHER_API_URL}forecast.json`,
                params: {q: loc},
                headers: { 
                    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST, 
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
                }
            };
            const response: AxiosResponse = await axios.request<IForcastWeather>(options);
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
            const response = await axios.request<IUserIpInfo>(config);
            return response;
        } catch (error) {
            return error;
        }
    }
}
