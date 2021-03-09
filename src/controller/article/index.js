import baseUrl from '../../constant'
import fetchService from '../../services'
import Load from '../../utils'

const Article = {
  getArticle: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/artikel//page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Article
