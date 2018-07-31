import React, {Component} from 'react';
import { BrowserRouter, Route, link, Switch, Redirect } from 'react-router-dom'
import H1 from './H1'
import H2 from './H2'


class Ask extends Component {
    render() {
        return (
            <div className="ask">
                <BrowserRouter>
                   <div>
                       <Route exact path="/ask/" component={H1} />
                       <Route path="/ask/h2" component={H2} />
                   </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Ask;