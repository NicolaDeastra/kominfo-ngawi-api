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

  detail: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)

      const element = $('#the-post')
      const elementPost = $('.entry')
      const relatedElement = $('#related_posts')

      let object = {}
      let title
      let img
      let imgDesc
      let time
      let content = []
      let related = []
      let figure = []

      title = element.find('.post-inner h1').text()
      img = element.find('.single-post-thumb img').attr('src')
      imgDesc = element.find('.single-post-caption').text()
      time = element.find('.post-meta .tie-date').text()

      elementPost.find('p').each((i, e) => {
        let text = $(e).text()

        content.push(text)
      })

      relatedElement.find('.related-item').each((i, e) => {
        let relateObject = {}
        let title = $(e).find('h3').text()
        let image = $(e).find('.post-thumbnail a img').attr('src')
        let time = $(e).find('.post-meta span').text()
        let href = $(e).find('h3 a').attr('href').split('/')
        let key = href.slice(3, 4).join('/')

        relateObject.title = title
        relateObject.image = image
        relateObject.time = time
        relateObject.key = key

        related.push(relateObject)
      })

      object.title = title
      object.img = img
      object.imgDesc = imgDesc
      object.time = time
      object.figure = figure
      object.content = content.filter((x) => x)
      object.related = related

      return res.send({
        method: req.method,
        status: true,
        results: object,
      })
    } catch (error) {
      return error
    }
  },
}

export default Load
