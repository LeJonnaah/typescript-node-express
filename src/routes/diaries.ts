import express from 'express'

import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  const diaries = diaryServices.getEntries()
  res.send(diaries)
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary !== undefined) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  const { date, weather, visibility, temperature, wind } = _req.body
  const newDiaryEntry = diaryServices.addEntry(date, weather, visibility, temperature, wind)
  res.json(newDiaryEntry)
})

export default router
