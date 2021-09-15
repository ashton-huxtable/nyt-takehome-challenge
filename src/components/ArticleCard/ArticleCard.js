import React from 'react';
import { Link } from 'react-router-dom'
import './ArticleCard.css'

export const ArticleCard = ({multimedia, id, title, byline}) => {

  return (
      <Link to={`/article/${title}}`} >
        <article className='article-card' id={id}>
          {/* <button>View Article</button> */}
            {/* <button className='more-info'>Details</button> */}
        
          <img className='article-card-image' src={multimedia[3].url} alt={multimedia[3].caption} />
          <div className='title-byline'>
            <h2 className='article-card-title'>{title}</h2>
            <p className='article-card-byline'>{byline}</p>
          </div>
        </article>
      </Link>
  )
}

