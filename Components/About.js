import { json } from "react-router-dom";

import User from "./User";





import React from "react";


class About extends React.Component{

        constructor(props){
                super(props);

             this.state={
                  
                userInfo:{
                      name:"dummy",
                      bio:"Dummybio",
                      company:"DummySatvacart"
                   }
                 };
            
             }

            //  console.log("Parent Constructor Called");

        

        async componentDidMount()
        {
           
         const data= await fetch("https://api.github.com/users/suhas-107");
     
         const json= await data.json();
     
             // console.log(this.props.name+"Coponentdidmount called");

           this.setState({

            userInfo:json
           })
     
             console.log(json);
         }


         

       render()
       {
              


      //   console.log("Parent Render Postion")

       const {name,bio,company}=this.state.userInfo;
             
        
        return(

                <div className="About">
                  
    
                 <h1>This is an about page I am goinf to use the github live api and fetch data below</h1>


                 <p>
                 Name: {name}
                   
                 </p>
                 <br/>
                <p>
                
                Bio: {bio}</p>
                <br/>
                 
                  <p> 
                  
                  Company: {company}</p>
                  <br/>
    
                <User/>
    
                </div> 
             )

       }

      }

export default About;