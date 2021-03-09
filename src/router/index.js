import express from 'express'

import Controller from '../controller/detail'
import Berita from '../controller/berita'
import Article from '../controller/article'

const router = express.Router()

router.get('/berita-daerah', Berita.getBeritaDaerah)
router.get('/berita-kominfo', Berita.getBeritaKominfo)
router.get('/berita-nasional', Berita.getBeritaNasional)

router.get('/article', Article.getArticle)

router.get('/detail/:key', Controller.getDetail)

export default router
