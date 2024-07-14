export interface WeatherData {
    "@context": (string | ContextObject)[];
    type: string;
    geometry: Geometry;
    properties: Properties;
}

export interface ContextObject {
    "@version": string;
    "wx": string;
    "geo": string;
    "unit": string;
    "@vocab": string;
}

interface Geometry {
    type: string;
    coordinates: number[][][];
}

interface Properties {
    units: string;
    forecastGenerator: string;
    generatedAt: string;
    updateTime: string;
    validTimes: string;
    elevation: Elevation;
    periods: Period[];
}

interface Elevation {
    unitCode: string;
    value: number;
}

interface Period {
    number: number;
    name: string;
    startTime: string;
    endTime: string;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend: string;
    probabilityOfPrecipitation: ProbabilityOfPrecipitation;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}

interface ProbabilityOfPrecipitation {
    unitCode: string;
    value: number | null;
}