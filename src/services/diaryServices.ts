import diaryData from './diaries.json'
import { DiaryEntry, Visibility, Weather, Wind } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => {
  return diaries
}

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry !== undefined) {
    const { wind, temperature, ...rest } = entry
    return rest
  }
    return undefined
}

export const addEntry = (date: string, weather: Weather, visibility: Visibility, temperature: number, wind: Wind): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    temperature,
    wind
  }

  diaries.push(newDiaryEntry)
  return newDiaryEntry
}