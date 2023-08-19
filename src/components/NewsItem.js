import React from 'react'

const NewsItem =(props)=> {
 
    let {title,discription,imageUrl,newsUrl,mode,author,date,source}=props;
    return (
      
      <div> 
        <div className="card my-2">
          <div style={{position:'absolute', right:0}}>
        <span className=" badge rounded-pill bg-danger" >
            {source}</span>
            </div>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className={`card-body bg-${mode==="dark"?"dark":"white"}`}>
            <h5 className={`card-title text-${mode==="dark"?"white":"dark"}`}>{title}...</h5>
            <p className={`card-text text-${mode==="dark"?"white":"dark"}`}>{discription}...</p>
            <p className={`card-text `}><small className={` text-${mode==="dark"?"white":"muted"}`}>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn sm-btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  
}
export default NewsItem