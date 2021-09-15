import React from 'react';
import { ArticleCard } from '../ArticleCard/ArticleCard';

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
    <section>
      {featuredArticles}
    </section>
  )
}


