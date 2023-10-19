import express from 'express';

import * as diaryServices from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
    const diaries = diaryServices.getNonSensitiveDiaries();
    res.send(diaries);
});

router.post('/', (_req, res) => {
    const newDiaryEntry = diaryServices.addDiary();
    res.json(newDiaryEntry);
});

export default router;