import {Link} from "react-router-dom"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import website_logo from "../Navbar/images/new_article_website_logo.webp"
import "./index.css"
 
const  Navbar=(props)=>{
    const {light_mode,onCangeDarkMode}=props
    const navbar_css=light_mode? 'nav_light' :'nav_dark'
    const nav_ele_css=light_mode? 'nav_ele_light':'nav_ele_dark'



    return (
        <nav className={navbar_css}>
          <Link to="/"><img src={website_logo} alt="website logo" className="website_logo" /></Link>
          <ul className="navelements">
            <li ><Link  to="/profile_page" style={{textDecoration: 'none'}} className={nav_ele_css}>Home</Link></li>
            <li ><Link to ="/events" style={{textDecoration: 'none'}} className={nav_ele_css}>Events</Link></li>
            <li ><Link to="/bookmarks_liked_posts" style={{textDecoration: 'none'}} className={nav_ele_css}>Trending</Link></li>
            <li className={nav_ele_css} style={{textDecoration: 'none'}}>ContactUs</li>
          </ul>
          <div className="nav_buttons">
            <button type ="button" className="darkmodeButton" onClick={()=>{onCangeDarkMode()}}>{light_mode?<MdDarkMode  className="darkmodeButton_icon_light"/>:<MdOutlineDarkMode className="darkmodeButton_icon_dark"/>} </button>
            <button type ="button" className="settings_button"><Link to="/settings">{light_mode?<IoSettingsOutline className="darkmodeButton_icon_light"/>:<IoSettings className="darkmodeButton_icon_dark"/>}</Link></button>
            
          </div>
        </nav>
    )
}
export default Navbar;