import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsBreak`;
    fetchMoreData();
  }, [])
  
  const fetchMoreData = async() => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=817f7042ea3544709e1469044e0823e0&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page+1);
    props.setProgress(100);
  };
  return (
    <>
      <h1 className="text-center" style={{color:"#193c62",marginTop:"90px"}}>Top {capitalize(props.category)} Headlines </h1>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner/>}
      >
      <div className="container">
        <div className="row">
          {articles.map((element,index) => {
              return (
                <div className="col-md-3 my-2" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={element.description? element.description.slice(0, 80): ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    source={element.source.name}
                    date={element.publishedAt}
                    author={element.author}
                  />
                </div>
              );
            })}
        </div>
      </div>
      </InfiniteScroll>
    </>
  );
}
News.defaultProps={
  country : "in",
  pageSize : 8,
  category : "general"
}
News.propTypes={
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}
export default News