import React from 'react';
import Masonry from 'react-masonry-css';
import Article from './Article';
import Spinner from './Spinner';

class NewsContainer extends React.Component {
  constructor(props) {      // passes props to his child
    super(props);
    this.state = {
      articles: []            // hat V. so genannt
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=f8d7869212c24907bc585db6b6d267be`;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles });
  }

  render() {
    const articleList = this.state.articles.map(el => (     // el ist von articles in data; articles is Z. 9
      <Article article={el} key={el.publishedAt}></Article>   // da ich das hier im render habe, ist das child of NewsC; el ist alles, was von API kommt, der array;; pusht in leeren array von oben; el ist article; holt sich alles raus, wo was steht
    ));

    const myBreakPoints = {       
      default: 4,             // 4 ist die Anzahl der Spalten
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <Masonry
        breakpointCols={myBreakPoints}        // Benennung aus documentation
        className="news-container"
        columnClassName="col"
      >
        {articleList.length > 0 ? articleList : <Spinner></Spinner>}
      </Masonry>
    );
  }
}
export default NewsContainer;