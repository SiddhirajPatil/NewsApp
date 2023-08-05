import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, desp, imgUrl, newsDetails,author,update } = this.props;
    return (
      <div className="card" >
        <img className="card-img-top" src={!imgUrl?"https://images.hindustantimes.com/tech/img/2022/12/19/1600x900/KOSOVO-SCIENCE-ASTRONOMY-OBSERVATORY-0_16714427169_1671442761865_1671442762019_1671442762019.jpg":imgUrl} alt="..." />
        <div className="card-body" >
          <h5 className="card-title">{title}...</h5>
          <p className="card-text " style={{accentColor: "red"}}>{desp}...</p>
          
          <a href={newsDetails} target="_blank" rel="noreferrer" className='btn btn-sm btn-info my-2 ' >Read more</a>
          <p className="card-text " ><small className="text" style={{color:"black"}}> {update} <br/> {!author ?"Unknown":author} </small></p>
          {/* <p class="card-text"><small class="text-muted  ">{!author ?"Unknown":author} </small></p> */}
        
        </div>
      </div>


        
       
    )
  }
}

export default NewsItem;
