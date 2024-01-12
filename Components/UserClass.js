
import React from "react";

class UserClass extends React.Component{
 
      
    constructor(props){

        super(props);

          console.log("Childs Constrcutor Rendered");

        this.state={

            count1:1,
            count2:2

        }
    }
    render(){
          
         console.log("Childs Coponents Render Function Rendered");

        const {name,email}=this.props;

        const{count1}=this.state;

        return(

            <div>

                <h1>
                
                {name};
                 
                </h1>
                <h1>
                
                {email};
                 
                </h1>

                <h1>
                
                 
                 Count:{count1}
               
                 
                </h1>

                <button onClick={()=>{

                    this.setState({
                        count1:count1+1
                    })

                    
                }}>

                 CLICK ME
                </button>
            </div>
        )
    }


}

export default UserClass;