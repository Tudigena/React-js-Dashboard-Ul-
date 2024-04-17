// Write your JS code here
import './index.css'
import {RxDashboard} from 'react-icons/rx'
import {
  IoIosPricetags,
  IoIosSettings,
  IoIosNotificationsOutline,
} from 'react-icons/io'
import {AiOutlineSchedule} from 'react-icons/ai'
import {TbUserSquareRounded} from 'react-icons/tb'
import {FaSearch} from 'react-icons/fa'
import {FaMoneyBillTrendUp} from 'react-icons/fa6'
import {IoPricetagsOutline} from 'react-icons/io5'
import {SlLike} from 'react-icons/sl'
import {PiUsersBold} from 'react-icons/pi'
import Charts from '../Charts'

const Dashboard = () => (
  <div className="home">
    <div className="sidebar">
      <div className="sidebar-inner">
        <h1 className="heading">
          Board<span>.</span>
        </h1>
        <ul className="top-nav">
          <p>
            <RxDashboard className="image" />
            Dashboard
          </p>
          <p>
            <IoIosPricetags className="image" />
            Transactions
          </p>
          <p>
            <AiOutlineSchedule className="image" /> Schedules
          </p>
          <p>
            <TbUserSquareRounded className="image" /> Users
          </p>
          <p>
            <IoIosSettings className="image" /> Settings
          </p>
        </ul>
        <ul className="footer">
          <p>Help</p>
          <p>Contact Us</p>
        </ul>
      </div>
    </div>
    <div className="main">
      <div className="navbar">
        <div className="left">
          <h2 className="dash">Dashboard</h2>
        </div>
        <div className="right">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <FaSearch className="rightIcon2" />
          </div>
          <div className="notification">
            <IoIosNotificationsOutline className="rightIcon2" />
          </div>
          <div className="user">
            <img
              src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
              alt="sharan dathu"
              className="userImage"
            />
          </div>
        </div>
      </div>
      <div className="sub-card-container">
        <div className="card card-1">
          <p>Total Revenues</p>
          <p className="price">$32,97,25,481</p>
          <FaMoneyBillTrendUp className="sub-card-image-1" />
        </div>
        <div className="card card-2">
          <p>Total Transactions</p>
          <p>1,520</p>
          <IoPricetagsOutline className="sub-card-image-2" />
        </div>
        <div className="card card-3">
          <p>Total Likes</p>
          <p>9,721</p>
          <SlLike className="sub-card-image-3" />
        </div>
        <div className="card card-4">
          <p>Total Users</p>
          <p>892</p>
          <PiUsersBold className="sub-card-image-4" />
        </div>
      </div>
      <div>
        <Charts />
      </div>
    </div>
  </div>
)

export default Dashboard
