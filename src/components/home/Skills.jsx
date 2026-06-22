import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "React / NextJS", icon: "fab fa-react", color: "#61dafb", exp: '50%' },
        { name: "VueJS / NuxtJS", icon: "fab fa-vuejs", color: "#42b883", exp: '90%' },
        { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e", exp: '90%' },
        { name: "HTML5 & CSS3", icon: "fab fa-html5", color: "#e34f26", exp: '90%' },
        { name: "ElectronJS", icon: "fas fa-atom", color: "#95a5a6", exp: '70%' },
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Laravel (PHP)", icon: "fab fa-laravel", color: "#ff2d20", exp: '90%' },
        { name: "NodeJS / NestJS", icon: "fab fa-node-js", color: "#339933", exp: '80%' },
        { name: "FastAPI (Python)", icon: "fab fa-python", color: "#005571", exp: "50%" },
      ]
    },
    {
      title: "Databases & Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "MySQL / PostgreSQL", icon: "fas fa-database", color: "#00758f", exp: "100%" },
        { name: "Elasticsearch", icon: "fas fa-search", color: "#005571", exp: "70%" },
        { name: "Git & GitHub", icon: "fab fa-git", color: "#f05032", exp: "90%" },
        { name: "Linux / Server Mgmt", icon: "fab fa-linux", color: "#333333", exp: "70%" },
        { name: "Docker / DevOps Basics", icon: "fab fa-docker", color: "#2496ed", exp: "70%" }
      ]
    }
  ];

  return (
    <div id="skills" className="jumbotron jumbotron-fluid bg-white m-0">
      <div className="container container-fluid p-5">
        <h1 className="display-4 pb-5 text-center">Skills & Tech Stack</h1>
        <div className="row">
          {skillCategories.map((category, catIndex) => (
            <div className="col-lg-4 col-md-6 mb-4" key={catIndex}>
              <div className="card h-100 shadow-sm border-0 bg-light">
                <div className="card-body p-4">
                  <h3 className="card-title h5 mb-4 text-dark d-flex align-items-center">
                    <i className={`${category.icon} mr-3 text-secondary`} style={{ fontSize: "1.5rem" }}></i>
                    {category.title}
                  </h3>
                  <div className="d-flex flex-column" style={{ gap: "15px" }}>
                    {category.skills.map((skill, skillIndex) => (
                      <div className="d-flex align-items-center justify-content-between" key={skillIndex}>
                        <div className="d-flex align-items-center">
                          <i className={`${skill.icon} mr-3`} style={{ fontSize: "1.3rem", width: "24px", color: skill.color }}></i>
                          <span className="font-weight-normal text-muted">{skill.name}</span>
                        </div>
                        <div className="progress w-25" style={{ height: "6px" }}>
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            style={{ width: skill.exp }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
