import React from 'react';
import { Route } from 'react-router-dom';
export default function AppliedRoute({ component: Comp, appProps, ...rest }) {
    return (
        <Route {...rest} render={props => <Comp {...props} {...appProps} />} />
    );
};