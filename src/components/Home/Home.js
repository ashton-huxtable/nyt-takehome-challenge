import React, {useState, useEffect} from 'react';
import { fetchFeaturedArticles } from '../../Utilities/apiCalls';
import { Articles } from '../Articles/Articles';


const Home = () => {

  const [category, setCategory] = useState('home')
  const [articles, setArticles] = useState([])



  useEffect(() => {
    fetchFeaturedArticles(category)
      .then(data => setArticles(data))
  }, [category])

  console.log(articles, 'articles')

  return(
    <main>
      <h1>Hello, world!</h1>
      <section className='articles'>
        <Articles articles={articles}/>
      </section>

    </main>

  )
}

export default Home;