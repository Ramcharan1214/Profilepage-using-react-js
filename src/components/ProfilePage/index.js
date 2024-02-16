
import {Component} from "react"
import Navbar from "../Navbar"
import PostsDetails from "../PostsDetails"

import TabItem from "../TabItem"
import data from "../../data.json"
import  profile_image from "./images/profile_image.jpg"
import { HiOutlineLogout } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import "./index.css"

const tabsList = [
    {tabId: 'POSTS', displayText: 'Posts'},
    {tabId: 'BOOKMARKS', displayText: 'Bookmarks'},
    {tabId: 'LIKEDSTORIES', displayText: 'Liked Stories'},
  ]

class ProfilePage extends Component {
    state ={light_mode :true,data:null,activeTabId:tabsList[0].tabId}
    
    onCangeDarkMode=()=>{
        this.setState(prev=>({light_mode:!prev.light_mode}))
         
    }

    setActiveTabId = tabValue => {
        this.setState({activeTabId: tabValue})
      }
    
    profileContainer =()=>{
        const user_details =data["user_details"][0]
        const {light_mode}=this.state

        return (
                <div className={light_mode? 'profile_container_light' :'profile_container_dark'}>
                   <div className={light_mode? 'profile_details_card_light' :'profile_details_card_dark'}>
                         <div className={light_mode? 'profile_details_card_light' :'profile_details_card_dark'}><img src={profile_image} alt="profile_image" className="profile_image" />
                         <h1>{user_details.name}</h1>
                         <p>{user_details.bio}</p>
                         <div className="user_uploads_div">
                            <div className="min_con">
                            <h1>{user_details.no_of_posts}</h1>
                            <p>Posts</p>
                         </div>
                         <div className="min_con">
                            <h1>{user_details.no_of_followers}</h1>
                            <p>Followers</p>
                         </div>
                         <div className="min_con">
                            <h1>{user_details.no_of_impressions}</h1>
                            <p>Impressions</p>
                         </div>
                         </div> 
                   </div>
                   <div className={light_mode?'top_posts_section_light':'top_posts_section_dark'}>
                    <h2>Top posts</h2>
                    <ul>
                        {data.top_posts.map(each=>( 
                            <li key={each.id}>{each.name}</li>
                        ))}
                    </ul>
                          </div>
                          <div className="logout_con">
                          <button type ="button" className="logout_button">{light_mode?<TbLogout className="darkmodeButton_icon_light"/>:<HiOutlineLogout className="darkmodeButton_icon_dark"/>}</button>   
                 </div>
                   </div>
                </div>
        )
    }
   
    postsContainer=()=>{
        const posts_data=data["posts"]
        const bookmarks =data["bookmarks"]
        const likedStories=data["liked_stories"]
        const {activeTabId,light_mode}=this.state
        return(
            <div className={light_mode? 'post_container_light' :'post_container_dark'}>
                 
                 <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              setActiveTabId={this.setActiveTabId}
              isActive={activeTabId === tabDetails.tabId}
              light_mode={light_mode}
            />
          ))}
        </ul >
                {activeTabId==="POSTS" && (<PostsDetails details={posts_data} light_mode={light_mode}/>)}
                {activeTabId==="BOOKMARKS" && (<PostsDetails details={bookmarks} light_mode={light_mode}/>)}
                {activeTabId==="LIKEDSTORIES" && (<PostsDetails details={likedStories} light_mode={light_mode}/>)}
                 
                 
            </div>
        )
    }

    render(){
    const {light_mode} =this.state
    const profile_page=light_mode? 'profile_page_light' :'profile_page_dark'
    return (<div className="profile">
            <Navbar light_mode={light_mode} onCangeDarkMode={this.onCangeDarkMode}/>
            <div className={profile_page}>
                {this.profileContainer()}
                {this.postsContainer()}
            </div>
        </div>)
       }
}
export default ProfilePage