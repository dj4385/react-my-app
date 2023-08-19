import { useEffect } from "react";
import ApiService from "../../services/Api";

const Weather = () => {

    useEffect(() => {
        ApiService.getRealtimeWeather();
    }, [])

    return (
        <>
            <h1>Weather</h1>
        </>
    )
}

export default Weather;