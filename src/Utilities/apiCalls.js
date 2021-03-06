export const fetchFeaturedArticles = async(category) => {
  const key = 'h2ShyL1jhRoQ5W0jssY22lJA9mAYaVRR'
  const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${key}`)
  const data = await response.json();

  return cleanData(data)
}

const cleanData = (data) => {
  return data.results.map(result => {
    const {
      title,
      abstract, 
      url, 
      byline,
      multimedia,
      uri,
      published_date
    } = result

    const split = uri.split('/')
    const id = split[3]

    return {
      'title': title,
      'abstract': abstract,
      'url': url,
      'byline': byline,
      'multimedia': multimedia,
      'id': id,
      'published': published_date
    }
  })

}