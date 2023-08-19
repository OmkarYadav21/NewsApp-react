import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const [articles,setArticles]=useState([])
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

 
  const captlize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews=async ()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);

  }
  useEffect(()=>{
      document.title = `${captlize(props.category)}-WorldNews`;

    updateNews();
  },[])
  
  
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);

    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
  };

    const { mode } = props;
    // const { articles } = this.state;
    return (
      <>
        <h1
          className={`text-center text-${mode === "dark" ? "white" : "dark"}`}
        >
          WorldNews-Top {captlize(props.category)} Headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          // inverse={true}
          hasMore={articles.length !== totalResults}
          //loader={<h4>Loading...</h4>}
        >
          <div className="container">
            <div className="row">
              {
                articles.map((element,index) => {
                  return (
                    <div className="col-md-4" key={`${element.url}-${index}}`}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        discription={
                          element.description
                            ? element.description.slice(0, 85)
                            : " "
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        mode={mode}
                        source={element.source.name}
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
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
};
News.typeProps = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
