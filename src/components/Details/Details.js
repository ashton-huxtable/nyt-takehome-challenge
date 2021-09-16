import React from 'react';

import './Details.css'


export const Details = ({selectedArticle}) => {

  

  return(
    <section>
      <img className='details-img' src={selectedArticle.multimedia[0].url} alt={selectedArticle.multimedia[0].caption} />
      <div className='title-byline'>
        <h2 className='details-title'>{selectedArticle.title}</h2>
        <p className='details-byline'>{selectedArticle.byline}</p>
      </div>
      <p className='details-abstract'>{selectedArticle.abstract}</p>
      <button className='details-btn'><a href={selectedArticle.url}>Read Full Article</a></button>
    </section>
  )
}
