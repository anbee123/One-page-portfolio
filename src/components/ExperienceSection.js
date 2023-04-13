import Badge from 'react-bootstrap/Badge';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceSection = ({ data }) => {
  const { sectionTitle, experiences } = data
  return (
    <section id="experience" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: 'black' }}>
            <span className="text-black" style={{ textAlign: 'center' }}>
              {sectionTitle}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experiences.map((experience, key) => {
            const { company, title, years, mainTech, technologies } = experience
            return (
              <VerticalTimelineElement
                key={key}
                className="vertical-timeline-element--work"
                date={years}
                iconStyle={{
                  background: '#e0387e',
                  color: '#fff',
                  textAlign: 'center',
                }}
                icon={<i className="fab fa-react experience-icon"></i>}
              >
                <div style={{ textAlign: 'left', marginBottom: '4px' }}>
                  {mainTech.map((tech, index) => (
                    <Badge pill className="main-badge mr-2 mb-2" key={`${tech}-${index}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3
                  className="vertical-timeline-element-title"
                  style={{ textAlign: 'left' }}
                >
                  {title}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  style={{ textAlign: 'left' }}
                >
                  {company}
                </h4>
                <div style={{ textAlign: 'left', marginTop: '15px' }}>
                  {technologies.map((tech, index) => (
                    <Badge pill className="experience-badge mr-2 mb-2" key={`${tech}-${index}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </VerticalTimelineElement>
            )
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: '#e0387e',
              color: '#fff',
              textAlign: 'center',
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default ExperienceSection