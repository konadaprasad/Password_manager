import './index.css'

const PasswordItem = props => {
  const {listItem, showPassword, deletePassword} = props
  const {id, website, username, password} = listItem
  const nameItem = username.slice(0, 1)
  let passwordId
  if (showPassword) {
    passwordId = <p className="p2">{password}</p>
  } else {
    passwordId = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="img"
      />
    )
  }
  const deleteItem = () => {
    deletePassword(id)
  }
  return (
    <li className="list-item">
      <div className="img-cont">
        <p className="p1">{nameItem}</p>
      </div>
      <div className="details">
        <p className="p2">{website}</p>
        <p className="p2">{username}</p>
        {passwordId}
      </div>
      <div className="delete-cont">
        <button
          type="button"
          className="delete-btn"
          onClick={deleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
