
const SkillsSection = ({ data }) => {
  const { skills, sectionTitle } = data
  const { icons } = skills

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="">{sectionTitle}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">
            {icons.map((item, index) => (
              <li className="list-inline-item mx-3" key={index}>
                <span>
                  <div className="text-center skills-tile">
                    <i className={item.class} style={{ fontSize: '220%' }}>
                      <p
                        className="text-center"
                        style={{ fontSize: '30%', marginTop: '4px', marginBottom: '4px' }}
                      >
                        {item.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection