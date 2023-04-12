import { useState } from 'react';
import MyImage from '../assets/images/my-image.jpg';
import { Icon } from '@iconify/react';
import ReactIcon from '@iconify/icons-logos/react';
import AngularIcon from '@iconify/icons-logos/angular-icon';

const AboutSection = ({ data }) => {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: 'black' }}>
          <span>{data.title}</span>
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
                  icon={AngularIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={ReactIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
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
                    fontSize: '132%',
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