import React, { useState, useEffect, useCallback } from "react";

const ProjectCard = ({ value }) => {
  const { name, description, url, thumbnail, languages } = value;
  
  return (
    <div className="col-md-6">
      <div className="card shadow-lg mb-5 bg-white rounded">
        <img src={thumbnail || 'placeholder.png'} style={{objectFit: 'cover', width: 100 + '%', height: 250 + 'px'}}/>
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p className="card-text">{description} </p>
          <a
            href={url || '#'}
            className="btn btn-outline-secondary mr-3"
          >
            <i className="fas fa-globe" /> View Website
          </a>
          <hr />
          <div>
            {languages.map((language) => (
                <p className="badge badge-light card-link">{language}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
