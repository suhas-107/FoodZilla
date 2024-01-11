
const User = (props) => {


    const {name,email}=props;
 
    return (
      <div className="Username">
        <h1>{name}</h1>
        <h2>{email}</h2>
        
      </div>
    );
  }
  
  export default User;