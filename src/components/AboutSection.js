import MyImage from '../assets/images/my-image.jpg';
import { Icon } from '@iconify/react';
import ReactIcon from '@iconify/icons-logos/react';
import NodeIcon from '@iconify/icons-logos/nodejs-icon';
import MongoIcon from '@iconify/icons-logos/mongodb-icon';
import PythonIcon from '@iconify/icons-logos/python';
import cssIcon from '@iconify/icons-logos/css-3';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';


const AboutSection = ({ data }) => {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 className='section-title' style={{ color: 'black' }}>
          <span>{data.sectionTitle}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-1 center">
            <div className="polaroid">
              <span style={{ cursor: 'auto' }}>
                <img
                  height="250px"
                  src={MyImage}
                  alt="Avatar placeholder"
                />
                <Icon
                  icon={ReactIcon}
                  style={{ fontSize: '250%', width: '36px', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={NodeIcon}
                  style={{ fontSize: '250%', width: '36px', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={PythonIcon}
                  style={{ fontSize: '250%', width: '36px', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={MongoIcon}
                  style={{ fontSize: '250%', width: '36px', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={cssIcon}
                  style={{ fontSize: '250%', width: '36px', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={typescriptIcon}
                  style={{ fontSize: '250%', width: '36px', margin: '9% 5% 0 5%' }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{' '}
                  &nbsp;{' '}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{' '}
                  &nbsp;{' '}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: 'auto',
                    lineHeight: '200%',
                  }}
                >
                  <span className="wave">{data.description_header} :) </span>
                  <br />
                  {data.description_content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection