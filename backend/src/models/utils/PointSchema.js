const mongoose = require('mongoose');
// esse código é padrão do mongoose para storage de latitude e longitude.
// esse trecho está na documentação deles
const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

module.exports = PointSchema;
