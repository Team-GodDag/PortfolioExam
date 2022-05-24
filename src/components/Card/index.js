import './index.scss'

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-box">
        {/* <img src="../../../public/logo192.png"></img> */}
      </div>
      <div className="content">
        <div className="details">
          <h2>
            {' '}
            Henrik Nielsen{' '}
            <br>
              <span>Full Nerd</span>
            </br>
          </h2>
          <div className="data">
            <h3>
              342<span>Posts</span>
            </h3>
            <h3>
              342<span>Followers</span>
            </h3>
            <h3>
              342<span>Following</span>
            </h3>
          </div>
          <div className="actionBtn">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
