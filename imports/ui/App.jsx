import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Player from './Player.jsx';
import TeamList from './TemaList.jsx';
import TeamStats from './TeamStats.jsx';

export default class App extends Component {
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
                        <div className="col s12 m5"><TeamList /></div>
                        <div className="col s12 m5"><TeamStats /></div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
