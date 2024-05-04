import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameEvent: false,
    lastNameEvent: false,
    isSubmit: false,
  }

  getRegistrationForm = () =>
    this.setState({
      isSubmit: false,
      firstName: '',
      lastName: '',
      firstNameEvent: false,
      lastNameEvent: false,
    })

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName && lastName !== '') {
      this.setState({isSubmit: true})
    }
  }

  onBlurFirstName = event => {
    this.setState({firstName: event.target.value}) 
    if (event.target.value === '') {
      this.setState({firstNameEvent: true})
    } else {
      this.setState({firstNameEvent: false})
    }
  }

  onBlurLastName = event => {
    this.setState({lastName: event.target.value})
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({lastNameEvent: true})
    } else {
      this.setState({lastNameEvent: false})
    }
  }

  getSubmitAuthor = () => (
    <div className="submit-form">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success">Submitted Successfully</p>
      <button
        className="button"
        type="button"
        onClick={this.getRegistrationForm}
      >
        Submit Anthor Response
      </button>
    </div>
  )

  getLoginForm = () => {
    const {lastName, lastNameEvent, firstName, firstNameEvent} = this.state
    const firstNameclassName = firstNameEvent === true ? 'error-msg' : 'inputs'
    const lastNameclassName = lastNameEvent === true ? 'error-msg' : 'inputs'
    return (
      <form className="form-controle" onSubmit={this.onSubmitForm}>
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={firstNameclassName}
          id="firstName"
          type="text"
          value={firstName}
          placeholder="Username"
          onChange={this.onBlurFirstName}
          onBlur={this.eventHandler}
        />
        {firstNameEvent === true && <p className="error">Required</p>}
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={lastNameclassName}
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={this.onBlurLastName}
          onBlur={this.eventHandler}
        />
        {lastNameEvent === true && <p className="error">Required</p>}
        <div className="btn-container">
          <button type="submit" className="login-btn">
            Submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {isSubmit} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isSubmit ? this.getSubmitAuthor() : this.getLoginForm()}
      </div>
    )
  }
}

export default RegistrationForm
