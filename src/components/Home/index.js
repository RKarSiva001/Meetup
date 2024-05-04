import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  state = {
    registered: false,
    name: '',
    topic: '',
  }

  renderUnregisteredView = () => (
    <div>
      <h1>Welcome to Meetup</h1>
      <p>Please register for the topic</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
      <div>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
      </div>
    </div>
  )

  renderRegisteredView = () => {
    const {name, topic} = this.state
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>Welcome to {topic}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
    )
  }

  render() {
    const {registered} = this.state

    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        {registered
          ? this.renderRegisteredView()
          : this.renderUnregisteredView()}
      </>
    )
  }
}

export default Home
