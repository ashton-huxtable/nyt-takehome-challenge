import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchFeaturedArticles } from '../../Utilities/apiCalls';
import { Articles } from '../Articles/Articles';
import { Details } from '../Details/Details'


const Home = () => {

  const [category, setCategory] = useState('home')
  const [allArticles, setAllArticles] = useState([])



  useEffect(() => {
    fetchFeaturedArticles(category)
      .then(data => setAllArticles(data))
  }, [category])

  console.log(allArticles, 'articles')

  return(
    <main>
      <h1>NYT Top Stories</h1>
      <Switch>
        {/* <Route path={`/${category}`}  */}
        <Route exact path='/' render={() =>  <Articles articles={allArticles}/>} />
        <Route exact path='/article/:title' render={({match}) => {
          console.log(match, 'match')

          const selectedArticle = allArticles.find(article => {
            return article.title === match.params.title})

            console.log(selectedArticle)

          return !!selectedArticle && <Details/>
        }} />
      </Switch>

    </main>

  )
}

export default Home;