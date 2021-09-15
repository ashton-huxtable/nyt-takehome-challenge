import React from 'react';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import '../ArticleCard/ArticleCard.css'

export const Articles = ({articles}) => {

  const featuredArticles = articles.map(article => {
    return (
        <ArticleCard 
          multimedia={article.multimedia}
          title={article.title}
          byline={article.byline}
          id={article.id}
          key={article.id}
        />
    )
  })
  return (
    <section className='main-articles'>
      {featuredArticles}
    </section>
  )
}


