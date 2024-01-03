
import { useRouteError } from "react-router-dom";
const Error=()=>{


    const error=useRouteError();
        return(

        <div>

            <h1>
                OOPS PAGE NOT FOUND  TRY SOMETHING ELSE
            </h1>
            <h2>
                {error.status}:{error.statusText}
            </h2>
            
        </div>

        )


}
export default Error;