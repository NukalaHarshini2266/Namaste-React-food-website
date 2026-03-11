import React from "react"; 
 
class UserClass extends React.Component{

    constructor(props){
        super(props);

        //console.log(props);
        this.state={
            userInfo:{
                login:"harshini",
                location:"default",
            }
           }
        
    };
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/NukalaHarshini2266");

        const json=await data.json();

        this.setState({
            userInfo:json,
        });
        //console.log(json);
    }
    componentDidUpdate(){
        //console.log("component updated");
    }
    componentWillUnmount(){
        //console.log("component is unmounted");
    }

    render(){
        const {login,location,avatar_url}=this.state.userInfo;
        return (
    <div className="user-card">
        {/* <img src={avatar_url}/> */}
        <h2 className="font-light text-2xl text-center m-2 p-2">Github Name:{login}</h2>

    </div>

    );

    }
}

export default UserClass;