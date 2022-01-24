import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, url, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: "30rem" }}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-dark text-light" style={{ left:'88%',zIndex:'1' }}>
                {source}
              </span>
          <img
            src={
              imageurl
                ? imageurl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUinX3N0rZjQ1mYFOCpJXcmJGgdvNm09ZAw&usqp=CAU"
            }
            className="card-img-top"
            alt="..."
            style={{ height: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By: {!author ? "Unknown" : author}
              </small>
            </p>
            <p class="card-text">
              <small class="text-muted">
                On: {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
