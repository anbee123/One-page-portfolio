import React, { useState } from 'react';
import Switch from 'react-switch';
import Typical from 'react-typical';

const Header = ({ data }) => {
  const [checked, setChecked] = useState(false)
  const titles = data.titles.map(t => [1500, t.toUpperCase()]).flat()
  const onThemeSwitchChange = (val) => {
    setChecked(val)
    setTheme()
  }
  const setTheme = () => {
    const dataThemeAtrribute = 'data-theme'
    const body = document.body
    const newTheme = body.getAttribute(dataThemeAtrribute) === 'dark' ? 'light' : 'dark'
    body.setAttribute(dataThemeAtrribute, newTheme)
  }
  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className="title-styles" steps={titles} loop={50} />
  }, (props, prevProp) => true);

  return (
    <header>
      <div className='row flexAlign'>
        <div>
          <span
            className="iconify header-icon"
            data-icon="la:laptop-code"
            data-inline="false"
          ></span>
          <br />
          <h1 className='mb-0'>
            <Typical steps={[data.name]} wrapper='p' />
          </h1>
          <div className='title-container'>
            <HeaderTitleTypeAnimation />
          </div>

          <Switch
            id='icon-switch'
            className='react-switch mx-auto'
            checked={checked}
            onChange={onThemeSwitchChange}
            offColor='#353535'
            onColor='#ff69b4'
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:first-quarter-moon-face"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '20px',
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '10px',
                }}
              ></span>
            }
          />
        </div>
      </div>

    </header>
  )
}

export default Header