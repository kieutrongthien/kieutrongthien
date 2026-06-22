import React, { useState, useEffect, useCallback } from "react";
import OutsourcingCard from "./OutsourcingCard";

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback((e) => {
    const projects = [
        {
            id: 'aegroup',
            name: 'Anh Em Group',
            description: 'Architected and built a high-performance e-commerce platform for PCs and tech accessories using NuxtJS (frontend) and Laravel (backend), integrating complex product filters and secure payment structures.',
            url: 'https://anhemgroup.vn',
            thumbnail: 'images/anhemgroup.png',
            languages: ['NuxtJS', 'Laravel']
        },
        {
            id: 'vikione',
            name: 'Vikione',
            description: 'Developed a blockchain-inspired daily mining platform supporting heavy user interaction. Engineered high-throughput backend APIs with Laravel and designed a highly reactive, real-time UI with VueJS.',
            url: 'https://mine.vikione.com',
            thumbnail: 'images/vikione.png',
            languages: ['NuxtJS', 'Laravel']
        },
        {
            id: 'gimcheon',
            name: 'Gimechon Design',
            description: 'Optimized and maintained a banner reservation and booking system, upgrading legacy PHP features to streamline custom reservation workflows.',
            url: 'http://gimcheondesign.com',
            thumbnail: 'images/gimcheon.png',
            languages: ['PHP']
        },
        {
            id: 'meemedia',
            name: 'MeeMedia',
            description: 'Developed a comprehensive YouTube channel management dashboard. Engineered data pipeline aggregation to analyze and report revenue monthly, quarterly, and annually using Laravel and VueJS.',
            url: 'https://meemedia.net',
            thumbnail: 'images/meemedia.png',
            languages: ['VueJS', 'Laravel']
        },
        {
            id: 'fowi',
            name: 'Fowi',
            description: 'Built a cross-platform dating application with user discovery, real-time chatting, and smart matchmaking, leveraging Flutter for mobile and Laravel with Elasticsearch for high-performance backend search queries.',
            url: 'https://fowi.omaicode.com',
            thumbnail: 'images/fowi.png',
            languages: ['Flutter', 'Laravel', 'Elasticsearch']
        },
        {
            id: 'ohrey',
            name: 'OhRey',
            description: 'Developed a second-hand fashion marketplace with real-time product listings, search engine filters, and trade management using Flutter and Laravel APIs with Elasticsearch.',
            url: 'https://ohrey.vn',
            thumbnail: 'images/ohrey.png',
            languages: ['Flutter', 'Laravel', 'Elasticsearch']
        },
        {
            id: 'kbhero',
            name: 'KB Hero',
            description: 'Designed and developed a toy-sharing mobile application for children to barter toys safely. Built with Flutter, backed by robust Laravel APIs.',
            url: 'https://kbhero.omaicode.com',
            thumbnail: 'images/kbhero.png',
            languages: ['Flutter', 'Laravel']
        },
        {
            id: 'project-hub',
            name: 'ProjectHub',
            description: 'Engineered a specialized job portal linking Vietnamese developers with Korean enterprises, featuring job postings, application workflows, and recruitment management using Laravel.',
            url: 'https://project-hub.omaicode.com',
            thumbnail: 'images/project-hub.png',
            languages: ['Laravel']
        },
        {
            id: 'empi',
            name: 'Empleos Internacional',
            description: 'Built a recruitment consultancy portal targeting labor hiring from Mexico/Canada, implementing an automated TN visa application consulting pipeline with Laravel and OCMS.',
            url: 'https://empi.omaicode.com',
            thumbnail: 'images/empi.png',
            languages: ['Laravel', 'OCMS']
        },
        {
            id: 'duhocnova',
            name: 'Nova - Study Abroad',
            description: 'Created a detailed study-abroad information portal and resource hub using Laravel and OCMS to facilitate student enrollment and program search.',
            url: 'https://duhocnova.omaicode.com',
            thumbnail: 'images/duhocnova.png',
            languages: ['Laravel', 'OCMS']
        },
        {
            id: 'tmentor',
            name: 'T-Mentor',
            description: 'Built a Korean real estate platform specialized in secure Jeonse (deposit-based rent) contracts, implementing property searches and verified agreement tracking using Laravel and OCMS.',
            url: 'https://t-mentor.omaicode.com',
            thumbnail: 'images/tmentor.png',
            languages: ['Laravel', 'OCMS']
        },
        {
            id: 'adoskr',
            name: 'ADOS Korea',
            description: 'Developed ADOS.kr, a customer support and inquiries portal for a Korean telecommunications provider, using Laravel and OCMS.',
            url: 'https://ados.omaicode.com',
            thumbnail: 'images/ados.png',
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
