import React from "react";
import "./ProjectCard.scss";

class ProjectCard extends React.Component {
  render() {
    const tagColor = ["teal", "purple", "pink", "green"];
    return (
      <div class="cardProject">
        <div class="card-header">
          <img
            src={this.props.project.image}
            // src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
            alt="rover"
          />
        </div>
        <div class="card-body">
          <div className="tagsDiv">
            {this.props.project.tech.map((name) => {
              return (
                <span
                  class={`tag tag-${tagColor[Math.floor(Math.random() * 4)]}`}
                >
                  {name}
                </span>
              );
            })}
          </div>
          <div className="Content">
            <h4>{this.props.project.heading}</h4>
            <p>{this.props.project.shortDiscription}</p>
          </div>
          <a
            className="repoLink"
            href={this.props.project.repo}
            target="_blank"
          >
            <button className="repoBtn">
              <i className="devicon-github-original-wordmark"></i> &nbsp; GitHub
              Repository
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
