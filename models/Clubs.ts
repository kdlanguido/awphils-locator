import { Schema, model, models } from 'mongoose'

const clubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    founder: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    establishYear: {
        type: Number,
        required: true
    },
    region: {
        type: String,
        required: true
    },
})

const ClubsModel = models.clubs || model('clubs', clubSchema)

export default ClubsModel;