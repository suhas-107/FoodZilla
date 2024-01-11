
import React from "react";

class UserClass extends React.Component{
 
      
    constructor(props){

        super(props);
    }
    render(){


        const {name,email}=this.props;

        return(

            <div>

                <h1>
                
                {name};
                 
                </h1>
                <h1>
                
                {email};
                 
                </h1>
            </div>
        )
    }


}

export default UserClass;