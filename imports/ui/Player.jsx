import React, { Component } from 'react';
import { Card, CardMedia, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: 12,
    },
}

export default class Player extends Component {
    render() {
        return (
            <Card>
                <CardMedia
                  overlay={<CardTitle title="Zinedin Zidan" subtitle="Offence: 12 - Defence: 8" />}
                >
                    <img src="player.jpg" />
                </CardMedia>
                <CardText>
                    <Chip backgroundColor={blue200} style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            2
                        </Avatar>
                        Ball Manipulation
                    </Chip>
                    <Chip backgroundColor={blue200} style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            2
                        </Avatar>
                        Kicking abilities
                    </Chip>
                </CardText>
                <CardActions>

                </CardActions>
            </Card>
        );
    }
}
