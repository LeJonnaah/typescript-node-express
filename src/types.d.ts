export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

export type Visibility = "great" | "good" | "ok" | "poor";

export type Wind = "none" | "weak" | "strong";

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    temperature: number;
    visibility: Visibility;
    wind: Wind;
};

interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
};