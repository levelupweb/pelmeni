const mongoose = require("mongoose");

const { 
    MODEL_ADMIN,
} = require("../../consts/models");

const {
    ADMIN_CREATED,
    ADMIN_LOGIN,
    ADMIN_PASSWORD,
} = require("./consts");

const AdminSchema = new mongoose.Schema({
    [ADMIN_CREATED]: {
        type: Date,
        default: Date.now(),
    },
    [ADMIN_LOGIN]: {
        type: String,
        required: true,
    },
    [ADMIN_PASSWORD]: {
        type: String,
        required: true,
        select: false,
    }
});


module.exports = mongoose.model(MODEL_ADMIN, AdminSchema);
