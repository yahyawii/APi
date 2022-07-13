import {Navigate} from 'react-router-dom'
const PrivateRoute=({auth,children})=>{
    return(
        <div>
            {
                auth ? children : <Navigate to='/'/>
            }
        </div>
    )
}

export default PrivateRoute