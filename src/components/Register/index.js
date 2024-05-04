import {Component} from 'react'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    name: '',
    topics: topicsList[0].id,
    showSubmitError: false,
    errorMsg: 'Please enter your name',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopics = event => {
    this.setState({topics: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true})
  }

  submitForm = event => {
    event.preventDefault()
    const {name, topics} = this.state

    if (name !== '' && topics !== '') {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  renderTopicsField = () => {
    const {topics} = this.state
    console.log(topics)
    return (
      <>
        <label className="select-label" htmlFor="topic">
          TOPICS
        </label>
        <select id="topic" value={topics} onChange={this.onChangeTopics}>
          {topicsList.map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.displayText}
            </option>
          ))}
        </select>
      </>
    )
  }

  renderNameField = () => {
    const {name} = this.state

    return (
      <>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="name-input-field"
          value={name}
          onChange={this.onChangeName}
          placeholder="Your name"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="register-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
          </div>
          <h1>Let us join</h1>
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderTopicsField()}</div>
          <button type="submit" className="register-button">
            Register Now
          </button>
          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Register
