import React from 'react'

import './Details.css'


export const Details = ({selectedArticle}) => {

  

  return(
    <section>
      <img className='details-img' src={selectedArticle.multimedia[0].url} alt={selectedArticle.multimedia[0].caption} />
      <div>
        <h2>{selectedArticle.title}</h2>
        <p>{selectedArticle.byline}</p>
      </div>
      <p>{selectedArticle.abstract}</p>
      <button><a href={selectedArticle.url}>Read Full Article</a></button>
    </section>
  )
}
