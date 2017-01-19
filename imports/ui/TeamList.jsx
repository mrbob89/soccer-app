import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

export default class TeamList extends Component {
    updateCurrentPlayer(player) {
        this.props.updateCurrentPlayer(player);
    }

    render() {
        const { player } = this.props;

        return (
            <ListItem
                primaryText={player.name}
                leftAvatar={<Avatar src="player.jpg"/>}
                onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
            />
        );
    }
}
