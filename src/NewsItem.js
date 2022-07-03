import React from "react";

const NewsItem=(props)=> {
    return (
      <div className="my-3">
        <div className="card" style={{borderRadius:"20px 8px 20px 20px" , border:"1px solid black"}}>
          <div style={{display:"flex", position:"absolute", right:"0" }}>
            <span className="badge bg-danger">{props.source}</span>
          </div>
          <img src={props.imageUrl?props.imageUrl:"https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"} className="card-img-top" alt="..." style={{margin:"auto", borderRadius:"18px 18px 0px 0px",borderBottom:"1px solid black",height:"170px"}}/>
          <div className="card-body" style={{minHeight:"290px"}}>
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text"> {props.description}...</p>
            <p className="card-text"><small className="text-muted">By {props.author?props.author:"Unknown"} <br/>Last Updated on {new Date(props.date).toGMTString()}</small></p>
            <a rel="noopener noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary" style={{borderRadius:"20px"}}> Read More </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem
