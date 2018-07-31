import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { BrowserRouter, Route, link, Switch, Redirect } from 'react-router-dom'
import Nav from  './nav/Nav'
import NotFound from './notfound/NotFound'
import Home from './home/Home'
import Ask from './ask/Ask'
import Column from './column/Column'
import Classroom from './classroom/Classroom'
import Discover from './discover/Discover'

const App = () => (
    <BrowserRouter>
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect from="/home" to="/" />
                <Route  path="/ask" component={Ask} />
                <Route  path="/column" component={Column} />
                <Route  path="/classroom" component={Classroom} />
                <Route  path="/discover" component={Discover} />
                <Route  component={NotFound} />
            </Switch>
            <AddTodo />
            <h1>something wrong</h1>
            <VisibleTodoList />
            <Footer />
        </div>
    </BrowserRouter>
)

export default App