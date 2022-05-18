import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from "../../assets/images/logo512.png"

const Employee = (props) => {
  //name, title, description, imgUrl, linkedInUrl

  return (
    <div className="card_item">
      <div className="card_inner">
        <img src={Logo} alt="profile Picture" />
        <div className="card_inner_text">
          <div className="role_name">{props.name}</div>
          <div className="real_name">{props.title}</div>
          <div className="film">{props.description}</div>
        </div>
      </div>
    </div>

  )
}

export default Employee
