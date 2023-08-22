
export interface IUserIpInfo {
    ip: string,
    hostname: string,
    city: string,
    region: string,
    country: string,
    loc: string,
    org: string,
    postal: string,
    timezone: string
}

export interface IRealtimeWeather {
    current: ICurrent,
    location: ILocation
}

export interface IForcastWeather {
    current: ICurrent;
    location: ILocation;
    forecast: IForcast;
}

export interface IForcast {
    forecastday: IForcastDay[]
}

export interface IForcastDay {
    astro: IAstro;
    date: string;
    date_epoch: number;
    day: ICurrent;
    hour: IHour[]
}

export interface IHour extends ICurrent {
    time_epoch: number
}

export interface IAstro {
    is_moon_up: number
    is_sun_up: number
    moon_illumination: string
    moon_phase: string
    moonrise: string
    moonset: string
    sunrise: string
    sunset: string;
}

export interface ICurrent {
    last_updated_epoch: number,
    last_updated: string,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: ICondition,
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    vis_km: number,
    vis_miles: number,
    uv: number,
    gust_mph: number,
    gust_kph: number
}

export interface ILocation {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string
}

export interface ICondition {
    code: number,
    icon: string,
    text: string
}


