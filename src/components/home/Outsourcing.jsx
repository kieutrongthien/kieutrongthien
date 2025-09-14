import React, { useState, useEffect, useCallback } from "react";
import OutsourcingCard from "./OutsourcingCard";

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback((e) => {
    const projects = [
        {
            id: 'aegroup',
            name: 'Anh Em Group',
            description: 'Developed an e-commerce website for PCs, laptops, and accessories using NuxtJS (front-end) and Laravel (back-end).',
            url: 'https://anhemgroup.vn',
            thumbnail: '/images/anhemgroup.png',
            languages: ['NuxtJS', 'Laravel']
        },
        {
            id: 'vikione',
            name: 'Vikione',
            description: 'Developed a blockchain-inspired platform where users perform daily click-to-mine actions to earn ONE Coin, using Laravel (back-end) and VueJS (front-end).',
            url: 'https://mine.vikione.com',
            thumbnail: '/images/vikione.png',
            languages: ['NuxtJS', 'Laravel']
        },
        {
            id: 'gimcheon',
            name: 'Gimechon Design',
            description: 'Banner reservations management, maintenance & update by customer order.',
            url: 'http://gimcheondesign.com',
            thumbnail: '/images/gimcheon.png',
            languages: ['PHP']
        },
        {
            id: 'meemedia',
            name: 'MeeMedia',
            description: 'Youtube channels management, analytics, report revenues by monthly, quarterly, annually.',
            url: 'https://meemedia.net',
            thumbnail: '/images/meemedia.png',
            languages: ['VueJS', 'Laravel']
        },
        {
            id: 'fowi',
            name: 'Fowi',
            description: 'Developed Fowi, a dating application with user profiles, matching, and chatting features, implemented using Flutter (mobile) and Laravel back-end APIs.',
            url: 'https://fowi.omaicode.com',
            thumbnail: '/images/fowi.png',
            languages: ['Laravel', 'Elasticsearch']
        },
        {
            id: 'ohrey',
            name: 'OhRey',
            description: 'Built OhRey, a second-hand fashion marketplace with product listing, searching, buying/selling features, developed using Flutter (mobile) and Laravel back-end APIs.',
            url: 'https://ohrey.vn',
            thumbnail: '/images/ohrey.png',
            languages: ['Laravel', 'Elasticsearch']
        },
        {
            id: 'kbhero',
            name: 'KB Hero',
            description: 'Developed KB Hero, a mobile app for kids to exchange and share toys safely, with features for listing, searching, and requesting items, built using Flutter and Laravel API.',
            url: 'https://kbhero.omaicode.com',
            thumbnail: '/images/kbhero.png',
            languages: ['Laravel']
        },
        {
            id: 'project-hub',
            name: 'ProjectHub',
            description: 'Developed ProjectHub, a job portal connecting Vietnamese developers with Korean companies, featuring job posting, search, and application management, built with Laravel.',
            url: 'https://project-hub.omaicode.com',
            thumbnail: '/images/project-hub.png',
            languages: ['Laravel']
        },
        {
            id: 'empi',
            name: 'Empleos Internacional',
            description: 'Built Empleos Internacional, a recruitment consulting website dedicated to hiring talents from Mexico and Canada through TN visa for manufacturing and large-scale workforce solutions, developed with Laravel using OCMS.',
            url: 'https://empi.omaicode.com',
            thumbnail: '/images/empi.png',
            languages: ['Laravel', 'OCMS']
        },
        {
            id: 'duhocnova',
            name: 'Nova - Study Abroad',
            description: 'Built Nova - Study Abroad, a platform providing information and resources for students looking to study abroad, developed with Laravel.',
            url: 'https://duhocnova.omaicode.com',
            thumbnail: '/images/duhocnova.png',
            languages: ['Laravel', 'OCMS']
        },
        {
            id: 'tmentor',
            name: 'T-Mentor',
            description: 'Developed a Korean real estate website focusing on secure Jeonse (long-term rental deposit) contracts, ensuring user-friendly property search and contract management features',
            url: 'https://t-mentor.omaicode.com',
            thumbnail: '/images/tmentor.png',
            languages: ['Laravel', 'OCMS']
        },
        {
            id: 'adoskr',
            name: 'ADOS Korea',
            description: 'Developed ADOS.kr, a Korean telecommunications website providing service information, customer support, and online inquiries.',
            url: 'https://ados.omaicode.com',
            thumbnail: '/images/ados.png',
            languages: ['Laravel', 'OCMS']
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
