import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Player from './Player.jsx';
import TeamList from './TeamList.jsx';
import TeamStats from './TeamStats.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: []
        };
    }

    componentWillMount() {
        this.setState({
            players: [
                {
                    _id: 1,
                    name: "Zinedine Zidane",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 3,
                    blockingAbilities: 2,
                    gameStrategy: 3,
                    playmakingRisks: 3
                },
                {
                    _id: 2,
                    name: "Artem Milevskiy",
                    ballManipulation: 2,
                    kickingAbilities: 2,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 1,
                    blockingAbilities: 1,
                    gameStrategy: 2,
                    playmakingRisks: 2
                },
                {
                    _id: 3,
                    name: "Roberto Carlos",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 3,
                    duelTackling: 1,
                    fieldCoverage: 3,
                    blockingAbilities: 3,
                    gameStrategy: 3,
                    playmakingRisks: 3
                },
            ]
        })
    }

    renderPlayers() {
        return this.state.players.map(player => (
            <TeamList key={player._id} player={player} />
        ))
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar
                        title="Soccer Application"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}
                    />
                    <div className="row">
                        <div className="col s12 m7"><Player /></div>
                        <div className="col s12 m5">
                            <h2>Team List</h2>
                            <Divider />
                            <List>
                                {this.renderPlayers()}
                            </List>
                            <Divider />
                        </div>
                        <div className="col s12 m5"><TeamStats /></div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
