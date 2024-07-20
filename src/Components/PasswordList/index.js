const PasswordList = props => {
  const {givenValue, isPasswordShown, deleteShown} = props
  const {id, name, password, website} = givenValue

  const checkPassword = isPasswordShown ? (
    <p>{password}</p>
  ) : (
    <img
      className="star-logo"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const deleteList = () => {
    deleteShown(id)
  }

  return (
    <li className="list-el">
      <div className="para">
        <p>{website.slice(0, 1).toUpperCase()}</p>
      </div>
      <div className="text-container">
        <p>{website}</p>
        <p>{name}</p>
        {checkPassword}
      </div>
      <div>
        <button
          className="delete-logo"
          type="submit"
          data-testid="delete"
          onClick={deleteList}
        >
          <img
            className="img-el"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordList
