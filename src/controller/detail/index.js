import baseUrl from '../../constant'
import fetchService from '../../services'
import Load from '../../utils'

const Controller = {
  getDetail: async (req, res) => {
    const { key } = req.params

    try {
      const response = await fetchService(`${baseUrl}/${key}`, res)

      return Load.detail(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Controller
