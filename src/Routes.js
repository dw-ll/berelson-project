import React from 'react';
import { Switch } from "react-router-dom";

import AppliedRoute from './libs/AppliedRoute';

import Baigelman from './component/Families/Baigelman';
import Glazer from './component/Families/Glazer';
import Pre from './component/Eras/Pre';
import Henry from './component/Profiles/Henry';
import David from './component/Profiles/David';
import WW2 from './component/Eras/WW2';
import Post from './component/Eras/Post';
import Present from './component/Eras/Present';
import Archive from './component/Archive';
import FamilyTree from './component/FamilyTree';
import Search from './component/Search';
import Span from './component/Landing';
import Film from './component/Film';
import Missing from './component/Missing';
import NotFound from './component/Missing/404';

export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute
                path="/"
                exact
                component={Span}
                appProps={appProps}
            />
            <AppliedRoute
                path="/baigelman-family"
                exact
                component={Baigelman}
                appProps={appProps}
            />
            <AppliedRoute
                path="/glazer-family"
                exact
                component={Glazer}
                appProps={appProps}
            />
            <AppliedRoute
                path="/film"
                exact
                component={Film}
                appProps={appProps}
            />
            <AppliedRoute
                path="/pre"
                exact
                component={Pre}
                appProps={appProps}
            />
            <AppliedRoute
                path="/profile/henry"
                exact
                component={Henry}
                appProps={appProps}
            />
            <AppliedRoute
                path="/profile/david"
                exact
                component={David}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/ww2`}
                exact
                component={WW2}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/post`}
                exact
                component={Post}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/present`}
                exact
                component={Present}
                appProps={appProps}
            />
            <AppliedRoute
                path="/archive"
                exact
                component={Archive}
                appProps={appProps}
            />

            <AppliedRoute
                exact
                path="/tree"
                component={Missing}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/search/:search`}
                exact
                component={Search}
                appProps={appProps}
            />
            <AppliedRoute
                exact
                component={NotFound}
                appProps={appProps}
            />

        </Switch >

    );
}