import { useEffect } from "react";
import ApiService from "../../services/Api";
import { IUserIpInfo } from "../../models/response";
import { CryptoService } from "../../services/Crypto";
import { LocalStorageService } from "../../services/LocalStorage";
import { STORAGEENUM } from "../../models/enums";
import { useAppDispatch } from "../../redux/store";
import { storeUserIpInfo } from "../../redux/reducer/UserIP_State";
import TodayWeather from "../../sections/weather/TodayWeather";

const Weather = () => {

    const dispatch = useAppDispatch();

    const getUserIp = async () => {
        try {
            const res: any = await ApiService.getIpInfo();
            if(res && res.status === 200) {
                const ipInfo: IUserIpInfo = res.data;
                dispatch(storeUserIpInfo(ipInfo));
                LocalStorageService.setItem(STORAGEENUM.ipInfo, CryptoService.encrypt(JSON.stringify(ipInfo)));
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const ipInfo = LocalStorageService.getItem(STORAGEENUM.ipInfo);
        if(!ipInfo) {
            getUserIp();
        } else {
            const plainData = CryptoService.decrypt(ipInfo);
            const userIpData = JSON.parse(plainData);
            dispatch(storeUserIpInfo(userIpData));
        }
    }, [])

    return (
        <div className="">
            <div className="">
                <TodayWeather />
            </div>
            <div></div>
        </div>
    )
}

export default Weather;