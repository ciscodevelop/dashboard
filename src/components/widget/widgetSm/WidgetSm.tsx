import { Visibility } from '@mui/icons-material'
import './widgetsm.scss'
const profilePic = require('../../../asset/ciscoImage.jpeg')
 

const WidgetSm = () => {
  return (
    <div className='widgetlg'>
      <h1>Users</h1>
      <div className="container">
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
          <div className="info">
            <h2>Jonh Doeh</h2>
            <h4>Web Developer</h4>
          </div>
          <div className="buttons">
            <button>
              <Visibility className='icon'/>
              Display
            </button>
          </div>        
      </div>
      <div className="container">
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
          <div className="info">
            <h2>Jonh Doeh</h2>
            <h4>Web Developer</h4>
          </div>
          <div className="buttons">
            <button>
              <Visibility className='icon'/>
              Display
            </button>
          </div>        
      </div>
      <div className="container">
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
          <div className="info">
            <h2>Jonh Doeh</h2>
            <h4>Web Developer</h4>
          </div>
          <div className="buttons">
            <button>
              <Visibility className='icon'/>
              Display
            </button>
          </div>        
      </div>
      <div className="container">
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
          <div className="info">
            <h2>Jonh Doeh</h2>
            <h4>Web Developer</h4>
          </div>
          <div className="buttons">
            <button>
              <Visibility className='icon'/>
              Display
            </button>
          </div>        
      </div>
      <div className="container">
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
          <div className="info">
            <h2>Jonh Doeh</h2>
            <h4>Web Developer</h4>
          </div>
          <div className="buttons">
            <button>
              <Visibility className='icon'/>
              Display
            </button>
          </div>        
      </div>
      <div className="container">
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
          <div className="info">
            <h2>Jonh Doeh</h2>
            <h4>Web Developer</h4>
          </div>
          <div className="buttons">
            <button>
              <Visibility className='icon'/>
              Display
            </button>
          </div>        
      </div>
    </div>
  )
}

export default WidgetSm