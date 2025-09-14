import React, { useState, useEffect, useCallback } from "react";

const ProjectCard = ({ value }) => {
  const { name, description, url, thumbnail, languages } = value;
  
  return (
    <div className="col-md-4">
      <div className="card shadow-lg mb-5 bg-white rounded">
        <img src={thumbnail || 'placeholder.png'} style={{objectFit: 'cover', width: 100 + '%', height: 220 + 'px'}}/>
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <div style={{ height: '110px' }}>
            <p className="card-text small">{description} </p>
          </div>
          <a
            href={url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary mr-3"
          >
            <i className="fas fa-globe" /> View Website
          </a>
          <hr />
          <div className="d-flex flex-wrap" style={{ gap: '8px' }}>
            {languages.map((language) => (
              <p className="badge badge-light" key={language}>
                {language}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
