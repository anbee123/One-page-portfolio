import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectsSection = ({ data }) => {
  const [project, setProject] = useState()

  const handleShowModal = (val) => {
    setProject(val)
  }
  const onCloseModal = () => {
    setProject()
  }
  const { projects, sectionTitle } = data
  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title">
          <span>{sectionTitle}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-sm-12 col-md-6 col-lg-4"
                style={{ cursor: 'pointer' }}
              >
                <span className="portfolio-item d-block">
                  <div className="foto" onClick={() => handleShowModal(project)}>
                    <div>
                      <img
                        src={project.images[0]}
                        alt="projectImages"
                        height="230"
                        style={{ marginBottom: 5 }}
                      />
                      <span className="project-date">{project.startDate}</span>
                      <br />
                      <p className="project-title-settings mt-3">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            ))
            }
          </div>
        </div>
        <ProjectDetailsModal
          show={!!project}
          onClose={onCloseModal}
          project={project ?? {}}
        />
      </div>
    </section>
  )
}

export default ProjectsSection