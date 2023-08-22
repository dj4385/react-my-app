import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/store';
import ApiService from '../../services/Api';
import { IForcastWeather, IHour, IRealtimeWeather } from '../../models/response';
import { helper } from '../../helper/helper';
import {FaTemperatureHigh} from "react-icons/fa";
import {PiWavesDuotone} from "react-icons/pi";
import { BsDropletHalf } from "react-icons/bs";
import {GiFlowerEmblem} from "react-icons/gi";

const TodayWeather = () => {

    const [todayWeather, setTodayWeather] = useState<IRealtimeWeather>();
    const [forcastWeather, setForcastWeather] = useState<IForcastWeather>();

    const {userIp} = useAppSelector((state) => state.UserIP_State);

    const getTodayWeather = async () => {
        try {
            const res: any = await ApiService.getRealtimeWeather(userIp.loc);
            if(res && res.status === 200) {
                const data: IRealtimeWeather = res.data;
                setTodayWeather(data);
            }
        } catch (error) {
            
        }
        
    }

    const getTodayForcast =async () => {
        try {
            const res: any = await ApiService.getForecastWeather(userIp.loc);
            if(res && res.status === 200) {
                const data: IForcastWeather = res.data;
                setForcastWeather(data);
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if(userIp?.loc) {
            getTodayWeather();
            getTodayForcast();
        }
    }, [userIp])

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold">
                    {todayWeather?.location.name}, {todayWeather?.location.country}
                </h1>
                <h1 className="text-4xl font-bold mt-5">
                    {todayWeather?.current.temp_c}<sup>o</sup> C
                </h1>
            </div>
            <div className="mt-5">
                <div className="bg-gray2 rounded-lg p-3">
                    <h1 className="text-2xl font-normal">Forcast Weather</h1>
                    <div className="flex flex-row mt-4 overflow-x-auto my-5">
                        {
                            forcastWeather?.forecast?.forecastday?.length ?
                                forcastWeather?.forecast?.forecastday[0]?.hour?.length ?
                                    forcastWeather?.forecast?.forecastday[0]?.hour?.map((h: IHour) => helper.convertTimestampToDateTime(h.time_epoch * 1000).getHours() >= helper.getCurrentDateTime().getHours() ? (
                                        <div className="bg-black mx-1 p-3 my-4 rounded-lg flex flex-col items-center justify-center min-w-[100px]">
                                            <p>
                                                
                                                {helper.convertTimestampToDateTime(h.time_epoch * 1000).getHours()}:
                                                {helper.convertTimestampToDateTime(h.time_epoch * 1000).getMinutes()} 
                                            </p>
                                            <p>icon</p>
                                            <p>
                                                {h.temp_c} <sup>o</sup> C
                                            </p>
                                        </div>
                                    ) : null )
                                : null
                            : null
                        }
                </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="bg-gray2 rounded-lg p-3">
                    <h1 className="my-4 text-2xl font-normal">Air Condition</h1>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-black rounded p-5 flex flex-row gap-4">
                            <div className='flex items-center justify-center'>
                                <FaTemperatureHigh style={{height: '100px', width: '50px'}} />
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <p className="text-gray text-sm">
                                    Real Feel
                                </p>
                                <p className='text-white text-xl'>
                                    {todayWeather?.current.feelslike_c}<sup>o</sup> C
                                </p>
                            </div>
                        </div>
                        <div className="bg-black rounded p-5 flex flex-row gap-4">
                            <div className='flex items-center justify-center'>
                                <PiWavesDuotone style={{height: '100px', width: '50px'}} />
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <p className="text-gray text-sm">
                                    Wind
                                </p>
                                <p className='text-white text-xl'>
                                    {todayWeather?.current.wind_kph} Kph - {todayWeather?.current.wind_dir}
                                </p>
                            </div>
                        </div>
                        <div className="bg-black rounded p-5 flex flex-row gap-4">
                            <div className='flex items-center justify-center'>
                                <BsDropletHalf style={{height: '100px', width: '50px'}} />
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <p className="text-gray text-sm">
                                    Humadity
                                </p>
                                <p className='text-white text-xl'>
                                    {todayWeather?.current.humidity}
                                </p>
                            </div>
                        </div>
                        <div className="bg-black rounded p-5 flex flex-row gap-4">
                            <div className='flex items-center justify-center'>
                                <GiFlowerEmblem style={{height: '100px', width: '50px'}} />
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <p className="text-gray text-sm">
                                    UV Index
                                </p>
                                <p className='text-white text-xl'>
                                    {todayWeather?.current.uv}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayWeather;