import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, url } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: "25rem" }}>
          <img
            src={
              !imageurl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUinX3N0rZjQ1mYFOCpJXcmJGgdvNm09ZAw&usqp=CAU"
                : imageurl
            }
            className="card-img-top"
            alt="..."
            style={{ height: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
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
