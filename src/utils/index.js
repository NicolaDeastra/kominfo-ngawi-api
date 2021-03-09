import cheerio from 'cheerio'

const Load = {
  articles: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.content')

      let title
      let thumb
      let time
      let desc
      let href
      let key

      let media = []

      element.find('.item-list').each((i, e) => {
        title = $(e).find('.post-title').text()
        thumb = $(e).find('.post-thumbnail a img').attr('src')
        time = $(e).find('.post-meta .tie-date').text()
        desc = $(e).find('.entry p').text()
        href = $(e).find('h2 a').attr('href').split('/')
        key = href.slice(3, 4).join('/')

        media.push({
          title,
          thumb,
          time,
          desc,
          key,
        })
      })

      return res.send({
        method: req.method,
        status: true,
        result: media,
      })
    } catch (error) {
      return error
    }
  },
}

export default Load
