import React from 'react';
import { Switch } from "react-router-dom";
import AppliedRoute from './libs/AppliedRoute';
import Baigelman from './component/Baigelman';
import Glazer from './component/Glazer';
import Pre from './component/Eras/Pre';
import PreHenry from './component/PreHenry';
import PreDavid from './component/PreDavid';
import WW2 from './component/Eras/WW2';
import Post from './component/Eras/Post';
import Present from './component/Eras/Present';
import Archive from './component/archive';
import Tree from './component/FamilyTree';
import Results from './component/Results';
import HenryResults from './component/Results/HenryResults';
import DavidResults from './component/Results/DavidResults';
import RivaResults from './component/Results/RivaResults';
import Span from './component/Landing';
import Film from './component/Film';

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
                path="/pre/henry"
                exact
                component={PreHenry}
                appProps={appProps}
            />
            <AppliedRoute
                path="/pre/david"
                exact
                component={PreDavid}
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
                component={Tree}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/results/:search`}
                exact
                component={Results}
                appProps={appProps}
            />
            <AppliedRoute
                exact
                path="/results/henry"
                component={HenryResults}
                appProps={appProps}
            />
            <AppliedRoute
                exact
                path="/results/david"
                component={DavidResults}
                appProps={appProps}
            />

            <AppliedRoute
                exact
                path="/results/riva"
                component={RivaResults}
                appProps={appProps}
            />
        </Switch >

    );
}