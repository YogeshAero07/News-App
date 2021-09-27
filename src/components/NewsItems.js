import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { img, title, description, link, author, date, source } = this.props;
    return (
      <div>
        <div className="news_item card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="#" />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "85%", zIndex: 1 }}
            >
              {source}
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
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
