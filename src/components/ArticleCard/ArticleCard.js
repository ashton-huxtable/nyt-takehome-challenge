import React from 'react';

export const ArticleCard = ({multimedia, id, title, byline}) => {

  return (
    <article className='article-card' id={id}>
      <img src={multimedia[3].url} alt={multimedia[3].caption} />
      <h2 className='article-card-title'>{title}</h2>
      <p className='article-card-byline'>{byline}</p>
    </article>
  )

}