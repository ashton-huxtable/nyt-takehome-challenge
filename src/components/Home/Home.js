import React, {useState, useEffect} from 'react';
import { fetchFeaturedArticles } from '../../Utilities/apiCalls';

const Home = () => {

  const [category, setCategory] = useState('home')
  const [articles, setArticles] = useState([])



  useEffect(() => {
    fetchFeaturedArticles(category)
      .then(data => setArticles(data))
  }, [category])

  console.log(articles, 'articles')

  return(
    <h1>Hello, world!</h1>
  )
}

export default Home;