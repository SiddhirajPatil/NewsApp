import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types';
export default class News extends Component {
    static defaultProps = {
   country:'in',
   pageSize:5,
   category:'general'

  }
   static propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string,

  }

  constructor() {
    super();
    console.log("This is a class constructor")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b00dbb3933a84290acc8348dc283b5f6&page=1&pageSize=${this.props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b00dbb3933a84290acc8348dc283b5f6&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsData = await data.json();
    console.log(parsData);
    this.setState({
      articles: parsData.articles,
      totalResults: parsData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b00dbb3933a84290acc8348dc283b5f6&page= ${this.state.page - 1} &pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsData = await data.json();
    
    this.setState(
      {
        page: this.state.page - 1,
        articles: parsData.articles,
        loading: false
      });

  }
  handleNxtClick = async () => {
    console.log("Next")

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    }
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&  category=${this.props.category}&apiKey=b00dbb3933a84290acc8348dc283b5f6&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsData.articles,
      loading: false
    });

  }


  render() {
    return (
      <div className='container my-3  '>
        <h2 className='container mx-0 text-center' >News Charts Top Headline</h2>
        
        <div className='row '>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4 my-3 d-flex align-items-stretch width-100' key={element.url}>
                < NewsItem title={element.title ? element.title.slice(0, 42) : " "} desp={element.description ? element.description.slice(0, 88) : " "} imgUrl={element.urlToImage} newsDetails={element.url}
                update={element.publishedAt} author={element.author}/>
              </div>)
          })}
          <div className="container d-flex justify-content-between btn-sm">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page > Math.ceil((this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-info" onClick={this.handleNxtClick}> &rarr; Next </button>
          </div>

        </div>
      </div>

    )
  }
}
