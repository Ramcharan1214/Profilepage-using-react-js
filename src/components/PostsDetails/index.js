import "./index.css"

const PostsDetails =(props) =>{
    const {details,light_mode}=props
   return (
    <div  className="posts_details">
        <ul className="posts_con">
            {details.map(each=>(
                <li className={light_mode?'post_item_light':'post_item_dark'} key ={each.id}>
                 <img src={each.thumbnailUrl} alt="post" className="thumbnail_image"/>
                 <h1>{each.headline}</h1>
                 <p>{each.date}</p>
                 <div className="button_con">
                    <button type="button" className="view_post_button">View Post</button>
                 </div>
                 
                </li>
            ))}
        </ul>
    </div>
   )
}
 export default PostsDetails 