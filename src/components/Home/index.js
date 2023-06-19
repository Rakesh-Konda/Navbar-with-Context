// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeAlt = isDarkTheme ? 'home' : 'theme'
      return (
        <div className={isDarkTheme ? 'hlo1' : 'hlo'}>
          <Navbar />
          <div className="cen">
            <img
              alt="home"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
              }
            />
            <h1 className={isDarkTheme ? 'h12' : 'h1'}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
