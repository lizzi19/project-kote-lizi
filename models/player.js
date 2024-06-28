const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    position: { type: String },
    playerCode: { type: String, unique: true },
    teams: [{
       
        name: { type: String }
    }]
}, {
    collection: 'players',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const PlayerModel = mongoose.model('Player', playerSchema);
module.exports = PlayerModel;
