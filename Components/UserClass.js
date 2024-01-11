
import React from "react";

class UserClass extends React.Component{
 
      
    constructor(props){

        super(props);



        this.state={

            count:1
        }
    }
    render(){


        const {name,email}=this.props;

        const{count}=this.state;

        return(

            <div>

                <h1>
                
                {name};
                 
                </h1>
                <h1>
                
                {email};
                 
                </h1>

                <h1>
                
               {count}
                 
                </h1>
            </div>
        )
    }


}

export default UserClass;