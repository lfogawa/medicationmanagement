import { Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'token':false}
    return(
        auth.token ? <Navigate to="/" /> : <Navigate to="/login"/>
    )
}

export { PrivateRoutes }