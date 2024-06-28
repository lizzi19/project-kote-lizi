const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, unique: true, required: true },
    founded: { type: Number },
    stadium: { type: String }
}, {
    collection: 'teams',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const TeamModel = mongoose.model('Team', teamSchema);
module.exports = TeamModel;
