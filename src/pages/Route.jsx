import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home/'));
const Checkout = lazy(() => import('./Checkout'));

const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/checkout" component={Checkout}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;