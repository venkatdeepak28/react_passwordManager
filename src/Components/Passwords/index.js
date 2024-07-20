import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList'
import './index.css'

class Password extends Component {
  state = {
    searchValue: '',
    websiteValue: '',
    nameValue: '',
    passwordValue: '',
    givenArr: [],
    isPasswordShown: false,
  }

  addValue = () => {
    const {websiteValue, nameValue, passwordValue, givenArr} = this.state
    const obj = {
      id: uuidv4(),
      website: websiteValue,
      name: nameValue,
      password: passwordValue,
    }
    const newArr = [...givenArr, obj]
    this.setState({
      givenArr: newArr,
      websiteValue: '',
      nameValue: '',
      passwordValue: '',
    })
  }

  deleteShown = id => {
    const {givenArr} = this.state
    const filteredArr = givenArr.filter(eachValue => eachValue.id !== id)
    this.setState({givenArr: filteredArr})
  }

  changeShown = () => {
    this.setState(prevState => ({
      isPasswordShown: !prevState.isPasswordShown,
    }))
  }

  changeWebsite = event => {
    this.setState({websiteValue: event.target.value})
  }

  changeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  changeName = event => {
    this.setState({nameValue: event.target.value})
  }

  changePassword = event => {
    this.setState({passwordValue: event.target.value})
  }

  render() {
    let imgValue
    const {websiteValue, nameValue, passwordValue, givenArr} = this.state
    const {searchValue, isPasswordShown} = this.state

    if (givenArr.length === 0) {
      imgValue = (
        <div className="no-img-container">
          <img
            className="no-password-logo"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <p>No Passwords</p>
        </div>
      )
    } else if (givenArr.length >= 1) {
      if (searchValue.length === 0) {
        imgValue = (
          <ul className="list-prop">
            {givenArr.map(eachValue => (
              <PasswordList
                key={eachValue.id}
                givenValue={eachValue}
                isPasswordShown={isPasswordShown}
                deleteShown={this.deleteShown}
              />
            ))}
          </ul>
        )
      } else {
        const filteredArr = givenArr.filter(eachValue => {
          console.log(eachValue.website)
          return eachValue.website.includes(searchValue)
        })
        console.log(searchValue)
        imgValue = (
          <ul className="list-prop">
            {filteredArr.map(eachValue => (
              <PasswordList
                key={eachValue.id}
                givenValue={eachValue}
                isPasswordShown={isPasswordShown}
                deleteShown={this.deleteShown}
              />
            ))}
          </ul>
        )
      }
    }

    return (
      <div className="bg-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="add-password-container">
          <div className="password-create-container">
            <h1 className="password-main-heading">Add New Password</h1>
            <form>
              <div className="password-container">
                <img
                  className="password-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  className="input-el"
                  type="text"
                  value={websiteValue}
                  placeholder="Enter Website"
                  onChange={this.changeWebsite}
                />
              </div>
              <div className="password-container">
                <img
                  className="password-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  className="input-el"
                  type="text"
                  value={nameValue}
                  placeholder="Enter Username"
                  onChange={this.changeName}
                />
              </div>
              <div className="password-container">
                <img
                  className="password-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  className="input-el"
                  type="password"
                  value={passwordValue}
                  placeholder="Enter Password"
                  onChange={this.changePassword}
                />
              </div>
            </form>
            <button
              className="custom-btn"
              type="submit"
              onClick={this.addValue}
            >
              Add
            </button>
          </div>
          <img
            className="password-manager-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="show-password-container">
          <div className="counter-container">
            <div className="inner-container">
              <h1 className="password-main-heading">Your Passwords</h1>
              <p className="input-counter">{givenArr.length}</p>
            </div>
            <div className="search-container">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                className="search-input"
                type="search"
                value={searchValue}
                placeholder="Search"
                onChange={this.changeSearch}
              />
            </div>
          </div>
          <hr className="horizontal-el" />
          <div className="select-container">
            <input
              type="checkbox"
              value={isPasswordShown}
              id="checkid"
              onChange={this.changeShown}
            />
            <label htmlFor="checkid">Show passwords</label>
          </div>
          {imgValue}
        </div>
      </div>
    )
  }
}

export default Password
