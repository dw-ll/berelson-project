import React from 'react';
import { Switch } from "react-router-dom";
import AppliedRoute from './libs/AppliedRoute';
import Baigelman from './component/Baigelman';
import Pre from './component/pre';
import PreHenry from './profiles/component/people/pre_henry';
import WW2 from './component/ww2';
import Post from './component/post';
import Present from './component/present';
import Archive from './component/archive';
import Tree from './component/tree';
import Results from './component/Results';
import HenryResults from './component/Results/HenryResults';
import DavidResults from './component/Results/DavidResults';
import RivaResults from './component/Results/RivaResults';
import LandingSpan from './component/landing_span';





export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute
                path="/"
                exact
                render={() => {
                    return <LandingSpan />;
                }}
                appProps={appProps}
            />
            <AppliedRoute
                path="/baigelman-family"
                exact
                render={() => {
                    return <Baigelman />;
                }}
                appProps={appProps}
            />

            <AppliedRoute
                path="/pre"
                exact
                render={() => {
                    return <Pre />;
                }}
                appProps={appProps}
            />
            <AppliedRoute
                path="/pre/henry"
                exact
                render={() => {
                    return <PreHenry />;
                }}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/ww2`}
                exact
                render={() => {
                    return <WW2 />;
                }}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/post`}
                exact
                render={() => {
                    return <Post />;
                }}
                appProps={appProps}
            />
            <AppliedRoute
                path={`/present`}
                exact
                render={() => {
                    return <Present />;
                }}
                appProps={appProps}
            />
            <AppliedRoute
                exact
                path="/archive/"
                render={() => (
                    <Archive />
                )}
                appProps={appProps}
            />

            <AppliedRoute
                exact
                path="/tree"
                render={() => (
                    <Tree />
                )}
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
                render={props => (
                    <HenryResults />
                )}
                appProps={appProps}
            />
            <AppliedRoute
                exact
                path="/results/david"
                render={props => (
                    <DavidResults />
                )}
                appProps={appProps}
            />

            <AppliedRoute
                exact
                path="/results/riva"
                render={props => (
                    <RivaResults />
                )}
                appProps={appProps}
            />
        </Switch >

    );
}