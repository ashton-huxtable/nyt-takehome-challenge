import React, {useState, useEffect} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { fetchFeaturedArticles } from '../../Utilities/apiCalls';
import { Articles } from '../Articles/Articles';
import { Details } from '../Details/Details'
import { Dropdown } from '../Dropdown/Dropdown';
import './Home.css'
let dayjs = require('dayjs');



const Home = () => {

  const today = dayjs(Date.now()).format('MMMM D, YYYY');


  const [category, setCategory] = useState('home')
  const [allArticles, setAllArticles] = useState([])



  useEffect(() => {
    fetchFeaturedArticles(category)
      .then(data => setAllArticles(data))
  }, [category])

  console.log(allArticles, 'articles')

  return(
    <main>
      <Link to='/'>
        <h1>NYT Top Stories</h1>
      </Link>
        <p className='date'>{today}</p>
      <Switch>
        <Route exact path='/'>
          <Dropdown setCategory={setCategory} category={category}/>
          <Articles articles={allArticles}/> 
        </Route>
        <Route exact path='/article/:id' render={({match}) => {
          console.log(match, 'match')

          const selectedArticle = allArticles.find(article => article.id === match.params.id)
            console.log(selectedArticle)

          return !!selectedArticle && <Details selectedArticle={selectedArticle}/>
        }} />
      </Switch>

    </main>

  )
}

export default Home;