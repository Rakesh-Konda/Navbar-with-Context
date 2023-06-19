// Write your code here
import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }
      const altLogo = isDarkTheme ? 'theme' : 'website logo'
      return (
        <div>
          <nav className={isDarkTheme ? 'nav1' : 'nav'}>
            <img
              alt="website logo"
              className="im"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
              }
            />
            <ul className="ul">
              <Link to="/" className="link">
                <li className={isDarkTheme ? 'p1' : 'p'}>Home</li>
              </Link>
              <Link to="/about" className="link">
                <li className={isDarkTheme ? 'p1' : 'p'}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              data-testid="theme"
              className="but"
              onClick={onChangeTheme}
            >
              <img
                alt="theme"
                className="im i"
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                }
              />
            </button>
          </nav>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
