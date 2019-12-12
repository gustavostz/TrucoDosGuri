import {Switch, Route} from "react-router-dom"
import React, {Component} from 'react';
import {Jogo} from "./screens";
import './App.css';
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends Component {
    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Switch>
                    <Route path="/" component={Jogo} exact/>
                </Switch>
            </DndProvider>
        );
    }
}

export default App;
