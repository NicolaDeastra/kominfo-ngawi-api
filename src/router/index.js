import express from 'express'

import Berita from '../controller/berita'

const router = express.Router()

router.get('/berita-daerah', Berita.getBeritaDaerah)
router.get('/berita-kominfo', Berita.getBeritaKominfo)

export default router
