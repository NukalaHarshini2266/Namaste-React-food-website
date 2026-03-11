import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";
const About=()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl text-center m-4 p-4">This is about page of my app</h1>
            <UserClass name={"Harshini (class)"} age={19}/>
            <div className="font-light text-2xl text-center"> loggedInuser:
                <userContext.Consumer>
                    {/* {(data)=>console.log(data)} */}
                    {({loggedInuser})=><h1>{loggedInuser}</h1>}
                </userContext.Consumer>
            </div>
        </div>
    )
}

export default About;