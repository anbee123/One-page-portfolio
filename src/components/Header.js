import { useState } from 'react';
import Switch from 'react-switch';
import Typical from 'react-typical';

const Header = ({ data }) => {
  const [checked, setChecked] = useState(false)
  const titles = data.titles.map(t => [1500, t.toUpperCase()]).flat()
  console.log('111', { titles })
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

  return (
    <header>
      This is Header
      <div className='row flexAlign'>
        <div>
          <span></span>
          <br />
          <h1 className='mb-0'>
            <Typical steps={[data.name]} wrapper='p' />
          </h1>
          <div className='title-container'>
            <Typical className='title-styles' steps={titles} loop={50} />
          </div>

          <Switch
            checked={checked}
            onChange={onThemeSwitchChange}
            offColor='#ff69b4'
            onColor='#353535'
            className='react-switch mx-auto'
            width={90}
            height={40}
            uncheckedIcon={<div></div>}
            checkedIcon={<div></div>}
            id='icon-switch'
          />
        </div>
      </div>

    </header>
  )
}

export default Header