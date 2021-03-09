import baseUrl from '../../constant'
import fetchService from '../../services'
import Load from '../../utils'

const Berita = {
  getBeritaDaerah: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/berita/berita-daerah/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getBeritaKominfo: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/berita/berita-kominfo/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getBeritaNasional: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/berita/berita-nasional/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Berita
