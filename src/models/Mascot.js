const {Schema, model} = require('mongoose');

const mascotSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        breed: {
            type: String,
        },
        size: {
            type: String,
        },
        age: {
            type: String,
        },
        vaccinePlan: {
            type: String,
        },
        attendance: {
            type: String,
        },
        owners: [],
    },
    {
        timestamps: true,
    }
);

module.exports = model('Mascot', mascotSchema);