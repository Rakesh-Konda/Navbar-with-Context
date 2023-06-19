// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutAlt = isDarkTheme ? 'about' : 'theme'
      return (
        <div className={isDarkTheme ? 'hlo1' : 'hlo'}>
          <Navbar />
          <div className="cen">
            <img
              alt="about"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
              }
            />
            <h1 className={isDarkTheme ? 'h12' : 'h1'}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
