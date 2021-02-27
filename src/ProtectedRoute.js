import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({isAuth: isLoggedIn, component: Component, ...rest}) {
    return (

     <Route {...rest} render={props => {
        if(isLoggedIn) {
            return <Component/>;
        } else {
            return <Redirect to={{pathname: '/', state: {from: props.location}}} />
        }
        }} />
    );
}

export default ProtectedRoute
