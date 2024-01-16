import UserClass from "./UserClass";



import React from "react";


class About extends React.Component{

        constructor(props){
                super(props);

             this.state={

                parent:"Parent Rendered Constrcutor"
             }

            //  console.log("Parent Constructor Called");

        }

        async componentDidMount(){
           
         const data= await fetch("https://api.github.com/users/suhas-107");
     
         const json= await data.json();
     
             // console.log(this.props.name+"Coponentdidmount called");
     
             console.log(json);
         }

       render(){
              


      //   console.log("Parent Render Postion")
             
        
        return(

                <div className="About">
          
                <UserClass name="Child1" email="Child1"/>
                  <UserClass name="Child2" email="Child2"/>
    
                <br/>
    
                
    
    
    
                </div> 
             )

       }

}

export default About;