import React from 'react'
import './News.css'

function NewsCard({news}) {
  return (
    <li className='sourceName'>
    <a target="_blank" href={news.url}>{news.title}&nbsp;&nbsp;&nbsp;Source:&nbsp;&nbsp;{news.source.charAt(0).toUpperCase() + news.source.slice(1)}</a>
  </li>
  )
}

export default NewsCard
