import { context } from "../App"
import { useContext } from "react"
const Profile = ()=>{
    const name = useContext(context);
    console.log(name);
   return(
    <>
    This is profile page
    </>
   ) 
}

export default Profile;