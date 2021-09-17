import React from 'react';

import './Details.css'


export const Details = ({selectedArticle}) => {

  

  return(
    <section className='details'>
      <div className='line'></div>
      <div className='image-title'>
        <img className='details-img' src={selectedArticle.multimedia[0].url} alt={selectedArticle.multimedia[0].caption} />
        <div className='details-title-byline'>
          <h2 className='details-title'>{selectedArticle.title}</h2>
          <p className='details-byline'>{selectedArticle.byline}</p>
        </div>
      </div>
      <p className='details-abstract'>{selectedArticle.abstract}</p>
      <button className='details-btn'><a href={selectedArticle.url}>Read Full Article</a></button>
    </section>
  )
}
