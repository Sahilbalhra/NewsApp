import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  //for first letter
  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  constructor(props) {
    super(props);
    // console.log("Hello I am a constructor of news component");
    //initial states
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    //changing the title
    document.title = `NewsApp-${this.capitalize(this.props.category)}`;
  }
  async updateNews() {
    //loading bar progress
    this.props.setProgress(10);
    //Api url
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac5d9a2bd3044d6fa65740aaec5275c2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //changing the state of loading while fetching the api data
    this.setState({
      loading: true,
    });
    //getting the data from api
    let data = await fetch(url);

    this.props.setProgress(30);
    //JSON strings into JavaScript objects
    let parseData = await data.json();
    this.props.setProgress(50);
    //changinng states
    this.setState({
      articles: parseData.articles,
      //used for getting total artical  length
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  //run at last react life cycle method
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac5d9a2bd3044d6fa65740aaec5275c2&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }
  //getting more data
  fetchMoreData = async () => {
    //changing page value
    this.setState({ page: this.state.page + 1 });
    // this.updateNews();
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac5d9a2bd3044d6fa65740aaec5275c2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      //adding the articles with present one
      articles: this.state.articles.concat(parseData.articles),
      //updating the value
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
          Top Headlines on : {this.capitalize(this.props.category)}
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          //adding more data
          next={this.fetchMoreData}
          //getting more data
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row ">
              {this.state.articles.map((element) => {
                return (
                  // adding the Responseness
                  <div className="col-sm-6 col-lg-4 col-xl-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : " "}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : " "
                      }
                      imageurl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
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
}

export default News;
