import React, { Component } from 'react';

import Spinner from "./components/UI/Spinner/Spinner";
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from "react-router-dom";

const BurgerBuilder = React.lazy(() => import("./containers/BurgerBuilder/BurgerBuilder").then());
const Checkout = React.lazy(() => import("./containers/Checkout/Checkout").then());
const Orders = React.lazy(() => import('./containers/Orders/Orders').then());

class App extends Component {
    state = {
        show: true,
    };

    componentDidMount() {
        /*setTimeout(() => {
            this.setState({show: false});
        }, 50000);*/
    }

    render () {
        return (
            <React.Fragment>
                <Layout />
                    <Switch>
                        <Route
                            path={"/burger-builder"}
                            exact
                            render={() => (
                                <React.Suspense fallback={<Spinner/>}>
                                    <BurgerBuilder />
                                </React.Suspense>
                            )}
                        />
                        <Route
                            path={"/checkout"}
                            render={() => (
                                <React.Suspense fallback={<Spinner/>}>
                                    <Checkout/>
                                </React.Suspense>
                            )}
                        />
                        <Route
                            path={"/"}
                            exact
                            render={() => (
                                <React.Suspense fallback={<Spinner/>}>
                                    <BurgerBuilder/>
                                </React.Suspense>
                            )}
                        />
                        <Route
                            path={"/orders"}
                            render={() => (
                                <React.Suspense fallback={<Spinner/>}>
                                    <Orders/>
                                </React.Suspense>
                            )}
                        />
                    </Switch>
            </React.Fragment>
        );
    }
}

export default App;
