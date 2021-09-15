import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchFeaturedArticles } from '../../Utilities/apiCalls';
import { Articles } from '../Articles/Articles';
import { Details } from '../Details/Details'
import { Dropdown } from '../Dropdown/Dropdown';


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
        <Route exact path='/'>
          <Dropdown setCategory={setCategory} category={category}/>
          <Articles articles={allArticles}/> 
        </Route>
        <Route exact path='/article/:id' render={({match}) => {
          console.log(match, 'match')

          const selectedArticle = allArticles.find(article => article.id === match.params.id)
            console.log(selectedArticle)

          return !!selectedArticle && <Details/>
        }} />
      </Switch>

    </main>

  )
}

export default Home;