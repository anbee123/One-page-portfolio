import React, { useState } from 'react';
import Switch from 'react-switch';
import { Typewriter } from 'react-simple-typewriter'

const Header = ({ data }) => {
  const [checked, setChecked] = useState(false)
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
    return <Typewriter
      words={data.titles}
      loop={0}
      cursor
      cursorStyle='_'
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={2000}
    />
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
            <Typewriter
              words={[data.name]}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <div className='title-container title-styles'>
            <HeaderTitleTypeAnimation />
          </div>

          <Switch
            id='icon-switch'
            className='react-switch mx-auto'
            checked={checked}
            onChange={onThemeSwitchChange}
            offColor='#353535'
            onColor='#ff56da'
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