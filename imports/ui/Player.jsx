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
        const { player } = this.props;
        const defence = player.duelTackling + player.fieldCoverage + player.gameStrategy + player.playmakingRisks;
        const offence = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.playmakingRisks;
        const total = offence + player.duelTackling + player.fieldCoverage + player.gameStrategy;

        return (
            <Card>
                <CardMedia
                  overlay={<CardTitle title={player.name} subtitle={`Offence: ${offence} - Defence: ${defence} - Total: ${total}`} />}
                >
                    <img src="player.jpg" />
                </CardMedia>
                <CardText>
                    <div style={styles.wrapper}>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.ballManipulation}
                            </Avatar>
                            Ball Manipulation
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.kickingAbilities}
                            </Avatar>
                            Kicking abilities
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.passingAbilities}
                            </Avatar>
                            Passing abilities
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.duelTackling}
                            </Avatar>
                            Duel tackling
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.fieldCoverage}
                            </Avatar>
                            Field coverage
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.blockingAbilities}
                            </Avatar>
                            Blocking abilities
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.gameStrategy}
                            </Avatar>
                            Game strategy
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                {player.playmakingRisks}
                            </Avatar>
                            Playmaking risks
                        </Chip>
                    </div>
                </CardText>
                <CardActions>

                </CardActions>
            </Card>
        );
    }
}
