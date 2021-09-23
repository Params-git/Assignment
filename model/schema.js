const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

// itemsSchema.pre('save', function (next) {
//     now = new Date();
//     this.mDate = now;
//     if (!this.cDate) {
//         this.cDate = now;
//     }
//     next();
// });

const itemModel = new mongoose.model('items', itemsSchema);
module.exports = itemModel;