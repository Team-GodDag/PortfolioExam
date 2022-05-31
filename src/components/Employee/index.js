import './index.scss'

const Employee = (props) => {
   return (
      <div className="card_item">
         <div className="card_inner">
            <img src={props.imgURL} alt="profile" />
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
