import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')


  // Use system preference for dark mode if no preference is set in localStorage
  
  // useEffect(() => {
  //   const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
  //   darkMediaQuery.addEventListener('change', (e) => {
  //     setThemeName(e.matches ? 'light' : 'dark')
  //   });
  // }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
