import UserClass from "./UserClass";



import React from "react";


class About extends React.Component{

        constructor(props){
                super(props);

             this.state={

                parent:"Parent Rendered Constrcutor"
             }

             console.log(this.state.parent);

        }

       render(){
              


        console.log("Render Ke pehle ka rendered")
             
        
        return(

                <div className="About">
          
                <UserClass name="Suhas(class)" email="deshpandesuhas107@gmail.com(class)"/>
    
                <br/>
    
                
    
    
    
                </div> 
             )

       }

}

export default About;