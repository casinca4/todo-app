import React from 'react';

const Article = props => {
  const article = props.article;      // article kommt von NewsC in render; props: get data from parent; props is the whole data; props is data, so ist es 
  // console.log(article);         
  
  const friend =
    'https://media0.giphy.com/media/OI8TsOa9KFAPu/giphy.gif?cid=790b76116ff1b97ce66612fdfbc17f90abfb14f8d9ec70c8&rid=giphy.gif';

  function openArticle(url) {
    window.open(url, '_blank');         // kommt von article, dann url in API; open article in another tab
  }

  return (
    <div className="article" onClick={() => openArticle(article.url)}>
      <div className="img">
        {article.urlToImage ? (               // urlToImage kommt von API; wenn es das Bild gibt, dann wird es verwendet; es sollte nicht nur Text dastehen; wenn nicht, dann Hund (giphy) zeigen; wenn kein if, dann wird nur Artikel angezeigt
          <img src={article.urlToImage}></img>
        ) : (
          <img src={friend}></img>
        )}
      </div>
      <div className="info">
        <p className="title">{article.title}</p>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default Article;
