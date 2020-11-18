import React from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedRoute } from 'react-router-transition';
export default function AppliedAnimatedRoute({ component: Comp, appProps, ...rest }) {
    return (
        <AnimatedRoute
            {...rest}
            render={props => <Comp {...props} {...appProps} />}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
                transform: `translateX(${styles.offset}%)`,
            })}
        />
    );
};