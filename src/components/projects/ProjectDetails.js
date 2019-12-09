import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - { id }</span>
          <p>oh baby a triple</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>December 9th, </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
