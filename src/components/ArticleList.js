import React from 'react';
import Article from './Article';

const ArticleList = ({posts}) => {

  const renderArticles = posts.map(article => {
    return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes} />
  })
  return (
    <main>
      {renderArticles}
    </main>
  )
}

export default ArticleList;