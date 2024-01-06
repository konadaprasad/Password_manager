import {Component} from 'react'

import {v4 as uvId} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    count: 0,
    showPassword: false,
    showImage: true,
  }

  addItems = event => {
    const {website, username, password} = this.state
    event.preventDefault()
    const newItem = {
      id: uvId(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newItem],
      count: prevState.count + 1,
      website: '',
      username: '',
      password: '',
    }))
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  passwordShow = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const filterList = passwordList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordList: filterList})
  }

  searchPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      passwordList,
      website,
      username,
      password,
      searchInput,
      count,
      showPassword,
      showImage,
    } = this.state

    const searchResult = passwordList.filter(user => {
      const text = user.website.toLowerCase()
      return text.includes(searchInput.toLowerCase())
    })

    let passwordImg = ''
    console.log(searchResult.length)
    if (searchResult.length === 0) {
      console.log('hi')
      passwordImg = (
        <li className="contain">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="password-img"
          />
          <p className="para1">No Passwords</p>
        </li>
      )
    } else {
      passwordImg = (
        <ul className="un-order">
          {searchResult.map(eachItem => (
            <PasswordItem
              listItem={eachItem}
              key={eachItem.id}
              showPassword={showPassword}
              deletePassword={this.deletePassword}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="container">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-img"
          />
        </div>
        <div className="input-cont">
          <div className="input-details">
            <div className="cont">
              <h1 className="para">Add New Password</h1>
              <form className="form-items" onSubmit={this.addItems}>
                <div className="in-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="web-img"
                  />
                  <input
                    type="text"
                    className="web-input"
                    placeholder="Enter Website"
                    value={website}
                    onChange={this.changeWebsite}
                  />
                </div>
                <div className="in-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="web-img"
                  />
                  <input
                    type="text"
                    className="web-input"
                    placeholder="Enter Username"
                    value={username}
                    onChange={this.changeUsername}
                  />
                </div>
                <div className="in-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="web-img"
                  />
                  <input
                    type="password"
                    className="web-input"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.changePassword}
                  />
                </div>
                <button className="btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="input-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt=" password manager"
                className="manager-img"
              />
            </div>
          </div>
        </div>
        <div className="result-cont">
          <div className="search-cont">
            <div className="cont2">
              <h1 className="para1">Your Passwords</h1>
              <p className="para2">{count}</p>
            </div>
            <div className="cont3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.searchPassword}
              />
            </div>
          </div>
          <hr />
          <div className="results">
            <div className="checkbox-cont">
              <input
                type="checkbox"
                className="check-box"
                onClick={this.passwordShow}
                id="checkId"
              />
              <label htmlFor="checkId" className="para3">
                Show Passwords
              </label>
            </div>
            {passwordImg}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
