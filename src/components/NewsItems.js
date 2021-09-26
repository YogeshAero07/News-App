import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { img, title, description, link } = this.props;
    return (
      <div>
        <div className="news_item card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="#" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;

// target="_blank"   --> this is used for open page as a new page
