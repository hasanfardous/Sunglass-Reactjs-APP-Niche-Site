import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = (props) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    const { children, ...rest } = props;
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;