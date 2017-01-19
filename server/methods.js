import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players.js';

Meteor.methods({
    insertPlayer(player) {
        Players.insert(player);
    }
});
