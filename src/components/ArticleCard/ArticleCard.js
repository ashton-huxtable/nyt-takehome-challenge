import React from 'react';
import { Link } from 'react-router-dom'
import './ArticleCard.css'

export const ArticleCard = ({multimedia, id, title, byline}) => {

  return (
      <Link to={`/article/${id}`} >
        <article className='article-card' id={id}>        
          <div className='title-byline'>
            <h2 className='article-card-title'>{title}</h2>
            <p className='article-card-byline'>{byline}</p>
          </div>
          <img className='article-card-image' src={multimedia[3].url} alt={multimedia[3].caption} />
        </article>
      </Link>
  )
}

