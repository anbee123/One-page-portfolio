import { useState } from 'react';
import Switch from 'react-switch';
import Typical from 'react-typical';

const Header = () => {
  const [checked, setChecked] = useState(false)

  return (
    <header>
      This is Header

    </header>
  )
}

export default Header