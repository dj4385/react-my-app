import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/store';
import ApiService from '../../services/Api';
import { IRealtimeWeather } from '../../models/response';

const TodayWeather = () => {

    const [todayWeather, setTodayWeather] = useState<IRealtimeWeather>();

    const {userIp} = useAppSelector((state) => state.UserIP_State);

    const getTodayWeather = async () => {
        const res: any = await ApiService.getRealtimeWeather(userIp.loc);
        if(res && res.status === 200) {
            const data: IRealtimeWeather = res.data;
            setTodayWeather(data);
        }
    }

    useEffect(() => {
        if(userIp?.loc) {
            getTodayWeather();
        }
    }, [userIp])

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold">
                    {todayWeather?.location.name}, {todayWeather?.location.country}
                </h1>
                <h1 className="text-4xl font-bold mt-10">
                    {todayWeather?.current.temp_c}<sup>o</sup> C
                </h1>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default TodayWeather;