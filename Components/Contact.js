import useOnlineStatus from "../utils/useOnlineStatus";


const Contact=()=>{
    
  
  const onlinestatus=useOnlineStatus();

    if(onlinestatus===false){

      return (<h1 className="OfflineH1">
         OOPS I THINK YOU ARE OFFLINE 
      </h1>)
    }

    return(
         <div className="Contact">
        <h1>This is a contact Page</h1>

          <h2>All the contact page will be done herer</h2>

          </div>
        

    )
}
export default Contact;