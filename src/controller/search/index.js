import baseUrl from '../../constant'
import fetchService from '../../services'
import Load from '../../utils'

const Controller = {
  getSearch: async (req, res) => {
    const { search = '', page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/page/${page}/?s=${search}`,
        res,
      )

      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Controller
