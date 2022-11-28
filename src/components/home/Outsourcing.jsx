import React, { useState, useEffect, useCallback } from "react";
import OutsourcingCard from "./OutsourcingCard";

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback((e) => {
    const projects = [
        {
            id: 'aegroup',
            name: 'www.anhemgroup.vn',
            description: 'PC, Laptop & Accessories shop, use NuxtJs as a front-end and Laravel is Back-end.',
            url: 'https://anhemgroup.vn',
            thumbnail: '/images/anhemgroup.png',
            languages: ['php', 'html', 'javascript', 'css/scss', 'nuxtjs', 'laravel']
        },
        {
            id: 'vikione',
            name: 'app.vikione.com',
            description: 'Like PI Network, the user need to click! Mining everyday to get ONE Coin.',
            url: 'https://mine.vikione.com',
            thumbnail: '/images/vikione.png',
            languages: ['php', 'html', 'javascript', 'css/scss', 'nuxtjs', 'laravel']
        },
        {
            id: 'gimcheon',
            name: 'www.gimcheondesign.com',
            description: 'Banner reservations management, maintenance & update by customer order.',
            url: 'http://gimcheondesign.com',
            thumbnail: '/images/gimcheon.png',
            languages: ['php', 'html', 'javascript', 'css']
        },
        {
            id: 'meemedia',
            name: 'www.meemedia.net',
            description: 'Youtube channels management, analytics, report revenues by monthly, quarterly, annually.',
            url: 'https://meemedia.net',
            thumbnail: '/images/meemedia.png',
            languages: ['php', 'html', 'javascript', 'css', 'vuejs', 'laravel']
        },
    ]

    setProjectsArray(projects)
  }, []);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="outsourcing-projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {projectsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">Outsourcing Projects</h1>
          <div className="row">
            {projectsArray.map((project) => (
              <OutsourcingCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
