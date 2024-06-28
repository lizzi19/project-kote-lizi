const TeamModel = require('../models/team');

module.exports = {
    getAll: (req, res) => {
        TeamModel.find({})
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },
    add: async (req, res) => {
        try {
            const savedItem = await new TeamModel(req.body).save();
            res.json(savedItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const item = await TeamModel.findById(req.params.id);
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            await TeamModel.deleteOne({ _id: req.params.id });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const item = await TeamModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
