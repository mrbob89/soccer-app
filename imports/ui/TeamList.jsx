import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default class TeamList extends Component {
    render() {
        const { player } = this.props;

        return (
            <ListItem
                primaryText={player.name}
                leftAvatar={<Avatar src="player.jpg"/>}
            />
        );
    }
}
